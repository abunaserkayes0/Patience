import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./NotFound.css";
const NotFound = () => {
   const navigate=useNavigate()
  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center mb-5 pb-5">
        <img
          src="https://i.ibb.co/JB6NGsQ/404-error-page-found-banner-with-cable-socket-cord.png"
          alt=""
        />
        <Button onClick={()=>{navigate('/')}}>Go To Back</Button>
      </div>
    </div>
  );
};

export default NotFound;
