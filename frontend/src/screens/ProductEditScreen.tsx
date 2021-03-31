import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
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

  return <div>Edit Product Screen</div>;
};

export default ProductEditScreen;
