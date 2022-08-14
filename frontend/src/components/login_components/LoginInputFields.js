import modifiers from "./Login.module.css";

function LoginInputFields() {
  return (
    <form>
      <div className="form-group">
        <label
          className={modifiers.login_input_label}
          for="login-username-input"
        >
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="login-username-input"
          placeholder="Enter Username"
        ></input>
      </div>
      <div className="form-group">
        <label
          className={modifiers.login_input_label}
          for="login-password-input"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="login-password-input"
          placeholder="Enter Password"
        ></input>
      </div>
    </form>
  );
}

export default LoginInputFields;
