import React, { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";

const FormContainer: FunctionComponent = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
