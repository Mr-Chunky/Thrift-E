import modifiers from "./UI.module.css";
import { useEffect, useState } from "react";

function UsersListCard(props) {
  const [isBanning, setIsBanning] = useState(false);

  const handleBan = () => {
    setIsBanning(true);
  };

  // Ban a user
  useEffect(() => {
    if (isBanning) {
      const payload = {
        _userId: props._userId,
        banStatus: 1,
      };

      try {
        fetch("http://localhost/LoginService/api/users/edit-ban-status", {
          method: "PUT",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }).then(async (response) => {
          if (!response.ok) {
            console.warn(await response.json());
            throw new Error(`Error! Current Status: ${response.status}`);
          } else if (response.ok) {
            console.log(await response.json());
          }
        });
      } catch (err) {
        console.log(err);
      }

      setIsBanning(false);
      window.location.reload();
    }
  }, [isBanning]);

  return (
    <li className={modifiers.horizontalListCard}>
      <div>
        <span className={modifiers.horizontalListCardItem}>
          ID: {props._userId}
        </span>
        <span className={modifiers.horizontalListCardItem}>
          Username: {props.username}
        </span>
        <span className={modifiers.horizontalListCardItem}>
          Email: {props.email}
        </span>
        <span className={modifiers.horizontalListCardItem}>
          User Type: {props.userType === 0 ? "Standard User" : "Administrator"}
        </span>
        <button
          className="btn btn-outline-secondary"
          id={modifiers.btnBan}
          onClick={handleBan}
        >
          Ban
        </button>
      </div>
    </li>
  );
}

export default UsersListCard;
