import asyncHandler from "express-async-handler";
import products from "../data/products";
import { Product } from "../models/";
import { Response, Request, Review } from "../types/";

/**
 * Fetch all products
 * @route GET /api/products
 * @access Public
 */
const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  // Get search keyword from request and search for partial match
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        } as any,
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

/**
 * Fetch single product
 * @route GET /api/products/:id
 * @param id ID of product to fetch
 * @access Public
 */
const getProductById = asyncHandler(async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

/**
 * Delete single product
 * @route DELETE /api/products/:id
 * @param id ID of product to delete
 * @access Private/Admin
 */
const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

/**
 * Create a new product
 * @route POST /api/products
 * @access Private/Admin
 */
const createProduct = asyncHandler(async (req: Request, res: Response) => {
  const product = new Product({
    name: "Sample Name",
    price: 0,
    user: req.user?._id,
    image: "/images/sample.jpg",
    brand: "Sample Brand",
    category: "Sample Category",
    countInStock: 0,
    numReviews: 0,
    description: "Same Description",
  });

  const createdProduct = await product.save();
  res.status(201).json(product);
});

/**
 * @description Update a product
 * @route PUT /api/products/:id
 * @access Private/Admin
 */
const updateProduct = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  const {
    name,
    price,
    image,
    description,
    brand,
    category,
    countInStock,
  } = req.body as {
    name: string;
    price: number;
    description: string;
    image: string;
    brand: string;
    category: string;
    countInStock: number;
  };

  const product = await Product.findById(id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.status(201).json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found.");
  }
});

/**
 * @description Create a new review
 * @route POST /api/products/:id/reviews
 * @access Private
 */
const createProductReview = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };
    const { rating, comment } = req.body as {
      rating: number;
      comment: string;
    };

    const product = await Product.findById(id);

    if (product) {
      // Check if user has already reviewed a product
      const alreadyReviewed = product.reviews.find(
        (review: Review) => review.user.toString() === req.user?._id.toString()
      );

      if (alreadyReviewed) {
        res.status(400);
        throw new Error("Product already reviewed");
      }

      const review = {
        name: req.user?.name,
        rating: Number(rating),
        comment,
        user: req.user?._id,
      };

      product.reviews.push(review);

      product.numReviews = product.reviews.length;

      product.rating =
        product.reviews.reduce(
          (acc: number, item: any) => item.rating + acc,
          0
        ) / product.reviews.length;

      await product.save();
      res.status(201).json({ message: "Review added" });
    } else {
      res.status(404);
      throw new Error("Product not found.");
    }
  }
);

/**
 * @description Get top rated products
 * @route GET /api/products/top
 * @access Public
 */
const getTopProducts = asyncHandler(async (req: Request, res: Response) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);

  res.json(products);
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
};
