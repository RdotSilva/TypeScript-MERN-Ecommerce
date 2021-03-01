import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ReduxState } from "../types/ReduxState";

interface Props {}

const ProfileScreen = (props: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const { user, loading, error } = useSelector(
    (state: ReduxState) => state.userDetails
  );

  return <div></div>;
};

export default ProfileScreen;
