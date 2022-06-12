import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col sm={12} md={6} lg={6}>
            <h1 className="fw-bold">
              John <span className="text-primary">David</span>✋
            </h1>
            <div className="d-flex align-items-center">
              <div className="constant-border mt-1"></div>
              <span className="fw-bold my-3 fs-4 mx-1">
                <span className="text-primary">Content</span> Writer
              </span>
              <div className="constant-border mt-1"></div>
            </div>
            <p className="fst-italic">
              Content writing is the process of planning, writing and editing
              web content, typically for digital marketing purposes.
            </p>
            <Button className="banner-button bg-primary fw-bold fs-4">Say Hello <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></Button>
          </Col>
          <Col sm={12} md={4} lg={4}>
            <div>
              <img src="https://i.ibb.co/FwXgXM7/banner.png" alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
