import { useEffect, useState } from "react";
import modifiers from "./UI.module.css";
/*
Possible options to choose from when displaying this GameCard:
------------------------------------------------------------------
props._gameId -- ID of the internally stored game in the MySQL database
props.name -- The name of the game as stored in the MySQL database
props.genre -- The genre of the game as stored in the MySQL database
props.image -- The URL of the image associated with the game as stored in the MySQL database
props.release_date -- The release date of the game as stored in the MySQL database
props.localPrice -- The price of the game as stored in the MySQL database (move decimal place 2 places to the left)
props.publisher -- The publisher of the game as stored in the MySQL database
props.saleStatus -- Returns the sale status of the game as stored in the MySQL database, where 1 = Sale & 0 = No Sale
------------------------------------------------------------------
*/

function FavouritedGameCard(props) {
  //   console.warn(
  //     `Inside FavouritedGameCard:\n${JSON.stringify(props, undefined, 2)}`
  //   );
  //  const [isSelected, setIsSelected] = useState(false);
  const [isUnfavourited, setIsUnfavourited] = useState(false);

  //   const handleSelection = () => {
  //     if (!isSelected) {
  //       setIsSelected(true);
  //     } else if (isSelected) {
  //       setIsSelected(false);
  //     }
  //   };

  // Called after "Remove from Favourites" clicked
  const handleUnfavourite = () => {
    setIsUnfavourited(true);
  };

  // Removing the game from the associative table between user and game (TODO)

  return (
    <li className={modifiers.gameCard}>
      <div /* onClick={handleSelection} style={{ cursor: "pointer" }} */>
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
            <span>R {(props.localPrice / 100).toFixed(2)}</span>
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
