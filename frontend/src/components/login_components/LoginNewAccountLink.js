import { Link } from "react-router-dom";

function LoginNewAccountLink() {
  return (
    <div className="center-content-holder">
      Are you a new user?&nbsp;&nbsp;
      <Link id="create-account-link" to="/create-account">
        Create an account for free!
      </Link>
    </div>
  );
}

export default LoginNewAccountLink;
