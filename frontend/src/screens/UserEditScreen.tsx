import React, { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";
import { ReduxState } from "../types/ReduxState";

interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

const UserEditScreen = ({ match, history }: Props) => {
  const userId = match.params.id;

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const { user, loading, error } = useSelector(
    (state: ReduxState) => state.userDetails
  );

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add logic to dispatch update user action
  };

  return <div>User Edit Screen</div>;
};

export default UserEditScreen;
