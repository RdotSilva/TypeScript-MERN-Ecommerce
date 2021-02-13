import React from "react";
import { Alert } from "react-bootstrap";

interface Props {
  variant: string;
  children: any; // TODO type to allow string + <Link> as children
}

/**
 * Message component used to format alerts throughout different pages
 */
const Message = ({ variant, children }: Props) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: 'info"',
};

export default Message;
