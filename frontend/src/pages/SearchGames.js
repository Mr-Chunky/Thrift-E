import SearchGamesList from "../components/search_games_components/SearchGamesList.js";
import SearchGamesSearchBar from "../components/search_games_components/SearchGamesSearchBar.js";
import NavBar from "../components/ui/NavBar.js";

function SearchGamesPage() {
  return (
    <div>
      <NavBar />
      <SearchGamesSearchBar />
      <SearchGamesList />
    </div>
  );
}

export default SearchGamesPage;
