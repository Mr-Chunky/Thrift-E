import { useNavigate } from "react-router-dom";
import GeneralUICard from "./GeneralUICard";
import modifiers from "./UI.module.css";

function ErrorScreen() {
  const navigate = useNavigate();

  const handleUnauthorised = () => {
    navigate("/", { replace: true });
  };
  return (
    <GeneralUICard>
      <div className={modifiers.errorScreen}>
        <div className={modifiers.errorTextHolder}>
          <span>
            Slow down there, buckeroo! Let's get you back to authorisation...
          </span>
        </div>
        <div className={modifiers.errorButtonHolder}>
          <button
            className="btn btn-outline-secondary"
            type="button"
            id={modifiers.errorButton}
            onClick={handleUnauthorised}
          >
            Back to Login
          </button>
        </div>
      </div>
    </GeneralUICard>
  );
}

export default ErrorScreen;
