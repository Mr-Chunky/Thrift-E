import AdvancedStatisticsHeader from "../components/statistics_components/AdvancedStatisticsHeader";
import AdvancedStatisticsView from "../components/statistics_components/AdvancedStatisticsView";
import GeneralUICard from "../components/ui/GeneralUICard";
import modifiers from "../components/statistics_components/AdvancedStatistics.module.css";
import { useNavigate } from "react-router-dom";

function AdvancedStatistics() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/statistics-simple", { replace: true });
  };
  return (
    <div>
      <AdvancedStatisticsHeader />
      <GeneralUICard>
        <AdvancedStatisticsView />
      </GeneralUICard>
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

export default AdvancedStatistics;
