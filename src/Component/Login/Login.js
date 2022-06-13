import { useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const [signInWithEmailAndPassword, signInUser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const from = location.state?.from?.pathname || "/";

  const handelSignInFormSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const handelResetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Reset Mail");
    }
    toast.danger("Please Input Your Email");
  };
  useEffect(() => {
    if (user || signInUser) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, user, signInUser]);
  let errorMessage;
  if (error) {
    errorMessage = <p className="text-danger">{error?.message}</p>;
  }

  if (loading || sending) {
    return <Loading></Loading>;
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
        <Button variant="primary" type="submit">
          Login
        </Button>
        <p role="button" onClick={handelResetPassword}>
          Forgotten Password?
        </p>
        {errorMessage}
      </Form>
      <SocialAccount></SocialAccount>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
