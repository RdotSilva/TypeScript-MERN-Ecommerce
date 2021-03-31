import React, { useState } from "react";
import { RouteComponentProps } from "react-router";

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

  return <div>Edit Product Screen</div>;
};

export default ProductEditScreen;
