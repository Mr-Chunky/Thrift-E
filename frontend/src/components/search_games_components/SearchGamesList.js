import modifiers from "./Search.module.css";
import { useState } from "react";
import GeneralUICard from "../ui/GeneralUICard";

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
    <GeneralUICard>
      <div id={modifiers.gameListHolder}>
        <ul>
          <li>Placeholder</li>
          <li>Placeholder</li>
          <li>Placeholder</li>
          <li>Placeholder</li>
        </ul>
      </div>
    </GeneralUICard>
  );
}

export default SearchGamesList;
