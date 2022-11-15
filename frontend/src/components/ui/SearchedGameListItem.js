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

function SearchedGameListItem(props) {
  let formattedCurrency;
  const [isSelected, setIsSelected] = useState(false);
  const [isFavourited, setIsFavourited] = useState(false);
  const locale = window.localStorage.getItem("locale");
  const userId = window.localStorage.getItem("userId");
  let saleStatus;
  props.price_overview.initial - props.price_overview.final > 0
    ? (saleStatus = 1)
    : (saleStatus = 0);

  switch (locale) {
    case "0":
      formattedCurrency = `R ${(props.price_overview.final / 100).toFixed(2)}`;
      break;
    case "1":
      formattedCurrency = `ZWL ${(
        (props.price_overview.final / 100) *
        18.715268
      ).toFixed(2)}`;
      break;
    case "2":
      formattedCurrency = `NZ$ ${(
        (props.price_overview.final / 100) *
        0.094
      ).toFixed(2)}`;
      break;
    case "3":
      formattedCurrency = `$${(
        (props.price_overview.final / 100) *
        0.058
      ).toFixed(2)}`;
      break;
    case "4":
      formattedCurrency = `£ ${(
        (props.price_overview.final / 100) *
        0.049
      ).toFixed(2)}`;
      break;
    case "5":
      formattedCurrency = `AU$ ${(
        (props.price_overview.final / 100) *
        0.085
      ).toFixed(2)}`;
      break;
    default:
      break;
  }

  // Called after "Add to Favourites" clicked
  const handleFavourite = () => {
    setIsFavourited(true);
  };

  // Expands the list item on click
  const handleSelection = () => {
    if (!isSelected) {
      setIsSelected(true);
    } else if (isSelected) {
      setIsSelected(false);
    }
  };

  // Storing the game in custom backend
  useEffect(() => {
    if (isFavourited) {
      const payload = {
        _gameId: `${props.steam_appid}`,
        _userId: userId,
        title: props.name,
        genre: props.genres[0].description,
        image: props.header_image,
        releaseDate: props.release_date.date,
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
            window.location.reload();
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [isFavourited, props, saleStatus, userId]);

  return (
    <li style={{ listStyle: "none" }}>
      <div style={{ display: "flex", marginTop: "2em" }}>
        <div
          className={modifiers.gamesListItem}
          onClick={handleSelection}
          style={{ cursor: "pointer" }}
        >
          <span className={modifiers.gamesListAttributes}>
            <span className={modifiers.gameListTitles}>Title:</span>{" "}
            {props.name}
          </span>
          ||
          <span className={modifiers.gamesListAttributes}>
            <span className={modifiers.gameListTitles}>Genre:</span>{" "}
            {props.genres[0].description}
          </span>
          ||
          <span className={modifiers.gamesListAttributes}>
            <span className={modifiers.gameListTitles}>Publisher:</span>{" "}
            {props.publishers[0]}
          </span>
          ||
          <span className={modifiers.gamesListAttributes}>
            <span className={modifiers.gameListTitles}>Release Date:</span>{" "}
            {props.release_date.date}
          </span>
          ||
          <span className={modifiers.gamesListAttributes}>
            <span className={modifiers.gameListTitles}>Price: </span>
            {formattedCurrency}
          </span>
          ||
          <span className={modifiers.gamesListAttributes}>
            <span className={modifiers.gameListTitles}>Sale:</span>{" "}
            {saleStatus === 0 ? "No" : "Yes"}
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
          onClick={handleFavourite}
        >
          Favourite
        </button>
      </div>
      <div
        style={{
          maxWidth: "70%",
          marginTop: "1em",
          fontFamily: "serif",
          color: "white",
          textShadow: "2px 0px 2px black",
          fontSize: "large",
        }}
      >
        {isSelected ? (
          <span>
            <span
              className={modifiers.gameListTitles}
              style={{ textShadow: "2px 0px 2px black" }}
            >
              Description:{" "}
            </span>
            {props.short_description}
          </span>
        ) : null}
      </div>
    </li>
  );
}

export default SearchedGameListItem;
