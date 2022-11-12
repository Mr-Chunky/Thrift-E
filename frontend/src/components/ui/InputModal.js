import modifiers from "./UI.module.css";
import ModalBackdrop from "./ModalBackdrop";

function InputModal(props) {
  return (
    <ModalBackdrop>
      <div className={modifiers.modal}>
        <div className={modifiers.modalHintHolder}>
          <span id={modifiers.modalHint}>Enter new app-wide message!</span>
        </div>
        <div>
          <textarea
            id={modifiers.modalTextArea}
            rows="10"
            cols="150"
          ></textarea>
        </div>
        <div className="center-button-bar-holder">
          <button
            type="button"
            className="btn btn-outline-secondary"
            id={modifiers.btnGoBack}
            onClick={props.handleDiscard}
          >
            Discard
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            id={modifiers.btnConfirm}
            // onClick={props.handleNewBulletin}
          >
            Accept
          </button>
        </div>
      </div>
    </ModalBackdrop>
  );
}

export default InputModal;
