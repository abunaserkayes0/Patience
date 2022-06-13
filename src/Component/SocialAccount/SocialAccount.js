import { Button } from "react-bootstrap";
import {
  useSignInWithGithub,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./SocialAccount.css";
const SocialAccount = () => {
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);

  if (error) {
    console.log(error);
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-3">
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
