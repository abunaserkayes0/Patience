import { Button, Col, Container, Row } from "react-bootstrap";
import "./About.css";
const About = () => {
  return (
    <div>
      <Container>
        <Row
          className="mb-3 align-items-center justify-content-between"
          sm={1}
          md={2}
          lg={2}
        >
          <Col>
            <div>
              <img
                className="w-100"
                src="https://i.ibb.co/JzTyy9z/profile.png"
                alt=""
              />
            </div>
          </Col>
          <Col>
            <div className="fst-italic fw-bold">
              <h2>Md Abu Naser Kayes</h2>
              <p>
                I want to be a web developer and switch to app development with
                React Native. I am lazy when it comes to coding but I try to
                understand and create new ones. After a few days of working hard
                and want to achieve my goal. A good developer who focuses on web
                design and provides a good user experience on a website but I do
                not like web design. Finally, I want to achieve the best career
                rewards and earn good pay and achievement.{" "}
              </p>
              <a href="https://web.facebook.com/k0yes/">
                <Button className="fw-bold">
                  Contact Me<i className=" fa"></i>
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
