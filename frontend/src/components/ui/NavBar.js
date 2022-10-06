import modifiers from "./UI.module.css";
import logo from "../../images/thrift-e-logo.svg";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleStatsNavigate = () => {
    navigate("/statistics", { replace: true });
  };

  return (
    <div className="thrift-e-navbar">
      <img className={modifiers.logoSmall} alt="thrift-e-logo" src={logo} />
      <button
        className={modifiers.statsNavButton}
        type="button"
        onClick={handleStatsNavigate}
      >
        Statistics
      </button>
    </div>
  );
}

export default NavBar;
