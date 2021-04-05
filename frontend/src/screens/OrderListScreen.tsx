import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {}

const OrderListScreen = ({ history }: Props) => {
  const dispatch = useDispatch();

  return <>Order List Screen</>;
};

export default OrderListScreen;
