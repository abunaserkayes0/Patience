import { Container } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-section bg-primary">
      <Container>
        <div>
          <img className="mt-5" width="150" height="35" src={logo} alt="" />
        </div>
        <div className="d-flex flex-wrap justify-content-between text-white mt-5">
          <div>
            <article>
              <h5>Quick Link</h5>
              <ul className="p-0">
                <li>Home</li>
                <li>Service</li>
                <li>About</li>
                <li>Login</li>
              </ul>
            </article>
          </div>
          <div>
            <article>
              <h5>Useful Link</h5>
              <ul className="p-0">
                <li>Privacy Policy</li>
                <li>Terms & Condition</li>
                <li>Support</li>
                <li>FAQs</li>
              </ul>
            </article>
          </div>
          <div>
            <article>
              <h5>Office Address</h5>
              <ul className="p-0">
                <li>N/s Road, Japan</li>
                <li>Singer More , Korea</li>
              </ul>
            </article>
          </div>
          <div>
            <article>
              <h5>Contact Address</h5>
              <ul className="p-0">
                <li>demo@gmail.com</li>
                <li>support@gmail.com</li>
                <li>+01900000000</li>
              </ul>
            </article>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
