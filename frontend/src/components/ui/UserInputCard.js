import modifiers from "./UI.module.css";

function UserInputCard(props) {
  return <div className={modifiers.userInputCard}>{props.children}</div>;
}

export default UserInputCard;
