import modifiers from "./UI.module.css";
import { useEffect, useState } from "react";

function BannedUsersListCard(props) {
  const [isUnbanning, setIsUnbanning] = useState(false);

  const handleUnban = () => {
    setIsUnbanning(true);
  };

  // Unban a user
  useEffect(() => {
    if (isUnbanning) {
      const payload = {
        _userId: props._userId,
        banStatus: 0,
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

      setIsUnbanning(false);
      window.location.reload();
    }
  }, [isUnbanning]);

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
          onClick={handleUnban}
        >
          Unban
        </button>
      </div>
    </li>
  );
}

export default BannedUsersListCard;
