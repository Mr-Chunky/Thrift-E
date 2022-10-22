import modifiers from "./Search.module.css";
import searchPic from "../../images/magnifying-glass-icon.svg";
import { useRef } from "react";

function SearchGamesSearchBar(props) {
  let userSearchInput = useRef();

  async function searchGame(event) {
    event.preventDefault();
    let userSearchTerm = userSearchInput.current.value;

    props.onSearchGame(userSearchTerm);
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
