import NewsHeader from "../components/news_components/NewsHeader";
import GeneralUICard from "../components/ui/GeneralUICard";
import NavBar from "../components/ui/NavBar";

function News() {
  return (
    <div>
      <NavBar />
      <NewsHeader />
      <GeneralUICard>News Stuff!</GeneralUICard>
    </div>
  );
}

export default News;
