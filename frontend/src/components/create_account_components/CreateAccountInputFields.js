function CreateAccountInputFields() {
  return (
    <div className="form-group">
      <form>
        <div class="col">
          <label className="user-input-label" for="create-account-email-input">
            Email Address
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="New Email"
            id="create-account-email-input"
          />
        </div>
        <div class="col">
          <label
            className="user-input-label"
            for="create-account-username-input"
          >
            Username
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="New Username"
            id="create-account-username-input"
          />
        </div>
        <div class="col">
          <label
            className="user-input-label"
            for="create-account-password-input"
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="New Password"
            id="create-account-password-input"
          />
        </div>
        <div class="col">
          <label
            className="user-input-label"
            for="create-account-password-verification-input"
          >
            Re-enter Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Re-enter Password"
            id="create-account-password-verification-input"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateAccountInputFields;
