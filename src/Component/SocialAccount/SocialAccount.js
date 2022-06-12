import { Button } from "react-bootstrap";
import {
  useSignInWithGithub,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./SocialAccount.css";
const SocialAccount = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const handelGoogleSignIn = () => {
    signInWithGoogle();
  };
  const handelGithubSignIn = () => {
    signInWithGithub();
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
      <Button onClick={handelGoogleSignIn}>
        <i className="fa-brands fa-google"></i> Sign In Google
      </Button>
      <Button onClick={handelGithubSignIn}>
        <i className="fa-brands fa-github"></i> Sign In Github
      </Button>
    </div>
  );
};

export default SocialAccount;
