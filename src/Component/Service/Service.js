import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, Col } from "react-bootstrap";
const Service = ({ service }) => {
  const { name, price, image, description } = service;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img height="200" variant="top" src={image} />
          <Card.Body>
            <Card.Title className=" text-uppercase">{name}</Card.Title>
            <h4>${price}</h4>
            <Card.Text>{description.slice(0, 150)}</Card.Text>
          </Card.Body>
          <Button className="w-50 fw-bold mx-auto my-3"><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> Add CheckOut</Button>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
