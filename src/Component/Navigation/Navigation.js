import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo.png";
import "./Navigation.css";
const Navigation = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img width="150" height="35" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="text-center ms-auto">
              <Nav.Link as={Link} className="fw-bold text-white" to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="fw-bold text-white" to="/service">
                Service
              </Nav.Link>
              <Nav.Link as={Link} className="fw-bold text-white" to="/about">
                About
              </Nav.Link>
              {user ? (
                <button className="fw-bold text-white border-0 bg-primary" onClick={()=>signOut(auth)}>signOut</button>
              ) : (
                <Nav.Link as={Link} className="fw-bold text-white" to="/Login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
