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
            Authorization:
              "bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkVfWGUzMkVMTGEzcnpXQ2kwdTR1QiJ9.eyJpc3MiOiJodHRwczovL2NodW5reS51cy5hdXRoMC5jb20vIiwic3ViIjoibkk0NlV6SmV6N0RBb3BsaFFKWllDcnA2R091YWY0a0xAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vdGhyaWZ0LWUiLCJpYXQiOjE2NjUxNDgyNjUsImV4cCI6MTY2NTIzNDY2NSwiYXpwIjoibkk0NlV6SmV6N0RBb3BsaFFKWllDcnA2R091YWY0a0wiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.ZVvcfxSzUP9wCNReGf32aCDVw_f_ec5TTSFPe5EuLNAivsEtqIReflPImRSX_cb8n-UypBvbgRpA2mvI6D-sdOXPhz6GrswTIqU58JpnjY6aQrD1ZWtg6igI1rqe6zFKFrhtWi-PVQ52ZmHLIWNxIm3XITtNpm_679U-4BpZZmsDeCAF32B00nmYfWkp0CuzUGR97ShdBKr_5wZUzWo_M3HrDare6qSM13IzeeSAhHl03mU9jvUizV4Ho8KWkeml4C-Sg9NmbNg6yIzCut-KQcZugdK6ezm9mGGWoC1r6VDP9ZcCnUteckIka_SN6q2sz38cFm8Jvg5trCb2ta2PDQ",
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
