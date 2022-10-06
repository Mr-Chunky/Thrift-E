import modifiers from "./UI.module.css";

function GeneralUICard(props) {
  return <div className={modifiers.generalUICard}>{props.children}</div>;
}

export default GeneralUICard;
