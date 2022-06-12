import { Card, Col, Container, Row } from "react-bootstrap";
import "./Experts.css";
const Experts = () => {
  return (
    <div>
      <Container>
        <h2 className="text-center text-uppercase fw-bold fs-1 py-3">
          Our <span className="text-primary">Ex</span>parts
        </h2>
        <Row sm={1} md={2} lg={4} className="g-3 my-3">
          <div>
            <Col>
              <Card>
                <Card.Img
                  height="450"
                  variant="top"
                  src="https://i.ibb.co/GPD0JbP/young-successful-businessman-correcting-tie-176420.png"
                />
                <Card.Body className="text-center">
                  <h4>Tom Cantor</h4>
                  <Card.Text>Project Manger</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
          <div>
            <Col>
              <Card>
                <Card.Img
                  height="450"
                  variant="top"
                  src="https://i.ibb.co/SBLFV2t/job-seat-commercial-digitally-generated-blank-1134.png"
                />
                <Card.Body className="text-center">
                  <h4>Martin Moires</h4>
                  <Card.Text>Blog Writer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
          <div>
            <Col>
              <Card>
                <Card.Img
                  height="450"
                  variant="top"
                  src="https://i.ibb.co/LvH0Jtq/skyscraper-view-city-leader-window-frame-1134-1034.png"
                />
                <Card.Body className="text-center">
                  <h4>Stephen March</h4>
                  <Card.Text>Creative Manager</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
          <div>
            <Col>
              <Card>
                <Card.Img
                  height="450"
                  variant="top"
                  src="https://i.ibb.co/xg8c6L5/shipping-businessman-management-occupation-industr.png"
                />
                <Card.Body className="text-center">
                  <h4>Strace Joshes</h4>
                  <Card.Text>Script Writer</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Experts;
