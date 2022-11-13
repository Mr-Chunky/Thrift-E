import { useNavigate } from "react-router-dom";
import modifiers from "./CreateAccount.module.css";
import { useRef, useState } from "react";

function CreateAccountForm(props) {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  // Handle cancel button
  const cancelHandler = () => {
    navigate("/", { replace: true });
  };

  // Handle checkbox checking
  const handleChecking = () => {
    if (isChecked) {
      setIsChecked(false);
    } else setIsChecked(true);
  };

  // Fetch user info from input fields
  const emailInputRef = useRef();
  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  // Handle user submission
  async function submitHandler(event) {
    event.preventDefault();

    const inputUserEmail = emailInputRef.current.value;
    const inputUsername = usernameInputRef.current.value;
    const inputUserPassword = passwordInputRef.current.value; // Hashed, salted and stored in the backend for security reasons
    let userType;

    if (isChecked) {
      userType = 1;
    } else {
      userType = 0;
    }

    const user = {
      username: `${inputUsername}`,
      password: `${inputUserPassword}`,
      salt: "haha", // Dummy value, real salt is changed in the backend
      email: `${inputUserEmail}`,
      userType: userType,
      banStatus: 0,
    };

    let response;

    // POST a new account via HTTP
    try {
      response = fetch("http://localhost/LoginService/api/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        navigate("/", { replace: true });
        if (!response.ok) {
          console.log(response);
          throw new Error(`Error! Current Status: ${response.status}`);
        } else if (response.ok) {
          console.log(response);
          alert("Account created successfully!");
        }
      });

      return response;
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
      <div id="user-type-checkbox-holder" className="col">
        <label
          className="user-type-label"
          htmlFor="create-account-user-type"
          style={{ marginRight: "1em" }}
        >
          Create as Admin
        </label>
        <input
          id="create-account-user-type"
          type="checkbox"
          checked={isChecked}
          onChange={handleChecking}
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
