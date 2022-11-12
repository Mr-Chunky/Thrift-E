import modifiers from "./UI.module.css";

function ModalBackdrop(props) {
  return <div className={modifiers.backdrop}>{props.children}</div>;
}

export default ModalBackdrop;
