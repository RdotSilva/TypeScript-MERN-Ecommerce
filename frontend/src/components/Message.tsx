import React from "react";
import { Alert } from "react-bootstrap";

interface Props {
  variant: string;
  children: string;
}

const Message = ({ variant, children }: Props) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default Message;
