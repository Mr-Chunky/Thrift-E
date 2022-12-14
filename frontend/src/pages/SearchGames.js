import SearchGamesList from "../components/search_games_components/SearchGamesList.js";
import SearchGamesSearchBar from "../components/search_games_components/SearchGamesSearchBar.js";
import SearchGamesFavouritedGames from "../components/search_games_components/SearchGamesFavouritedGames.js";
import ErrorScreen from "../components/ui/ErrorScreen";
import NavBar from "../components/ui/NavBar.js";
import { useEffect, useState, useContext } from "react";
import CurrentUserContext from "../storage/current-user-context.js";

const steamApps = [
  {
    appid: 250900,
    name: "The Binding of Isaac: Rebirth",
  },
  {
    appid: 249130,
    name: "LEGO® MARVEL Super Heroes",
  },
  {
    appid: 249070,
    name: "Tom Clancy's Splinter Cell Blacklist Standard Edition",
  },
  {
    appid: 247020,
    name: "Cook, Serve, Delicious!",
  },
  {
    appid: 245620,
    name: "Tropico 5",
  },
  {
    appid: 243470,
    name: "Watch_Dogs",
  },
  {
    appid: 242640,
    name: "Styx: Master of Shadows",
  },
  {
    appid: 242760,
    name: "The Forest",
  },
  {
    appid: 241280,
    name: "Chivalry: Deadliest Warrior",
  },
];

function SearchGamesPage() {
  const [validGameId, setValidGameId] = useState(0);
  const currentUserContext = useContext(CurrentUserContext);
  const [userId, setUserId] = useState();
  const [banStatus, setBanStatus] = useState();
  const [userType, setUserType] = useState();
  const [displayMode, setDisplayMode] = useState();
  const [locale, setLocale] = useState();
  const [searchTerm, setSearchTerm] = useState();

  let displayInfo = {
    displayMode: displayMode,
    locale: locale,
  };

  // JSON objects from Steam to be passed to child component for dynamic content insertion
  const [gameData, setGameData] = useState([]);
  // Array of objects from custom backend to display in the favourites list
  const [favouritedGameData, setFavouritedGameData] = useState([]);

  // Called only if a game is unfavourited, in order to refresh the array of games
  const handleUnfavourite = () => {
    setFavouritedGameData([]);
  };

  const searchGameHandler = (userSearchTerm) => {
    setSearchTerm(userSearchTerm);

    steamApps.forEach((app) => {
      if (app.name.toUpperCase().includes(`${userSearchTerm}`.toUpperCase())) {
        console.log(`Term searched: ${userSearchTerm}\nGame ID: ${app.appid}`);
        let specificGameId = app.appid;
        currentUserContext.getCurrentGame(specificGameId);
        return "Success!";
      }
    });
    console.log(currentUserContext.gameId);
  };

  // Handles Steam API call
  useEffect(() => {
    setValidGameId(currentUserContext?.gameId);
    setUserId(JSON.parse(window.localStorage.getItem("userId")));
    setBanStatus(JSON.parse(window.localStorage.getItem("banStatus")));
    setUserType(JSON.parse(window.localStorage.getItem("userType")));
    setDisplayMode(JSON.parse(window.localStorage.getItem("displayMode")));
    setLocale(JSON.parse(window.localStorage.getItem("locale")));
    if (validGameId && searchTerm) {
      try {
        fetch(
          `http://localhost/SteamService/api/steam/steamapi/${validGameId}`
        ).then(async (response) => {
          console.log(
            `>Search Page: Game HTTP Status Code - ${response.status}`
          );
          if (!response.ok) {
            console.log(response);
            throw new Error(
              `>Search Page: Error! Current Status - ${response.status}`
            );
          } else if (response.ok) {
            let gameInfoObject = await response.json();
            let finalInfo = JSON.stringify(
              gameInfoObject[`${validGameId}`]["data"],
              undefined,
              2
            );
            let finalInfoObject = JSON.parse(finalInfo);

            console.warn(
              `>Search Page: Game Info Received - \n------------\n${finalInfo}`
            );

            setGameData([]);
            setGameData((tempArray) => [...tempArray, finalInfoObject]);
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [validGameId, searchTerm]);

  // Handles backend API call for stored games in MySQL instance
  useEffect(() => {
    if (userId) {
      try {
        fetch(
          `http://localhost/SteamService/api/steam/all-games/${userId}`
        ).then(async (response) => {
          if (!response.ok) {
            console.log(response.json());
            throw new Error(
              ">Search Page: Error! Can't find games for this user!"
            );
          } else if (response.ok) {
            console.warn(
              `>Search Page: Success!  Favourites List Status Code - ${response.status}`
            );
            const storedGameInfo = await response.json();
            console.log(
              `Array of Favourited Games:\n-------------------------\n${JSON.stringify(
                storedGameInfo,
                undefined,
                2
              )}\n-------------------------`
            );

            let gameInfoString = JSON.stringify(storedGameInfo, undefined, 2);
            let gameInfoObject = JSON.parse(gameInfoString);

            setFavouritedGameData([]);

            if (Array.isArray(gameInfoObject) && gameInfoObject.length) {
              setFavouritedGameData((tempArray) => [
                ...tempArray,
                gameInfoObject,
              ]);
            }
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [userId]);

  if (userId && banStatus === 0) {
    return (
      <div>
        {userId && banStatus === 0 ? (
          <NavBar userId={userId} banStatus={banStatus} userType={userType} />
        ) : (
          "ERROR: User is not properly authenticated!"
        )}
        {userId && banStatus === 0 && (
          <SearchGamesSearchBar onSearchGame={searchGameHandler} />
        )}

        {userId &&
        banStatus === 0 &&
        Array.isArray(gameData) &&
        gameData.length ? (
          <SearchGamesList games={gameData} displayInfo={displayInfo} />
        ) : null}
        {userId &&
        banStatus === 0 &&
        Array.isArray(favouritedGameData) &&
        favouritedGameData.length ? (
          <SearchGamesFavouritedGames
            games={favouritedGameData}
            displayInfo={displayInfo}
            handleUnfavourite={handleUnfavourite}
          />
        ) : null}
      </div>
    );
  } else {
    return <ErrorScreen />;
  }
}

export default SearchGamesPage;
