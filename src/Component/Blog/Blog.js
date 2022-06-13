import { Col, Container, Row } from "react-bootstrap";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="my-3">
      <Container>
        <h3>1.Difference between Authorization and Authentication</h3>
        <Row>
          <Col>
            <div>
              <h5>Authorization</h5>
              <ul>
                <li>
                  An authorization process is when a user grants or denies
                  permission
                </li>
                <li>It security terms is maintaining security setting</li>
                <li>It internal process does not visible users</li>
                <li>Authorization is not changeable by the users</li>
                <li>Data moves through by id token </li>
              </ul>
            </div>
          </Col>
          <Col>
            <div>
              <h5>Authentication</h5>
              <ul>
                <li>
                  Authentication is the first step of security process in users
                  validation
                </li>
                <li>
                  It works through password,one times pin,biometries or handling
                  apps
                </li>
                <li>It is always visible in users</li>
                <li>Authentication partly control by users</li>
                <li>Data move process is access token</li>
              </ul>
            </div>
          </Col>
        </Row>
        <h3>2.1 Why are you using firebase?</h3>
        <p>
          Google Firebase provides the most attractive features that are used in
          back-end web development and mobile apps.it's saved our valuable time
          and security terms are awesome.it is user-friendly, simple,
          lightweight and most used in industries. its special feature is
          firebase hooks famous.
        </p>
        <h3>2.2 What other options do you have to implement authentication?</h3>
        <p>
          Yes,I have more options implement authentication likes
          Auth0,MongoDB,Passport and Okta and so on that is firebase
          alternative.
        </p>
        <h3>
          3.What other services does firebase provide other than
          authentication?
        </h3>
        <p>Firebase provide more services without authentication.likes:</p>
        <ul>
          <li>Cloud Firestore </li>
          <li>Cloud Function</li>
          <li>Hosting</li>
          <li>Cloud Storage</li>
          <li>Google Analytics</li>
          <li>Dynamic Links</li>
          <li>Remote Config</li>
        </ul>
      </Container>
    </div>
  );
};

export default Blog;
