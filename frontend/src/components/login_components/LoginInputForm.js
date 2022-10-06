import modifiers from "./Login.module.css";
import { Link } from "react-router-dom";

function LoginInputForm() {
  return (
    <form className="form-group">
      <div className="col">
        <label className="user-input-label" htmlFor="login-username-input">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="login-username-input"
          placeholder="Enter Username"
          required
        ></input>
      </div>
      <div className="col">
        <label className="user-input-label" htmlFor="login-password-input">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="login-password-input"
          placeholder="Enter Password"
          required
        ></input>
      </div>
      <div className="center-content-holder">
        Are you a new user?&nbsp;&nbsp;
        <Link id={modifiers.create_account_link} to="/create-account">
          Create an account for free!
        </Link>
      </div>
      <div className="center-button-bar-holder">
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id={modifiers.btn_login}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginInputForm;
