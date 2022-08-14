import { useNavigate } from "react-router-dom";

function LoginNewAccountLink() {
  const createAccount = useNavigate();

  function NewAccount() {
    createAccount("/create-account", { replace: true });
  }

  return (
    <div className="center-content-holder">
      Are you a new user?&nbsp;&nbsp;
      <span id="create-account-link" onClick={NewAccount}>
        Create an account for free!
      </span>
    </div>
  );
}

export default LoginNewAccountLink;
