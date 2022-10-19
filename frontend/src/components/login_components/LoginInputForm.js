import modifiers from "./Login.module.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { sha256 } from "js-sha256";

function LoginInputForm(props) {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  // This handles retrieval of user ID that is then passed to a global context
  // for future operations
  async function loginHandler(event) {
    event.preventDefault();

    // NOTE: TESTING CODE ONLY
    // TODO: fetch random salt from DB to hash the password dynamically
    // for checking purposes
    const usernameInput = usernameInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;
    const passwordSalt = "tH1si54Sa1t";
    const saltedPassword = `${passwordInput}:${passwordSalt}`;
    const hashedPassword = sha256(saltedPassword);

    const userLoginData = {
      username: usernameInput,
      password: hashedPassword,
    };

    props.onGetLoginData(userLoginData);
  }

  // This returns the actual form elements that you see on screen
  return (
    <form className="form-group" onSubmit={loginHandler}>
      <div className="col">
        <label className="user-input-label" htmlFor="login-username-input">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="login-username-input"
          placeholder="Enter Username"
          ref={usernameInputRef}
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
          ref={passwordInputRef}
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
