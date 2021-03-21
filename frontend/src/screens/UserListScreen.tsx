import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";
import { ReduxState } from "../types/ReduxState";

interface Props {}

const UserListScreen = (props: Props) => {
  const dispatch = useDispatch();

  const { loading, error, users } = useSelector(
    (state: ReduxState) => state.userList
  );

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  return <div></div>;
};

export default UserListScreen;
