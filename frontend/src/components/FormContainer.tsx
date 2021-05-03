import { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";

/**
 * Form Container used as a template through application that renders the children that are passed in
 * @param children The children to render
 */
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
