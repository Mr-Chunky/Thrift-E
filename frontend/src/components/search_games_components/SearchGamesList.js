import modifiers from "./Search.module.css";
import GeneralUICard from "../ui/GeneralUICard";

function SearchGamesList(props) {
  return (
    <GeneralUICard>
      <section id={modifiers.gameListHolder}>
        <h1>Search Results</h1>
        <ul>
          <li key={props.steam_appid}>{props.name}</li>
        </ul>
      </section>
    </GeneralUICard>
  );
}

export default SearchGamesList;
