import React, { useState } from "react";
import { RouteComponentProps } from "react-router";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const UserEditScreen = ({ match, history }: Props) => {
  const userId = match.params.id;

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  return <div>User Edit Screen</div>;
};

export default UserEditScreen;
