import { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import SocialAccount from "../SocialAccount/SocialAccount";
import "./Resister.css";
const Resister = () => {
  const [userError, setUserError] = useState("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const navigateLoginPage = () => {
    navigate("/login");
  };
  const handelSignUpFromSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (password.length < 8) {
      setUserError("Password Must be greater 6 character");
      return;
    }
    await sendEmailVerification(auth);
    await createUserWithEmailAndPassword(email, password);
    navigate("/");
  };

  if (loading || sending) {
    return <Loading></Loading>;
  }
  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">{error.message}</p>;
  }
  if (user){
    console.log(user);
  }
  return (
    <>
      <div className="w-50 mx-auto my-5">
        <h2>Please Resister</h2>
        <Form onSubmit={handelSignUpFromSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Enter Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name (optional)" />
          </Form.Group>

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
          {errorElement}
          <Button variant="primary" type="submit">
            Resister
          </Button>
          <p className="text-danger">{userError}</p>
          <p>
            Already Create Account?
            <span
              className="text-decoration-underline"
              onClick={navigateLoginPage}
              role="button"
            >
              Login
            </span>
          </p>
        </Form>
        <SocialAccount></SocialAccount>
      </div>
    </>
  );
};

export default Resister;
