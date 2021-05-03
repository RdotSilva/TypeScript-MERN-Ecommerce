import { Spinner } from "react-bootstrap";

/**
 * Loader component that will show a spinner when page is loading
 */
const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
      data-testid="spinner"
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
