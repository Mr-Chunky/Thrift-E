import modifiers from "./UI.module.css";
import ModalBackdrop from "./ModalBackdrop";
import { useState, useEffect, useRef } from "react";
import React from "react";

function InputModal(props) {
  const textReference = useRef();
  const [newBulletin, setNewBulletin] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    setNewBulletin(textReference.current.value);
  };

  useEffect(() => {
    if (newBulletin) {
      const currentDate = new Date();
      const date = `${currentDate.getDate()}/${
        currentDate.getMonth() + 1
      }/${currentDate.getFullYear()}`;

      const payload = {
        dateConfigured: date,
        noticeBulletinMessage: newBulletin,
      };

      try {
        fetch("http://localhost/LoginService/api/users/new-message", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(async (response) => {
          if (!response.ok) {
            console.log(response.json());
            throw new Error(`Error! Current Status: ${response.status}`);
          } else if (response.ok) {
            console.log(response.json());
            alert("Message posted successfully!");
          }
        });
      } catch (err) {
        console.log(err);
      }
      setNewBulletin();
      props.closeModal(false);
      window.location.reload();
    }
  }, [newBulletin]);

  return (
    <ModalBackdrop>
      <form className={modifiers.modal} onSubmit={handleSubmit}>
        <div className={modifiers.modalHintHolder}>
          <span id={modifiers.modalHint}>Enter new app-wide message!</span>
        </div>
        <div>
          <textarea
            id={modifiers.modalTextArea}
            rows="10"
            cols="150"
            ref={textReference}
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
            type="submit"
            className="btn btn-outline-secondary"
            id={modifiers.btnConfirm}
          >
            Accept
          </button>
        </div>
      </form>
    </ModalBackdrop>
  );
}

export default InputModal;
