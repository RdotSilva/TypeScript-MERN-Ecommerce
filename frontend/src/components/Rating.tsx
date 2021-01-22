import React from "react";

interface Props {
  value: number;
  text: string;
}

const Rating = ({ value, text }: Props) => {
  return <div className="rating"></div>;
};

export default Rating;
