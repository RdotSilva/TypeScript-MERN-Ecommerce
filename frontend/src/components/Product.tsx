import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Product as ProductType } from "../types/";
import Rating from "./Rating";

interface Props {
  product: ProductType;
}

const Product = ({ product }: Props) => {
  return (
    <Card data-testid="product-card" className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
