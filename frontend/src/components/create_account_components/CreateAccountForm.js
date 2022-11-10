import { useNavigate } from "react-router-dom";
import modifiers from "./CreateAccount.module.css";
import { useRef } from "react";
import { sha256 } from "js-sha256";
import { generate } from "randomstring";

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

  // Handle user submission
  async function submitHandler(event) {
    event.preventDefault();

    const inputUserEmail = emailInputRef.current.value;
    const inputUsername = usernameInputRef.current.value;

    // NOTE: TESTING CODE ONLY
    // TODO: Generate random salt & store salt in DB to
    // fetch later and hash the password dynamically
    const passwordSalt = generate({
      length: 12,
      charset: "alphanumeric",
    });
    window.localStorage.setItem("userSalt", passwordSalt);
    const inputUserPassword = passwordInputRef.current.value;
    const saltedPassword = `${inputUserPassword}:${passwordSalt}`;
    const hashedPassword = sha256(saltedPassword);

    const user = {
      username: `${inputUsername}`,
      password: `${hashedPassword}`,
      salt: passwordSalt,
      email: `${inputUserEmail}`,
      userType: 0,
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
