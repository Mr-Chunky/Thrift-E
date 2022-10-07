import modifiers from "./Search.module.css";
import { useState } from "react";

function SearchGamesList() {
  const [list, setList] = useState();
  const [game, setGame] = useState("");

  const addGameToList = () => {
    let temporaryHolder = list;
    temporaryHolder.push(game);
    setList(temporaryHolder);
    setGame("");
  };

  return (
    <div id={modifiers.gameListHolder}>
      <ul></ul>
    </div>
  );
}

export default SearchGamesList;
