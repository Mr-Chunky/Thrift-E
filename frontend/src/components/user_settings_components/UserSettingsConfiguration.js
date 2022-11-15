import modifiers from "./UserSettings.module.css";

function UserSettingsConfiguration(props) {
  return (
    <div className="center-content-holder">
      <div className={modifiers.userSettingsHolder}>
        <form
          className={modifiers.userSettingsInputHolder}
          onSubmit={props.onSubmitUserSettings}
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
                  onChange={props.onChangeDisplayTypeHandler}
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
                  onChange={props.onChangeDisplayTypeHandler}
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
                  onClick={props.onHandleLocaleSelection}
                >
                  ZA
                </li>
                <li
                  className="dropdown-item"
                  value="1"
                  onClick={props.onHandleLocaleSelection}
                >
                  ZW
                </li>
                <li
                  className="dropdown-item"
                  value="2"
                  onClick={props.onHandleLocaleSelection}
                >
                  NZ
                </li>
                <li
                  className="dropdown-item"
                  value="3"
                  onClick={props.onHandleLocaleSelection}
                >
                  US
                </li>
                <li
                  className="dropdown-item"
                  value="4"
                  onClick={props.onHandleLocaleSelection}
                >
                  UK
                </li>
                <li
                  className="dropdown-item"
                  value="5"
                  onClick={props.onHandleLocaleSelection}
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
