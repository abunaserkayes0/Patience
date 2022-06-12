import { Button } from "react-bootstrap";
import {
  useSignInWithGithub,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./SocialAccount.css";
const SocialAccount = () => {
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser] = useSignInWithGithub(auth);
  const handelGoogleSignIn = () => {
    signInWithGoogle();
  };
  const handelGithubSignIn = () => {
    signInWithGithub();
  };
  if (googleUser||githubUser){
    console.log(googleUser||githubUser);
  }
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
