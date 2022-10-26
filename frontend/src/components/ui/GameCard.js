import modifiers from "./UI.module.css";

function GameCard(props) {
  return (
    <li className={modifiers.gameCard}>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h3>GAME TITLE</h3>
        <p> GAME DESCRIPTION</p>
        <span>GAME PRICE</span>
      </div>
      <div>
        <button>Add to Favourites!</button>
      </div>
    </li>
  );
}

export default GameCard;
