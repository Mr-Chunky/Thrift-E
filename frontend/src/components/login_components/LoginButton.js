import modifiers from "./Login.module.css";

function LoginButton() {
  return (
    <div className="center-content-holder">
      <button
        className="btn btn-outline-secondary"
        type="button"
        id={modifiers.btn_login}
      >
        Login
      </button>
    </div>
  );
}

export default LoginButton;
