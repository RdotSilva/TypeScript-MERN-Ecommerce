import React from "react";
import { Helmet } from "react-helmet";

interface Props {
  title?: string;
  keyword?: string;
  description?: string;
}

/**
 * Component used to create a custom Meta within individual pages
 */
const Meta = ({ title, description, keyword }: Props) => {
  return (
    <Helmet data-testid="helmet-meta">
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta name="keyword" content={keyword}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "TypeScript MERN E-Commerce",
  description: "We sell the best items at the best prices",
  keywords: "store, ecommerce, buy items, best prices",
};

export default Meta;
