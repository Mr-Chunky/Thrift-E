import modifiers from "./Search.module.css";
import FavouritedGameCard from "../ui/FavouritedGameCard";
import GeneralUICard from "../ui/GeneralUICard";

function SearchGamesFavouritedGames(props) {
  return (
    <GeneralUICard>
      <section className={modifiers.gameListHolder}>
        <h1>Favourites List</h1>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
          }}
        >
          {props.games.map((game) => (
            <FavouritedGameCard
              key={game._gameId}
              _gameId={game._gameId}
              name={game.title}
              genre={game.genre}
              image={game.image}
              releaseDate={game.releaseDate}
              localPrice={game.localPrice}
              publisher={game.publisher}
              saleStatus={game.saleStatus}
            />
          ))}
        </ul>
      </section>
    </GeneralUICard>
  );
}

export default SearchGamesFavouritedGames;
