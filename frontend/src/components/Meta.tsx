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
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta name="keyword" content={keyword}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To ECommerce",
  description: "we sell the best products cheaply",
  keywords: "electronics, buy electronics, cheap electronics",
};

export default Meta;
