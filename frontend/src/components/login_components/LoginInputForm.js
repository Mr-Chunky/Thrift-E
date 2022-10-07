import modifiers from "./Login.module.css";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

function LoginInputForm() {
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  function loginHandler(event) {
    event.preventDefault();

    const usernameInput = usernameInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;

    try {
      const response = fetch(
        `https://localhost:7076/api/users/${usernameInput}-${passwordInput}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("HTTP Status Code: ", response.status);

      if (!response.ok) {
        console.log(response);
        throw new Error(`Error! Current Status: ${response.status}`);
      } else if (response.ok) {
        console.log(response);
      }

      const result = response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
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
