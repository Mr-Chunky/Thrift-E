import { useEffect, useState } from "react";
import modifiers from "./UI.module.css";

/*
Possible options to choose from when displaying this GameCard:
------------------------------------------------------------------
props._gameId -- ID of the internally stored game in the MySQL database
props.title -- The name of the game as stored in the MySQL database
props.genre -- The genre of the game as stored in the MySQL database
props.image -- The URL of the image associated with the game as stored in the MySQL database
props.releaseDate -- The release date of the game as stored in the MySQL database
props.localPrice -- The price of the game as stored in the MySQL database (move decimal place 2 places to the left)
props.publisher -- The publisher of the game as stored in the MySQL database
props.saleStatus -- Returns the sale status of the game as stored in the MySQL database, where 1 = Sale & 0 = No Sale
------------------------------------------------------------------
*/

function FavouritedGameListItem(props) {
  let formattedCurrency;
  const [isUnfavourited, setIsUnfavourited] = useState(false);
  const locale = window.localStorage.getItem("locale");

  switch (locale) {
    case "0":
      formattedCurrency = `R ${props.localPrice.toFixed(2)}`;
      break;
    case "1":
      formattedCurrency = `ZWL ${(props.localPrice * 18.715268).toFixed(2)}`;
      break;
    case "2":
      formattedCurrency = `NZ$ ${(props.localPrice * 0.094).toFixed(2)}`;
      break;
    case "3":
      formattedCurrency = `$${(props.localPrice * 0.058).toFixed(2)}`;
      break;
    case "4":
      formattedCurrency = `£ ${(props.localPrice * 0.049).toFixed(2)}`;
      break;
    case "5":
      formattedCurrency = `AU$ ${(props.localPrice * 0.085).toFixed(2)}`;
      break;
    default:
      break;
  }

  // Called after "Remove from Favourites" clicked
  const handleUnfavourite = () => {
    setIsUnfavourited(true);

    setTimeout(() => props.handleUnfavourite(), 1000);
  };

  const handleRedirect = () => {
    window.location.href = `https://store.steampowered.com/app/${props._gameId}`;
  };

  // Removing the game from the associative table between user and game
  useEffect(() => {
    if (isUnfavourited) {
      // Data to send for deletion
      const payload = {
        _userId: window.localStorage.getItem("userId"),
        _gameId: props._gameId,
      };

      // Actual API call
      try {
        fetch(`http://localhost/SteamService/api/steam/remove-favourite-game`, {
          method: "DELETE",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(async (response) => {
          console.log(
            `>Game Card ${props._gameId}: HTTP Status Code - ${response.status}`
          );
          if (!response.ok) {
            console.log(response);
            throw new Error(
              `>Game Card ${props._gameId}: Error! Current Status - ${response.status}`
            );
          } else if (response.ok) {
            alert(`Notice: Removed ${props.title} from Favourites.`);
            setIsUnfavourited(false);
            window.location.reload();
          }
        });
      } catch (err) {
        console.log(err);
        setIsUnfavourited(false);
      }
    }
  }, [isUnfavourited]);

  return (
    <li style={{ display: "flex", marginTop: "2em" }}>
      <div
        className={modifiers.gamesListItem}
        onClick={handleRedirect}
        style={{ cursor: "pointer" }}
      >
        <span className={modifiers.gamesListAttributes}>
          <span className={modifiers.gameListTitles}>Title:</span> {props.title}
        </span>
        ||
        <span className={modifiers.gamesListAttributes}>
          <span className={modifiers.gameListTitles}>Genre:</span> {props.genre}
        </span>
        ||
        <span className={modifiers.gamesListAttributes}>
          <span className={modifiers.gameListTitles}>Publisher:</span>{" "}
          {props.publisher}
        </span>
        ||
        <span className={modifiers.gamesListAttributes}>
          <span className={modifiers.gameListTitles}>Release Date:</span>{" "}
          {props.releaseDate}
        </span>
        ||
        <span className={modifiers.gamesListAttributes}>
          <span className={modifiers.gameListTitles}>Price:</span>{" "}
          {formattedCurrency}
        </span>
        ||
        <span className={modifiers.gamesListAttributes}>
          <span className={modifiers.gameListTitles}>Sale:</span>{" "}
          {props.saleStatus === 0 ? "No" : "Yes"}
        </span>
      </div>
      <button
        className="btn btn-outline-secondary"
        id={modifiers.btnBan}
        style={{
          borderRadius: "1em",
          border: "3px solid black",
          marginLeft: "1em",
          paddingInlineStart: "1em",
          paddingInlineEnd: "1em",
        }}
        type="button"
        onClick={handleUnfavourite}
      >
        Unfavourite
      </button>
    </li>
  );
}

export default FavouritedGameListItem;
