import React, { FormEvent, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import { register } from "../actions/userActions";
import FormContainer from "../components/FormContainer";
import Loader from "../components/Loader.";
import Message from "../components/Message";
import { RootState } from "../store";
import { User } from "../types/User";

interface Props extends RouteComponentProps {}

const RegisterScreen = ({ location, history }: Props) => {
  

export default RegisterScreen;
