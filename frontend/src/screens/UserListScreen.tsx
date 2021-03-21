import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listUsers } from "../actions/userActions";
import Loader from "../components/Loader.";
import Message from "../components/Message";
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

  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm"></Table>
      )}
    </>
  );
};

export default UserListScreen;
