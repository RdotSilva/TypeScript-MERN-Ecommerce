import ReactDOM from "react-dom";
import ReviewPercentage from "./ReviewPercentage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ReviewPercentage />, div);
});
