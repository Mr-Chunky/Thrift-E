import { Link } from "react-router-dom";
import modifiers from "./Login.module.css";

function LoginNewAccountLink() {
  return (
    <div className="center-content-holder">
      Are you a new user?&nbsp;&nbsp;
      <Link id={modifiers.create_account_link} to="/create-account">
        Create an account for free!
      </Link>
    </div>
  );
}

export default LoginNewAccountLink;
