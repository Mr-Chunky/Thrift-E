import SearchGamesList from "../components/search_games_components/SearchGamesList.js";
import SearchGamesSearchBar from "../components/search_games_components/SearchGamesSearchBar.js";
import NavBar from "../components/ui/NavBar.js";
import { useEffect, useState } from "react";

function SearchGamesPage() {
  const [userId, setUserId] = useState();

  useEffect(() => {
    setUserId(JSON.parse(window.localStorage.getItem("userId")));
  }, []);

  if (userId) {
    console.log(`>Search Page: User Id - ${userId}`);
  }

  return (
    <div>
      <NavBar />
      <SearchGamesSearchBar />
      <SearchGamesList />
    </div>
  );
}

export default SearchGamesPage;
