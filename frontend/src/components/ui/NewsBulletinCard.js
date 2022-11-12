import modifiers from "./UI.module.css";

function NewsBulletinCard(props) {
  return (
    <li className={modifiers.newsCard}>
      <div>
        <div>
          <span className={modifiers.newsDate}>{props.dateConfigured}</span>
        </div>
        <div className={modifiers.newsMessage}>
          <p>{props.noticeBulletinMessage}</p>
        </div>
      </div>
    </li>
  );
}

export default NewsBulletinCard;
