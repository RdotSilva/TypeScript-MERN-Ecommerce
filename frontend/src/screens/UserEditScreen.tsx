import React from "react";
import { RouteComponentProps } from "react-router";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const UserEditScreen = ({ match, history }: Props) => {
  return <div>User Edit Screen</div>;
};

export default UserEditScreen;
