import { useNavigate } from "react-router-dom";
import modifiers from "./CreateAccount.module.css";
import { useRef } from "react";

function CreateAccountForm(props) {
  const navigate = useNavigate();

  // Handle cancel button
  const cancelHandler = () => {
    navigate("/", { replace: true });
  };

  // Fetch user info from input fields
  const emailInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordValidationInputRef = useRef();

  // Handle user submission
  async function submitHandler(event) {
    event.preventDefault();

    const inputUserEmail = emailInputRef.current.value;
    const inputUsername = usernameInputRef.current.value;
    const inputUserPassword = passwordInputRef.current.value;

    const user = {
      username: `${inputUsername}`,
      password: `${inputUserPassword}`,
      email: `${inputUserEmail}`,
      userType: 0,
      banStatus: 0,
    };

    // POST a new account via HTTP
    try {
      const response = await fetch("https://localhost:7076/api/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        navigate("/", { replace: true });
      });
      console.log("HTTP Status Code: ", response.status);

      if (!response.ok) {
        console.log(response);
        throw new Error(`Error! Current Status: ${response.status}`);
      } else if (response.ok) {
        alert("Account created successfully!");
      }

      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form className="form-group" onSubmit={submitHandler}>
      <div className="col">
        <label
          className="user-input-label"
          htmlFor="create-account-email-input"
        >
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          placeholder="New Email"
          id="create-account-email-input"
          ref={emailInputRef}
          required
        />
      </div>
      <div className="col">
        <label
          className="user-input-label"
          htmlFor="create-account-username-input"
        >
          Username
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="New Username"
          id="create-account-username-input"
          ref={usernameInputRef}
          required
        />
      </div>
      <div className="col">
        <label
          className="user-input-label"
          htmlFor="create-account-password-input"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="New Password"
          id="create-account-password-input"
          ref={passwordInputRef}
          required
        />
      </div>
      <div className="col">
        <label
          className="user-input-label"
          htmlFor="create-account-password-verification-input"
        >
          Re-enter Password
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Re-enter Password"
          id="create-account-password-verification-input"
          ref={passwordValidationInputRef}
          required
        />
      </div>
      <div className="center-button-bar-holder">
        <button
          className="btn btn-outline-secondary"
          id={modifiers.btn_cancel_create_account}
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id={modifiers.btn_create_account}
        >
          Create Account
        </button>
      </div>
    </form>
  );
}

export default CreateAccountForm;
