import modifiers from "./UI.module.css";

/*
Possible options to choose from when displaying this GameCard:
------------------------------------------------------------------
props.header_image -- A URL pointing to the game's thumbnail image
props.name -- The name of the game as advertised on Steam
props.steam_appid -- The unique ID of the game stored on Steam
props.short_description -- A short "about" statement for the game
props.genres -- An array of objects containing genres applied to the game, where:
    * id = object[0]
    * description = object[1]
props.release_date -- An object containing two items, "Coming Soon (bool)" and "Release Date (Date)"
props.developers -- An array containing the studios that worked on the game
props.publishers -- An array containing the entities with publishing rights to the game
props.price_overview -- An object containing details such as:
    * currency
    * base price
    * net price
    * discount percentage granted
    * initial formatting rules applied
    * final formatting rules applied for presentation
------------------------------------------------------------------
*/

function GameCard(props) {
  return (
    <li className={modifiers.gameCard}>
      <div>
        <img src={props.header_image} alt="" />
      </div>
      <div>
        <h3>GAME TITLE</h3>
        <p> GAME DESCRIPTION</p>
        <span>GAME PRICE</span>
      </div>
      <div>
        <button>Add to Favourites!</button>
      </div>
    </li>
  );
}

export default GameCard;
