import { useEffect, useState } from "react";
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
props.release_date -- An object containing two items:
    * coming_soon (bool)
    * date (Date)
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

function SearchedGameCard(props) {
  const userId = window.localStorage.getItem("userId");
  let saleStatus;
  props.price_overview.initial - props.price_overview.final > 0
    ? (saleStatus = 1)
    : (saleStatus = 0);
  const [isSelected, setIsSelected] = useState(false);
  const [isFavourited, setIsFavourited] = useState(false);

  const handleSelection = () => {
    if (!isSelected) {
      setIsSelected(true);
    } else if (isSelected) {
      setIsSelected(false);
    }
  };

  // Called after "Add to Favourites" clicked
  const handleFavourite = () => {
    setIsFavourited(true);
  };

  // Storing the game in custom backend
  useEffect(() => {
    if (isFavourited) {
      const payload = {
        _userId: userId,
        title: props.name,
        genre: props.genres[0].description,
        image: props.header_image,
        releaseDate: props.releaseDate,
        localPrice: props.price_overview.final,
        publisher: props.publishers[0],
        saleStatus: saleStatus,
      };
      try {
        fetch("http://localhost/SteamService/api/steam/new-steam-game", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((response) => {
          if (!response.ok) {
            console.warn(response.json());
            throw new Error(`Error!  Current Status: ${response.status}!`);
          } else if (response.ok) {
            console.log(response.json());
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [isFavourited, props, saleStatus, userId]);

  return (
    <li className={modifiers.gameCard}>
      <div onClick={handleSelection} style={{ cursor: "pointer" }}>
        <div>
          <img
            className={modifiers.gameCardImage}
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
          <div className={modifiers.gameAttributes}>
            <span>{props.price_overview.final_formatted}</span>
            <span
              style={{
                marginLeft: "auto",
                marginRight: "0",
              }}
            >
              {props.genres[0].description}/{props.genres[1].description}
            </span>
          </div>
        </div>
      </div>
      <div className="center-button-bar-holder">
        <button
          id={modifiers.favouritesButton}
          className="btn btn-outline-secondary"
          type="button"
          onClick={handleFavourite}
        >
          Add to Favourites!
        </button>
      </div>
    </li>
  );
}

export default SearchedGameCard;
