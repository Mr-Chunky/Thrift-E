import modifiers from "./UI.module.css";
import logo from "../../images/thrift-e-logo.svg";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleStatsNavigate = () => {
    navigate("/statistics-simple", { replace: true });
  };

  const handleUserSettingsNavigate = () => {
    navigate("/user-settings", { replace: true });
  };

  const handleSearchNavigate = () => {
    navigate("/search", { replace: true });
  };

  return (
    <div className="thrift-e-navbar">
      <img className={modifiers.logoSmall} alt="thrift-e-logo" src={logo} />
      <div id={modifiers.navBarButtonHolder}>
        <button
          className={modifiers.navButtons}
          id={modifiers.searchNavButton}
          type="button"
          onClick={handleSearchNavigate}
        >
          Search Games
        </button>
        <button
          className={modifiers.navButtons}
          id={modifiers.statsNavButton}
          type="button"
          onClick={handleStatsNavigate}
        >
          Statistics
        </button>
        <button
          className={modifiers.navButtons}
          id={modifiers.userSettingsNavButton}
          type="button"
          onClick={handleUserSettingsNavigate}
        >
          Settings
        </button>
      </div>
    </div>
  );
}

export default NavBar;
