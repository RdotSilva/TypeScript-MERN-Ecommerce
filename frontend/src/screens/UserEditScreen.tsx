import React from "react";
import { RouteComponentProps } from "react-router";

interface Props extends RouteComponentProps {}

const UserEditScreen = ({ match, history }: Props) => {
  return <div>User Edit Screen</div>;
};

export default UserEditScreen;
