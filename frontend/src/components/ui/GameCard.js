import { useState } from "react";
import modifiers from "./UI.module.css";

/*
Possible options to choose from when displaying this GameCard:
------------------------------------------------------------------
props.header_image -- A URL pointing to the game's thumbnail image
props.name -- The name of the game as advertised on Steam
props.steam_appid -- The unique ID of the game stored on Steam
props.short_description -- A short "about" statement for the game
props.genres -- An array of objects containing genres applied to the game, where:
    * id = object.id
    * description = object.description
props.release_date -- An object containing two items, "Coming Soon (bool)" and "Release Date (Date)"
props.developers -- An array containing the studios that worked on the game
props.publishers -- An array containing the entities with publishing rights to the game
props.price_overview -- An object containing details such as:
    * currency: units used in the local region that the API was called from
    * initial: price before discount applied
    * final: net price after discount applied
    * discount_percent: integer value of percentage discount granted
    * initial_formatted: pre-formatting before further processing
    * final_formatted: final result of formatting applied to currency
------------------------------------------------------------------
*/

function GameCard(props) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelection = () => {
    if (!isSelected) {
      setIsSelected(true);
    } else if (isSelected) {
      setIsSelected(false);
    }
  };

  return (
    <li className={modifiers.gameCard}>
      <div onClick={handleSelection} style={{ cursor: "pointer" }}>
        <div>
          <img
            id={modifiers.gameCardImage}
            src={props.header_image}
            alt="Represents the game"
          />
        </div>
        <div className={modifiers.cardContent}>
          <h3>{props.name}</h3>
          {isSelected ? (
            <p>{props.short_description}</p>
          ) : (
            props.publishers.map((publisher) => (
              <h6 key={publisher}>{publisher}</h6>
            ))
          )}
          <span className={modifiers.gameAttributes}>
            {props.price_overview.final_formatted}
          </span>
          <span
            className={modifiers.gameAttributes}
            style={{ paddingLeft: "3.5em" }}
          >
            {props.genres[0].description}/{props.genres[1].description}
          </span>
        </div>
      </div>
      <div className="center-button-bar-holder">
        <button
          id={modifiers.favouritesButton}
          className="btn btn-outline-secondary"
          type="button"
          //onClick={}
        >
          Add to Favourites!
        </button>
      </div>
    </li>
  );
}

export default GameCard;
