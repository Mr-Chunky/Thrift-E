import modifiers from "./UI.module.css";

function BannedUsersListCard(props) {
  return (
    <li className={modifiers.horizontalListCard}>
      <div>
        <span className={modifiers.horizontalListCardItem}>ID: #</span>
        <span className={modifiers.horizontalListCardItem}>
          Username: Placeholder
        </span>
        <span className={modifiers.horizontalListCardItem}>
          Email: place@holder.com
        </span>
        <button className="btn btn-outline-secondary" id={modifiers.btnBan}>
          Unban
        </button>
      </div>
    </li>
  );
}

export default BannedUsersListCard;
