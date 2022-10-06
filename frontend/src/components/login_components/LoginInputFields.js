function LoginInputFields() {
  return (
    <form>
      <div className="form-group">
        <div className="col">
          <label className="user-input-label" htmlFor="login-username-input">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="login-username-input"
            placeholder="Enter Username"
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
          ></input>
        </div>
      </div>
    </form>
  );
}

export default LoginInputFields;
