import modifiers from "./Login.module.css";
import { Link } from "react-router-dom";
import { useContext, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../../storage/current-user-context";

function LoginInputForm() {
  const [isLoading, setIsLoading] = useState(false);
  const currentUserContext = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  // This handles retrieval of user ID that is then passed to a global context
  // for future operations
  async function loginHandler(event) {
    event.preventDefault();

    const usernameInput = usernameInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;
    let userId;

    try {
      userId = await fetch(
        `https://localhost:7076/api/users/${usernameInput}-${passwordInput}`
      ).then((response) => {
        console.log("HTTP Status Code: ", response.status);
        if (!response.ok) {
          console.log(response);
          throw new Error(`Error! Current Status: ${response.status}`);
        } else if (response.ok) {
          return response.json();
        }
      });
    } catch (err) {
      console.log(err);
    }
    console.log(userId);

    currentUserContext.getCurrentUser(userId);

    if (
      userId != null &&
      (currentUserContext.userId !== undefined ||
        currentUserContext.userId !== 0) &&
      isLoading
    ) {
      setIsLoading(false);
      console.log(`Current User ID: ${currentUserContext.userId}`);
      navigate("/search");
    } else if (
      userId == null ||
      ((currentUserContext.userId === undefined ||
        currentUserContext.userId === 0) &&
        !isLoading)
    ) {
      setIsLoading(true);
      alert("No user exists with those credentials OR unhandled bug");
    }

    return;
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
