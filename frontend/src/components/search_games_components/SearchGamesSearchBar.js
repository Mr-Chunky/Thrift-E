import modifiers from "./Search.module.css";
import { useRef } from "react";

function SearchGamesSearchBar() {
  let userSearchInput = useRef();

  return (
    <form className="form-group">
      <input
        type="text"
        placeholder="Search for a game"
        className="form-control"
        id={modifiers.searchGameInput}
        ref={userSearchInput}
      ></input>
    </form>
  );
}

export default SearchGamesSearchBar;
