import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { listOrders } from "../actions/orderActions";
import { ReduxState } from "../types/ReduxState";

interface Props extends RouteComponentProps {}

const OrderListScreen = ({ history }: Props) => {
  const dispatch = useDispatch();

  const { loading, orders, error } = useSelector(
    (state: ReduxState) => state.orderList
  );
  const { userInfo } = useSelector((state: ReduxState) => state.userLogin);

  /**
   * List all orders if user is admin, otherwise bring user to login screen
   */
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return <>Order List Screen</>;
};

export default OrderListScreen;
