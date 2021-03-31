import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { listProductDetails } from "../actions/productActions";
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

  return <div>Edit Product Screen</div>;
};

export default ProductEditScreen;
