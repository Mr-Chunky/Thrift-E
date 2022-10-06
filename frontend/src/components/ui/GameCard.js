import modifiers from "./UI.module.css";

function GameCard(props) {
  return <div className={modifiers.gameCard}>{props.children}</div>;
}

export default GameCard;
