import modifiers from "./UI.module.css";

function BannedUsersListCard(props) {
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
        <button className="btn btn-outline-secondary" id={modifiers.btnBan}>
          Ban
        </button>
      </div>
    </li>
  );
}

export default BannedUsersListCard;
