import { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialAccount from "../SocialAccount/SocialAccount";
import "./Login.css";
const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();
  const location = useLocation();

  const [user] = useAuthState(auth);
  const [signInWithEmailAndPassword,loading, error] =
    useSignInWithEmailAndPassword(auth);

  const from = location.state?.from?.pathname || "/";

  const handelSignInFormSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user]);
  let errorMassage;
  if (error) {
    errorMassage = <p className=" text-danger">{error.message}</p>;
  }
  if (loading) {
    return <Loading></Loading>
  }
  const navigateResisterPage = () => {
    navigate("/resister");
  };
  return (
    <div className="w-50 mx-auto my-5">
      <h2>Please Login</h2>
      <Form onSubmit={handelSignInFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {errorMassage}
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p>
          Create New Account?
          <span
            className="text-decoration-underline"
            onClick={navigateResisterPage}
            role="button"
          >
            Resister
          </span>
        </p>
      </Form>
      <SocialAccount></SocialAccount>
    </div>
  );
};

export default Login;
