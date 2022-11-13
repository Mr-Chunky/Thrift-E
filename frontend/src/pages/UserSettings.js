import UserInputCard from "../components/ui/UserInputCard";
import UserSettingsConfiguration from "../components/user_settings_components/UserSettingsConfiguration";
import UserSettingsHeader from "../components/user_settings_components/UserSettingsHeader";
import modifiers from "../components/user_settings_components/UserSettings.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function UserSettingsPage() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [banStatus, setBanStatus] = useState();
  const [displayMode, setDisplayMode] = useState();
  const [locale, setLocale] = useState();

  useEffect(() => {
    setUserId(JSON.parse(window.localStorage.getItem("userId")));
    setBanStatus(JSON.parse(window.localStorage.getItem("banStatus")));
  }, []);

  // Get the data from child component
  const handleRetrieveData = (props) => {
    setDisplayMode(props.displayMode);
    setLocale(props.locale);

    console.log(
      `Currently saved settings:\nDisplay Mode: ${displayMode}\nLocale: ${locale}`
    );
  };

  // Handle the "Go Back" button
  const handleGoBack = () => {
    navigate("/search", { replace: true });
  };

  // Perform the custom backend API call
  useEffect(() => {
    if (displayMode && locale) {
      const payload = {
        _userId: userId,
        displayMode: displayMode,
        locale: locale,
      };

      console.log(
        `Payload Properties: Display - ${payload.displayMode} | Locale - ${payload.locale}`
      );

      try {
        fetch("http://localhost/LoginService/api/users/edit-user-settings", {
          method: "PUT",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(async (response) => {
          if (!response.ok) {
            console.warn(await response.json());
            throw new Error(`Error! Current Status: ${response.status}`);
          } else if (response.ok) {
            console.log(await response.json());
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
        {userId && banStatus === 0 ? <UserSettingsHeader /> : null}
        {userId && banStatus === 0 ? (
          <UserSettingsConfiguration onConfigureSettings={handleRetrieveData} />
        ) : (
          "ERROR: User is not properly authenticated!"
        )}
      </UserInputCard>
      {userId && banStatus === 0 ? (
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
      ) : null}
    </div>
  );
}

export default UserSettingsPage;
