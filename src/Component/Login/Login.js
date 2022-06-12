import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SocialAccount from "../SocialAccount/SocialAccount";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const navigateResisterPage = () => {
    navigate("/resister");
  };
  return (
    <div className="w-50 mx-auto my-5">
      <h2>Please Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
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
