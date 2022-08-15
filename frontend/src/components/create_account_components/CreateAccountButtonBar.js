import { useNavigate } from "react-router-dom";
import modifiers from "./CreateAccount.module.css";

function CreateAccountButtonBar() {
  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate("/");
  };

  return (
    <div className="center-button-bar-holder">
      <button
        className="btn btn-outline-secondary"
        type="button"
        id={modifiers.btn_cancel_create_account}
        onClick={cancelHandler}
      >
        Cancel
      </button>
      <button
        className="btn btn-outline-secondary"
        type="button"
        id={modifiers.btn_create_account}
      >
        Create Account
      </button>
    </div>
  );
}

export default CreateAccountButtonBar;
