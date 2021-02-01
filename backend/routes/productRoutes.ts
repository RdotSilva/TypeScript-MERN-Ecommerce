import express from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.json(products);
});

router.get("/:id", (req: Request, res: Response) => {
  const product = products.find(
    (product: ProductType) => product._id === req.params.id
  );
  res.json(product);
});

export default router;
