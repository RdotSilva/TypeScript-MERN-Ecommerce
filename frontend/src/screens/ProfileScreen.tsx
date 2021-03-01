import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { getUserDetails } from "../actions/userActions";
import { ReduxState } from "../types/ReduxState";

interface Props extends RouteComponentProps {}

const ProfileScreen = ({ history }: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const dispatch = useDispatch();

  const { user, loading, error } = useSelector(
    (state: ReduxState) => state.userDetails
  );

  const { userInfo } = useSelector((state: ReduxState) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user?.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo]);

  return <div></div>;
};

export default ProfileScreen;
