import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { ReduxState } from "../types/ReduxState";

interface Props extends RouteComponentProps {}

const OrderListScreen = ({ history }: Props) => {
  const dispatch = useDispatch();

  const { loading, orders, error } = useSelector(
    (state: ReduxState) => state.orderList
  );
  const { userInfo } = useSelector((state: ReduxState) => state.userLogin);

  return <>Order List Screen</>;
};

export default OrderListScreen;
