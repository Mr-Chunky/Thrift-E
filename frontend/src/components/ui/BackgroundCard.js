import modifiers from "./BackgroundCard.module.css";

function BackgroundCard(props) {
  return <div className={modifiers.backgroundCard}>{props.children}</div>;
}

export default BackgroundCard;
