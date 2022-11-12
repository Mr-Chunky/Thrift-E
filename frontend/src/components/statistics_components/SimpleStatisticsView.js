import modifiers from "./SimpleStatistics.module.css";
import GeneralUICard from "../ui/GeneralUICard";
import { useNavigate } from "react-router-dom";

function SimpleStatisticsView(props) {
  const navigate = useNavigate();

  const handleAdvancedStatsNavigation = () => {
    navigate("/statistics-advanced");
  };

  return (
    <GeneralUICard>
      <div className={modifiers.statsHolder}>
        <div className={modifiers.firstRowStats}>
          <div id={modifiers.firstStatistic}>
            <h4 className={modifiers.statsHeadings}>Most-Favourited Game</h4>
            <span className={modifiers.statsText}>
              {props.mostFavouritedGame.title}
            </span>
          </div>
          <div id={modifiers.secondStatistic}>
            <h4 className={modifiers.statsHeadings}>Lowest Sale Price</h4>
            <span className={modifiers.statsText}>
              {props.lowestPriceGame.lowestPrice}
            </span>
          </div>
          <div id={modifiers.thirdStatistic}>
            <h4 className={modifiers.statsHeadings}>Most Popular Vendor</h4>
            <span className={modifiers.statsText}>Steam</span>
          </div>
        </div>
        <div className={modifiers.secondRowStats}>
          <div id={modifiers.fourthStatistic}>
            <h4 className={modifiers.statsHeadings}>Most-Favourited Genre</h4>
            <span className={modifiers.statsText}>
              {props.mostFavouritedGenre.genre}
            </span>
          </div>
          <div id={modifiers.fifthStatistic}>
            <h4 className={modifiers.statsHeadings}>Least Popular Vendor</h4>
            <span className={modifiers.statsText}>Steam</span>
          </div>
        </div>
        <div
          className="center-content-holder"
          id={modifiers.advancedStatsLabel}
        >
          <p>Want more detailed info?</p>
        </div>
        <div
          className="center-button-bar-holder"
          id={modifiers.advancedStatsButtonHolder}
        >
          <button
            className="btn btn-outline-secondary"
            id={modifiers.advancedStatsButton}
            type="button"
            onClick={handleAdvancedStatsNavigation}
          >
            Advanced
          </button>
        </div>
      </div>
    </GeneralUICard>
  );
}

export default SimpleStatisticsView;
