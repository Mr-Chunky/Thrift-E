import NewsBulletinCard from "../ui/NewsBulletinCard";

function NewsFeed(props) {
  // Reversing the news array to make sure that the newest entry is always at the top
  const reversedNews = [...props.news[0]].reverse();

  return (
    <ul style={{ listStyle: "none", maxWidth: "98%", minWidth: "50%" }}>
      {reversedNews.map((news) => (
        <NewsBulletinCard
          key={news._siteSettingsId}
          _siteSettingsId={news._siteSettingsId}
          dateConfigured={news.dateConfigured}
          noticeBulletinMessage={news.noticeBulletinMessage}
        />
      ))}
    </ul>
  );
}

export default NewsFeed;
