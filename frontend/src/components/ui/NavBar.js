import modifiers from "./UI.module.css";
import logo from "../../images/thrift-e-logo.svg";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const navigate = useNavigate();

  const handleStatsNavigate = () => {
    navigate("/statistics-simple", { replace: true });
  };

  const handleUserSettingsNavigate = () => {
    navigate("/user-settings", { replace: true });
  };

  const handleLogoutNavigate = () => {
    window.localStorage.clear();
    navigate("/", { replace: true });
  };

  const handleSearchNavigate = () => {
    navigate("/search", { replace: true });
  };

  const handleNewsNavigate = () => {
    navigate("/news", { replace: true });
  };

  const handleAdminNavigate = () => {
    navigate("/admin", { replace: true });
  };

  return (
    <div className="thrift-e-navbar">
      <img className={modifiers.logoSmall} alt="thrift-e-logo" src={logo} />
      <div id={modifiers.navBarButtonHolder}>
        {props.userId && props.banStatus === 0 && props.userType === 1 && (
          <button
            className={modifiers.navButtons}
            id={modifiers.adminNavButton}
            type="button"
            onClick={handleAdminNavigate}
          >
            Admin
          </button>
        )}
        <button
          className={modifiers.navButtons}
          id={modifiers.newsNavButton}
          type="button"
          onClick={handleNewsNavigate}
        >
          News
        </button>
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
        <button
          className={modifiers.navButtons}
          id={modifiers.logoutNavButton}
          type="button"
          onClick={handleLogoutNavigate}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavBar;
