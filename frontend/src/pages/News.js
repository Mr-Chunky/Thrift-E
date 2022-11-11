import NewsFeed from "../components/news_components/NewsFeed";
import NewsHeader from "../components/news_components/NewsHeader";
import GeneralUICard from "../components/ui/GeneralUICard";
import NavBar from "../components/ui/NavBar";
import modifiers from "../components/news_components/News.module.css";

function News() {
  return (
    <div>
      <NavBar />
      <NewsHeader />
      <div className={modifiers.newsBulletinHolder}>
        <button id={modifiers.addNewsBulletin}>ADD BULLETIN</button>
      </div>
      <GeneralUICard>
        <NewsFeed />
      </GeneralUICard>
    </div>
  );
}

export default News;
