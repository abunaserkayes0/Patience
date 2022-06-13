import { Button } from "react-bootstrap";
import {
  useSignInWithGithub,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
import auth from "../../firebase.init";
import Loading from '../Loading/Loading';
import "./SocialAccount.css";
const SocialAccount = () => {
  const navigate=useNavigate()
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  if(googleUser||githubUser){
    navigate('/home')
  }
  if(googleLoading||githubLoading){
    return <Loading></Loading>
  }
  let errorElement;
  if (githubError || googleError) {
    errorElement = (
      <p className="text-danger">
        {githubError?.message}
        {googleError?.message}
      </p>
    );
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
      {errorElement}
      <Button onClick={() => signInWithGoogle()}>
        <i className="fa-brands fa-google"></i> Sign In Google
      </Button>
      <Button onClick={() => signInWithGithub()}>
        <i className="fa-brands fa-github"></i> Sign In Github
      </Button>
    </div>
  );
};

export default SocialAccount;
