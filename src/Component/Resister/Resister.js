import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Resister.css";

const Resister = () => {
  const navigate = useNavigate();
  const navigateLoginPage = () => {
    navigate("/login");
  };
  return (
    <div className="w-50 mx-auto my-5">
      <h2>Please Resister</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name (optional)" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Resister
        </Button>
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
    </div>
  );
};

export default Resister;
