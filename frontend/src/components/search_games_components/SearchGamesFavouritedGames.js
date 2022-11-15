import modifiers from "./Search.module.css";
import FavouritedGameCard from "../ui/FavouritedGameCard";
import FavouritedGameListItem from "../ui/FavouritedGameListItem";
import GeneralUICard from "../ui/GeneralUICard";

function SearchGamesFavouritedGames(props) {
  return (
    <GeneralUICard>
      <section className={modifiers.gameListHolder}>
        <h1>Favourites List</h1>
        {props.displayInfo.displayMode === 0 ? (
          <ul
            style={{
              listStyle: "none",
              display: "flex",
            }}
          >
            {props.games[0].map((game) => (
              <FavouritedGameCard
                key={game._gameId}
                _gameId={game._gameId}
                title={game.title}
                genre={game.genre}
                image={game.image}
                releaseDate={game.releaseDate}
                localPrice={game.localPrice}
                publisher={game.publisher}
                saleStatus={game.saleStatus}
              />
            ))}
          </ul>
        ) : (
          <ul
            style={{
              listStyle: "none",
            }}
          >
            {props.games[0].map((game) => (
              <FavouritedGameListItem
                key={game._gameId}
                _gameId={game._gameId}
                title={game.title}
                genre={game.genre}
                image={game.image}
                releaseDate={game.releaseDate}
                localPrice={game.localPrice}
                publisher={game.publisher}
                saleStatus={game.saleStatus}
              />
            ))}
          </ul>
        )}
      </section>
    </GeneralUICard>
  );
}

export default SearchGamesFavouritedGames;
