import UserInputCard from "../components/ui/UserInputCard";
import UserSettingsConfiguration from "../components/user_settings_components/UserSettingsConfiguration";
import UserSettingsHeader from "../components/user_settings_components/UserSettingsHeader";
import modifiers from "../components/user_settings_components/UserSettings.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function UserSettingsPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [displayMode, setDisplayMode] = useState();
  const [locale, setLocale] = useState();

  const handleRetrieveData = (props) => {
    setUserId(JSON.parse(window.localStorage.getItem("userId")));
    setDisplayMode(props.displayMode);
    setLocale(props.locale);

    console.log(
      `Currently saved settings:\nDisplay Mode: ${displayMode}\nLocale: ${locale}`
    );
  };

  const handleGoBack = () => {
    navigate("/search", { replace: true });
  };

  useEffect(() => {
    if (displayMode && locale) {
      const payload = {
        _userId: userId,
        displayMode: displayMode,
        locale: locale,
      };

      try {
        fetch("https://localhost:7076/api/users/edit-user-settings", {
          method: "PUT",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => {
          if (!response.ok) {
            console.warn(response.json());
            throw new Error(`Error! Current Status: ${response.status}`);
          } else if (response.ok) {
            console.log(response.json());
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [displayMode, locale]);
  return (
    <div>
      <UserInputCard>
        <UserSettingsHeader />
        <UserSettingsConfiguration onConfigureSettings={handleRetrieveData} />
      </UserInputCard>
      <div className="center-button-bar-holder">
        <button
          className="btn btn-outline-secondary"
          type="button"
          id={modifiers.btnGoBack}
          onClick={handleGoBack}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default UserSettingsPage;
