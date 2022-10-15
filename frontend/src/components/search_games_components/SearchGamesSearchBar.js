import modifiers from "./Search.module.css";
import searchPic from "../../images/magnifying-glass-icon.svg";
import { useRef, useContext } from "react";
import CurrentUserContext from "../../storage/current-user-context";

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

function SearchGamesSearchBar() {
  const currentContext = useContext(CurrentUserContext);

  let specificGameId = -1;
  let userSearchInput = useRef();

  function searchGame(event) {
    event.preventDefault();

    steamApps.forEach((app) => {
      if (
        app.name
          .toUpperCase()
          .includes(`${userSearchInput.current.value}`.toUpperCase())
      ) {
        console.log(
          `Term searched: ${userSearchInput.current.value}\nGame ID: ${app.appid}`
        );
        specificGameId = app.appid;
        currentContext.getCurrentGame(specificGameId);
        return "Success!";
      }
    });
    // TODO: Implement useEffect() to load page
    console.log(currentContext.gameId);
    return specificGameId;
  }

  return (
    <form className="form-group" onSubmit={searchGame}>
      <div id={modifiers.searchBarHolder}>
        <input
          type="text"
          placeholder="Search for a game"
          className="form-control"
          id={modifiers.searchGameInput}
          ref={userSearchInput}
        ></input>
        <button id={modifiers.btnSearch} type="submit">
          <img src={searchPic} alt="search-for-game" />
        </button>
      </div>
    </form>
  );
}

export default SearchGamesSearchBar;
