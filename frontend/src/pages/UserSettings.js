import UserInputCard from "../components/ui/UserInputCard";
import UserSettingsConfiguration from "../components/user_settings_components/UserSettingsConfiguration";
import UserSettingsHeader from "../components/user_settings_components/UserSettingsHeader";
import modifiers from "../components/user_settings_components/UserSettings.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function UserSettingsPage() {
  let payload;
  const navigate = useNavigate();
  const [userId, setUserId] = useState();
  const [banStatus, setBanStatus] = useState();
  const [displayMode, setDisplayMode] = useState();
  const [locale, setLocale] = useState();

  useEffect(() => {
    setUserId(JSON.parse(window.localStorage.getItem("userId")));
    setBanStatus(JSON.parse(window.localStorage.getItem("banStatus")));

    console.log(`User Settings Page> useEffect() ran!`);
  }, []);

  // Handle different display mode selections
  function changeDisplayTypeHandler(event) {
    setDisplayMode(event.target.value);
    console.warn(`Display type changed to ${event.target.value}!`);
  }

  // Handle new dropdown item selection
  function handleLocaleSelection(event) {
    event.preventDefault();

    document.getElementById("localeDropdown").innerHTML =
      event.target.innerHTML;

    setLocale(event.target.value);
    console.warn(`Locale changed to ${event.target.innerHTML}!`);
  }

  function submitUserSettings(event) {
    event.preventDefault();

    if (displayMode === undefined || locale === undefined) {
      alert("You must select an option for both fields!");
    } else {
      // Passes an object to the parent with various user settings
      payload = {
        _userId: userId,
        displayMode: displayMode,
        locale: locale,
      };
      handleRetrieveData();
    }
  }

  // Get data from child component and send to DB
  const handleRetrieveData = () => {
    console.log(
      `Currently saved settings:\nDisplay Mode: ${displayMode}\nLocale: ${locale}`
    );

    // Send user settings in to the DB
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
          window.localStorage.setItem("displayMode", payload.displayMode);
          window.localStorage.setItem("locale", payload.locale);
          handleGoBack();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Handle the "Go Back" button
  const handleGoBack = () => {
    navigate("/search", { replace: true });
  };

  return (
    <div>
      <UserInputCard>
        {userId && banStatus === 0 ? <UserSettingsHeader /> : null}
        {userId && banStatus === 0 ? (
          <UserSettingsConfiguration
            onChangeDisplayTypeHandler={changeDisplayTypeHandler}
            onHandleLocaleSelection={handleLocaleSelection}
            onSubmitUserSettings={submitUserSettings}
          />
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
