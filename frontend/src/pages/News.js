import NewsFeed from "../components/news_components/NewsFeed";
import NewsHeader from "../components/news_components/NewsHeader";
import GeneralUICard from "../components/ui/GeneralUICard";
import NavBar from "../components/ui/NavBar";
import modifiers from "../components/news_components/News.module.css";
import { useState } from "react";
import InputModal from "../components/ui/InputModal";

function News() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddBulletin = () => {
    setIsModalOpen(true);
  };

  const onHandleDiscard = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <NavBar />
      <NewsHeader />
      <div className={modifiers.newsBulletinHolder}>
        <button
          id={modifiers.addNewsBulletin}
          type="button"
          onClick={handleAddBulletin}
        >
          ADD BULLETIN
        </button>
      </div>
      <GeneralUICard>
        <NewsFeed />
      </GeneralUICard>
      {isModalOpen ? <InputModal handleDiscard={onHandleDiscard} /> : null}
    </div>
  );
}

export default News;
