import SearchGamesList from "../components/search_games_components/SearchGamesList.js";
import SearchGamesSearchBar from "../components/search_games_components/SearchGamesSearchBar.js";
import SearchGamesFavouritedGames from "../components/search_games_components/SearchGamesFavouritedGames.js";
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
  const [searchTerm, setSearchTerm] = useState();

  // JSON objects from Steam to be passed to child component for dynamic content insertion
  const [gameData, setGameData] = useState([]);
  // Array of objects from custom backend to display in the favourites list
  const [favouritedGameData, setFavouritedGameData] = useState([]);

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
    if (validGameId && searchTerm) {
      try {
        fetch(`http://localhost:5041/api/steam/steamapi/${validGameId}`).then(
          async (response) => {
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

              console.log(`>Search Page: Game Name - ${finalInfoObject.name}`);

              setGameData([]);
              setGameData((tempArray) => [...tempArray, finalInfoObject]);
            }
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  }, [validGameId, searchTerm]);

  // Handles backend API call for stored games in MySQL instance
  useEffect(() => {
    if (userId) {
      let getFavourites;
      try {
        getFavourites = fetch(
          `http://localhost:5041/api/steam/all-games/${userId}`
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
          }
        });
      } catch (err) {
        console.log(err);
      }

      setFavouritedGameData([]);

      if (Array.isArray(getFavourites) && getFavourites.length) {
        setFavouritedGameData((tempArray) => [...tempArray, getFavourites]);
      }
    }
  }, [userId]);

  // TODO: PASS GAME DATA FROM CUSTOM BACKEND CALL TO FAVOURITED GAME LIST
  return (
    <div>
      <NavBar />
      <SearchGamesSearchBar onSearchGame={searchGameHandler} />
      {Array.isArray(gameData) && gameData.length ? (
        <SearchGamesList games={gameData} />
      ) : null}
      {Array.isArray(favouritedGameData) && favouritedGameData.length ? (
        <SearchGamesFavouritedGames />
      ) : null}
    </div>
  );
}

export default SearchGamesPage;
