import { useEffect, useState } from "react";
import modifiers from "./UI.module.css";
/*
Possible options to choose from when displaying this GameCard:
------------------------------------------------------------------
props._gameId -- ID of the internally stored game in the MySQL database
props.title -- The name of the game as stored in the MySQL database
props.genre -- The genre of the game as stored in the MySQL database
props.image -- The URL of the image associated with the game as stored in the MySQL database
props.release_date -- The release date of the game as stored in the MySQL database
props.localPrice -- The price of the game as stored in the MySQL database (move decimal place 2 places to the left)
props.publisher -- The publisher of the game as stored in the MySQL database
props.saleStatus -- Returns the sale status of the game as stored in the MySQL database, where 1 = Sale & 0 = No Sale
------------------------------------------------------------------
*/

function FavouritedGameCard(props) {
  const [isUnfavourited, setIsUnfavourited] = useState(false);

  // Called after "Remove from Favourites" clicked
  const handleUnfavourite = () => {
    setIsUnfavourited(true);
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
    <li className={modifiers.gameCard}>
      <div onClick={handleRedirect} style={{ cursor: "pointer" }}>
        <div>
          <img
            className={modifiers.gameCardImage}
            src={props.image}
            alt="Represents the game"
          />
        </div>
        <div className={modifiers.cardContent}>
          <h3>{props.title}</h3>
          <h6>{props.publisher}</h6>
          <div className={modifiers.gameAttributes}>
            <span>R {props.localPrice.toFixed(2)}</span>
            <span
              style={{
                marginLeft: "auto",
                marginRight: "0",
              }}
            >
              {props.genre}
            </span>
          </div>
        </div>
      </div>
      <div
        className="center-button-bar-holder"
        id={modifiers.cardButtonHolderTwo}
      >
        <button
          id={modifiers.favouritesButtonTwo}
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleUnfavourite}
        >
          Remove from Favourites!
        </button>
      </div>
    </li>
  );
}

export default FavouritedGameCard;
