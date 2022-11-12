import modifiers from "./UI.module.css";

function UsersListCard(props) {
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
          Ban
        </button>
      </div>
    </li>
  );
}

export default UsersListCard;
