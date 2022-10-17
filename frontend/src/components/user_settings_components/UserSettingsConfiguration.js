import modifiers from "./UserSettings.module.css";

function UserSettingsConfiguration() {
  return (
    <div className="center-content-holder">
      <div className={modifiers.userSettingsHolder}>
        <div className={modifiers.radioInputHolder}>
          <div className="form-check" id="formCheckOne">
            <h3 id={modifiers.displayModeHeader}>Display Mode</h3>
            <input
              type="radio"
              className="form-check-input"
              id="radioTiles"
              name="displayType"
              value="0"
              checked
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
            ></input>
            <label className="form-check-label" htmlFor="radioList">
              List
            </label>
          </div>
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id={modifiers.btnSave}
          >
            Save
          </button>
        </div>
        <div className="dropdown">
          <h3>Locale</h3>
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Select a Locale
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" value="0">
              ZA
            </li>
            <li className="dropdown-item" value="1">
              ZW
            </li>
            <li className="dropdown-item" value="2">
              NZ
            </li>
            <li className="dropdown-item" value="3">
              US
            </li>
            <li className="dropdown-item" value="4">
              UK
            </li>
            <li className="dropdown-item" value="5">
              AU
            </li>
          </ul>
          <div className={modifiers.localeButtonHolder}>
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id={modifiers.btnSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettingsConfiguration;
