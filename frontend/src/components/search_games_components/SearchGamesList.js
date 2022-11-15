import modifiers from "./Search.module.css";
import GeneralUICard from "../ui/GeneralUICard";
import SearchedGameCard from "../ui/SearchedGameCard";
import SearchedGameListItem from "../ui/SearchedGameListItem";

function SearchGamesList(props) {
  return (
    <GeneralUICard>
      <section className={modifiers.gameListHolder}>
        <h1>Search Results</h1>
        {props.displayInfo.displayMode === 0 ? (
          <ul
            style={{
              listStyle: "none",
              display: "flex",
            }}
          >
            {props.games.map((game) => (
              <SearchedGameCard
                key={game.steam_appid}
                steam_appid={game.steam_appid}
                name={game.name}
                header_image={game.header_image}
                short_description={game.short_description}
                genres={game.genres}
                release_date={game.release_date}
                developers={game.developers}
                publishers={game.publishers}
                price_overview={game.price_overview}
              />
            ))}
          </ul>
        ) : (
          <ul style={{ listSTyle: "none" }}>
            {props.games.map((game) => (
              <SearchedGameListItem
                key={game.steam_appid}
                steam_appid={game.steam_appid}
                name={game.name}
                header_image={game.header_image}
                short_description={game.short_description}
                genres={game.genres}
                release_date={game.release_date}
                developers={game.developers}
                publishers={game.publishers}
                price_overview={game.price_overview}
              />
            ))}
          </ul>
        )}
      </section>
    </GeneralUICard>
  );
}

export default SearchGamesList;
