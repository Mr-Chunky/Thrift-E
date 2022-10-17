import UserInputCard from "../components/ui/UserInputCard";
import UserSettingsConfiguration from "../components/user_settings_components/UserSettingsConfiguration";
import UserSettingsHeader from "../components/user_settings_components/UserSettingsHeader";
import modifiers from "../components/user_settings_components/UserSettings.module.css";
import { useNavigate } from "react-router-dom";

function UserSettingsPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/search", { replace: true });
  };
  return (
    <div>
      <UserInputCard>
        <UserSettingsHeader />
        <UserSettingsConfiguration />
      </UserInputCard>
      <div className="center-button-bar-holder">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id={modifiers.btnSave}
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default UserSettingsPage;
