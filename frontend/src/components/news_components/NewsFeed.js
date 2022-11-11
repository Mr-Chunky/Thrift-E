import NewsBulletinCard from "../ui/NewsBulletinCard";

function NewsFeed() {
  return <ul style={{ listStyle: "none" }}>{<NewsBulletinCard />}</ul>;
}

export default NewsFeed;
