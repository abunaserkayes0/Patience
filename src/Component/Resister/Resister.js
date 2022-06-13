import { useRef, useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import SocialAccount from '../SocialAccount/SocialAccount';
import "./Resister.css";
const Resister = () => {
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [userError, setUserError] = useState("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();

  const navigateLoginPage = () => {
    navigate("/login");
  };
  const handelSubmitFrom = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (password.length < 6) {
      setUserError("Password Must be greater 6 character");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    console.log(user);
  }
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  return(
    <>
      <div className="w-50 mx-auto my-5">
      <h2>Please Resister</h2>
      <Form onSubmit={handelSubmitFrom}>
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
        <Button variant="primary" type="submit">
          Resister
        </Button>
        <p className="text-danger">{userError}</p>
         <p>Already Create Account?
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
  )
};

export default Resister;
