function UsernameInputField() {
  return (
    <form>
      <div className="form-group">
        <label id="login-username-label" for="login-username-input">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="login-username-input"
          placeholder="Enter Username"
        ></input>
      </div>
    </form>
  );
}

export default UsernameInputField;
