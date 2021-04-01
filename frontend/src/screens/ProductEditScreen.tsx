import React, { FormEvent, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { listProductDetails } from "../actions/productActions";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader.";
import Message from "../components/Message";
import { ReduxState } from "../types/ReduxState";

interface MatchParams {
  id: string;
}
interface Props extends RouteComponentProps<MatchParams> {}

const ProductEditScreen = ({ match }: Props) => {
  const productId = match.params.id;
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [countInStock, setCountInStock] = useState<number>(0);

  const dispatch = useDispatch();

  const { product, loading, error } = useSelector(
    (state: ReduxState) => state.productDetails
  );

  /**
   * Load a product if not currently loaded and email product state values
   */
  useEffect(() => {
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
  }, [product, productId, dispatch, history]);

  /**
   * Update product information
   * @param e Form event
   */
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO: Update the product
  };

  /**
   * Render the product edit form
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
