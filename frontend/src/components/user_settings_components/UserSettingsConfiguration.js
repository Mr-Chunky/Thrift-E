import { useState } from "react";
import modifiers from "./UserSettings.module.css";

function UserSettingsConfiguration(props) {
  const [displayMode, setDisplayMode] = useState();
  const [locale, setLocale] = useState();

  async function submitUserSettings(event) {
    event.preventDefault();
    let userSettings;

    if (displayMode === undefined || locale === undefined) {
      alert("You must select an option for both fields!");
    } else {
      // Passes an object to the parent with various user settings
      userSettings = {
        displayMode: displayMode,
        locale: locale,
      };
    }

    props.onConfigureSettings(userSettings);
  }

  function changeDisplayTypeHandler(event) {
    setDisplayMode(event.target.value);
    console.warn(`Display type changed to ${displayMode}!`);
  }

  function handleLocaleSelection(event) {
    event.preventDefault();

    document.getElementById("localeDropdown").innerHTML =
      event.target.innerHTML;

    setLocale(event.target.value);
    console.warn(`Locale changed to ${locale}!`);
  }

  return (
    <div className="center-content-holder">
      <div className={modifiers.userSettingsHolder}>
        <form
          className={modifiers.userSettingsInputHolder}
          onSubmit={submitUserSettings}
        >
          <div className={modifiers.allFormElementsHolder}>
            <div className={modifiers.formCheckHolder}>
              <h3 id={modifiers.displayModeHeader}>Display Mode</h3>
              <div className="form-check" id={modifiers.formCheckOne}>
                <input
                  type="radio"
                  className="form-check-input"
                  id="radioTiles"
                  name="displayType"
                  value="0"
                  onChange={changeDisplayTypeHandler}
                ></input>
                <label className="form-check-label" htmlFor="radioTiles">
                  Tiles
                </label>
              </div>
              <div className="form-check" id={modifiers.formCheckTwo}>
                <input
                  type="radio"
                  className="form-check-input"
                  id="radioList"
                  name="displayType"
                  value="1"
                  onChange={changeDisplayTypeHandler}
                ></input>
                <label className="form-check-label" htmlFor="radioList">
                  List
                </label>
              </div>
            </div>
            <div className="dropdown">
              <h3>Locale</h3>
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="localeDropdown"
                data-bs-toggle="dropdown"
              >
                Select a Locale
              </button>
              <ul className="dropdown-menu" aria-labelledby="localeDropdown">
                <li
                  className="dropdown-item"
                  value="0"
                  onClick={handleLocaleSelection}
                >
                  ZA
                </li>
                <li
                  className="dropdown-item"
                  value="1"
                  onClick={handleLocaleSelection}
                >
                  ZW
                </li>
                <li
                  className="dropdown-item"
                  value="2"
                  onClick={handleLocaleSelection}
                >
                  NZ
                </li>
                <li
                  className="dropdown-item"
                  value="3"
                  onClick={handleLocaleSelection}
                >
                  US
                </li>
                <li
                  className="dropdown-item"
                  value="4"
                  onClick={handleLocaleSelection}
                >
                  UK
                </li>
                <li
                  className="dropdown-item"
                  value="5"
                  onClick={handleLocaleSelection}
                >
                  AU
                </li>
              </ul>
            </div>
          </div>
          <div className="center-button-bar-holder">
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id={modifiers.btnSave}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserSettingsConfiguration;
