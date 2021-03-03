import React, { FormEvent, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import Loader from "../components/Loader.";
import Message from "../components/Message";
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

  const { success } = useSelector(
    (state: ReduxState) => state.userUpdateProfile
  );

  /**
   * Push an update to the user profile
   * @param e HTML event form element
   */
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords must match");
    } else {
      if (user) {
        dispatch(
          updateUserProfile({
            _id: user._id,
            name,
            email,
            password,
            isAdmin: user.isAdmin,
          })
        );
      }
    }
  };

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
  }, [dispatch, history, userInfo, user]);

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">Profile Updated</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  );
};

export default ProfileScreen;
