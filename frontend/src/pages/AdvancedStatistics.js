import AdvancedStatisticsHeader from "../components/statistics_components/AdvancedStatisticsHeader";
import AdvancedStatisticsView from "../components/statistics_components/AdvancedStatisticsView";
import GeneralUICard from "../components/ui/GeneralUICard";
import ErrorScreen from "../components/ui/ErrorScreen";
import modifiers from "../components/statistics_components/AdvancedStatistics.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function AdvancedStatistics() {
  const [mostFavouritedGame, setMostFavouritedGame] = useState();
  const [lowestPriceGame, setLowestPriceGame] = useState();
  const [mostFavouritedGenre, setMostFavouritedGenre] = useState();
  const [userId, setUserId] = useState();
  const locale = window.localStorage.getItem("locale");
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/statistics-simple", { replace: true });
  };

  // Get most favourited game from backend API
  useEffect(() => {
    setUserId(JSON.parse(window.localStorage.getItem("userId")));
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
            let formattedCurrency;

            switch (locale) {
              case "0":
                formattedCurrency = `R ${finalInfoObject.lowestPrice.toFixed(
                  2
                )}`;
                break;
              case "1":
                formattedCurrency = `ZWL ${(
                  finalInfoObject.lowestPrice * 18.715268
                ).toFixed(2)}`;
                break;
              case "2":
                formattedCurrency = `NZ$ ${(
                  finalInfoObject.lowestPrice * 0.094
                ).toFixed(2)}`;
                break;
              case "3":
                formattedCurrency = `$${(
                  finalInfoObject.lowestPrice * 0.058
                ).toFixed(2)}`;
                break;
              case "4":
                formattedCurrency = `?? ${(
                  finalInfoObject.lowestPrice * 0.049
                ).toFixed(2)}`;
                break;
              case "5":
                formattedCurrency = `AU$ ${(
                  finalInfoObject.lowestPrice * 0.085
                ).toFixed(2)}`;
                break;
              default:
                break;
            }

            const finalPayload = {
              title: finalInfoObject.title,
              lowestPrice: formattedCurrency,
            };

            console.warn(
              `>Simple Stats Page: Lowest-Price Game Info Received - \n------------\n${finalInfo}`
            );

            setLowestPriceGame(finalPayload);
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

  if (userId) {
    return (
      <div>
        {userId && <AdvancedStatisticsHeader />}

        <GeneralUICard>
          {userId ? (
            <AdvancedStatisticsView
              mostFavouritedGame={mostFavouritedGame}
              lowestPriceGame={lowestPriceGame}
              mostFavouritedGenre={mostFavouritedGenre}
            />
          ) : (
            "ERROR: User is not properly authenticated!"
          )}
        </GeneralUICard>
        {userId ? (
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
  } else {
    return <ErrorScreen />;
  }
}

export default AdvancedStatistics;
