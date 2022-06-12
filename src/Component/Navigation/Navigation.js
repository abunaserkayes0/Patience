import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import "./Navigation.css";
const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img width='150' height='35' src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} className="fw-bold text-white" to='/home'>Home</Nav.Link>
              <Nav.Link as={Link} className="fw-bold text-white" to='/service'>Service</Nav.Link>
              <Nav.Link as={Link} className="fw-bold text-white" to='/about'>About</Nav.Link>
              <Nav.Link as={Link} className="fw-bold text-white" to='/Login'>Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
