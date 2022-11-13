import AdvancedStatisticsHeader from "../components/statistics_components/AdvancedStatisticsHeader";
import AdvancedStatisticsView from "../components/statistics_components/AdvancedStatisticsView";
import GeneralUICard from "../components/ui/GeneralUICard";
import modifiers from "../components/statistics_components/AdvancedStatistics.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function AdvancedStatistics() {
  const [mostFavouritedGame, setMostFavouritedGame] = useState();
  const [lowestPriceGame, setLowestPriceGame] = useState();
  const [mostFavouritedGenre, setMostFavouritedGenre] = useState();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/statistics-simple", { replace: true });
  };

  // Get most favourited game from backend API
  useEffect(() => {
    try {
      fetch(
        `http://localhost/SteamService/api/steam/game/most-favourited`
      ).then(async (response) => {
        console.log(
          `>Simple Stats Page: HTTP Status Code - ${response.status}`
        );
        if (!response.ok) {
          console.log(await response.json());
          throw new Error(
            `>Simple Stats Page: Error! Current Status - ${response.status}`
          );
        } else if (response.ok) {
          let gameInfoObject = await response.json();
          let finalInfo = JSON.stringify(gameInfoObject, undefined, 2);
          let finalInfoObject = JSON.parse(finalInfo);

          console.warn(
            `>Simple Stats Page: Most Favourited Game Info Received - \n------------\n${finalInfo}`
          );

          setMostFavouritedGame(finalInfoObject);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  // Get game with lowest price from backend API
  useEffect(() => {
    try {
      fetch(`http://localhost/SteamService/api/steam/game/lowest-price`).then(
        async (response) => {
          console.log(
            `>Simple Stats Page: HTTP Status Code - ${response.status}`
          );
          if (!response.ok) {
            console.log(await response.json());
            throw new Error(
              `>Simple Stats Page: Error! Current Status - ${response.status}`
            );
          } else if (response.ok) {
            let gameInfoObject = await response.json();
            let finalInfo = JSON.stringify(gameInfoObject, undefined, 2);
            let finalInfoObject = JSON.parse(finalInfo);

            console.warn(
              `>Simple Stats Page: Lowest-Price Game Info Received - \n------------\n${finalInfo}`
            );

            setLowestPriceGame(finalInfoObject);
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  // Get most favourited genre from backend API
  useEffect(() => {
    try {
      fetch(
        `http://localhost/SteamService/api/steam/genre/most-favourited`
      ).then(async (response) => {
        console.log(
          `>Simple Stats Page: HTTP Status Code - ${response.status}`
        );
        if (!response.ok) {
          console.log(await response.json());
          throw new Error(
            `>Simple Stats Page: Error! Current Status - ${response.status}`
          );
        } else if (response.ok) {
          let gameInfoObject = await response.json();
          let finalInfo = JSON.stringify(gameInfoObject, undefined, 2);
          let finalInfoObject = JSON.parse(finalInfo);

          console.warn(
            `>Simple Stats Page: Most Favourited Genre Info Received - \n------------\n${finalInfo}`
          );

          setMostFavouritedGenre(finalInfoObject);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      <AdvancedStatisticsHeader />
      <GeneralUICard>
        <AdvancedStatisticsView
          mostFavouritedGame={mostFavouritedGame}
          lowestPriceGame={lowestPriceGame}
          mostFavouritedGenre={mostFavouritedGenre}
        />
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
