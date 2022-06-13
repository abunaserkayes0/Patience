import { Spinner } from 'react-bootstrap';
import './Loading.css';
const Loading = () => {
    return (
        <div className='d-flex w-100 align-items-center justify-content-center mt-5 pt-5'>
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;