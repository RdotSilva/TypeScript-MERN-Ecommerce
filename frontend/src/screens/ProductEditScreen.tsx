import axios from "axios";
import React, { FormEvent, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { listProductDetails, updateProduct } from "../actions/productActions";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader.";
import Message from "../components/Message";
import { ProductUpdateActionTypes } from "../types/";
import { ReduxState } from "../types/ReduxState";

interface MatchParams {
  id: string;
}
interface Props extends RouteComponentProps<MatchParams> {}

const ProductEditScreen = ({ match, history }: Props) => {
  const productId = match.params.id;
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [countInStock, setCountInStock] = useState<number>(0);
  const [uploading, setUploading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state: ReduxState) => state.productDetails
  );

  const {
    success: successUpdate,
    loading: loadingUpdate,
    error: errorUpdate,
  } = useSelector((state: ReduxState) => state.productUpdate);

  /**
   * Load a product if not currently loaded and email product state values
   */
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: ProductUpdateActionTypes.PRODUCT_UPDATE_RESET });
      history.push("/admin/productlist");
    } else {
      if (!product || product._id !== productId)
        dispatch(listProductDetails(productId));
      else {
        setName(product.name);
        setPrice(product.price);
        setImage(product.image);
        setDescription(product.description);
        setBrand(product.brand);
        setCategory(product.category);
        setCountInStock(product.countInStock);
      }
    }
  }, [product, productId, dispatch, history, successUpdate]);

  /**
   * Update product information
   * @param e Form event
   */
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
      })
    );
  };

  /**
   * Get the image from the form and upload it to the backend
   * @param e Change Event
   */
  const uploadFileHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  /**
   * Render the product edit
   */
  const productDetailDisplay = () => {
    if (loading) {
      return <Loader />;
    } else if (error) {
      return <Message variant="danger">{error}</Message>;
    } else
      return (
        <FormContainer>
          <h1>Edit Product</h1>
          {loadingUpdate && <Loader />}
          {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>
            <Form.Group controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="countInStock">
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter CountInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(Number(e.target.value))}
              />
            </Form.Group>
            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        </FormContainer>
      );
  };

  return (
    <>
      <Link to="/admin/productlist" className="btn btn-dark my-3">
        Go Back
      </Link>
      {productDetailDisplay()}
    </>
  );
};

export default ProductEditScreen;
