import NewsFeed from "../components/news_components/NewsFeed";
import NewsHeader from "../components/news_components/NewsHeader";
import GeneralUICard from "../components/ui/GeneralUICard";
import NavBar from "../components/ui/NavBar";
import modifiers from "../components/news_components/News.module.css";
import { useState, useEffect } from "react";
import InputModal from "../components/ui/InputModal";

function News() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newsFeed, setNewsFeed] = useState([]);
  const [userId, setUserId] = useState();

  const handleAddBulletin = () => {
    setIsModalOpen(true);
  };

  const onHandleDiscard = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setUserId(JSON.parse(window.localStorage.getItem("userId")));
    try {
      fetch(`http://localhost/LoginService/api/users/all-messages`).then(
        async (response) => {
          if (!response.ok) {
            console.log(response.json());
            throw new Error(
              ">Search Page: Error! Can't find games for this user!"
            );
          } else if (response.ok) {
            console.warn(
              `>Search Page: Success!  Favourites List Status Code - ${response.status}`
            );
            const storedBulletinInfo = await response.json();
            console.log(
              `Array of News Bulletins:\n-------------------------\n${JSON.stringify(
                storedBulletinInfo,
                undefined,
                2
              )}\n-------------------------`
            );

            let bulletinInfoString = JSON.stringify(
              storedBulletinInfo,
              undefined,
              2
            );
            let bulletinInfoObject = JSON.parse(bulletinInfoString);

            setNewsFeed([]);

            if (
              Array.isArray(bulletinInfoObject) &&
              bulletinInfoObject.length
            ) {
              setNewsFeed((tempArray) => [...tempArray, bulletinInfoObject]);
            }
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div>
      {userId && <NavBar />}
      {userId && <NewsHeader />}
      {userId ? (
        <div className={modifiers.newsBulletinHolder}>
          <button
            id={modifiers.addNewsBulletin}
            type="button"
            onClick={handleAddBulletin}
          >
            ADD BULLETIN
          </button>
        </div>
      ) : (
        "ERROR: User is not properly authenticated!"
      )}
      <GeneralUICard>
        {userId && Array.isArray(newsFeed) && newsFeed.length ? (
          <NewsFeed news={newsFeed} />
        ) : null}
      </GeneralUICard>
      {isModalOpen ? (
        <InputModal
          handleDiscard={onHandleDiscard}
          closeModal={setIsModalOpen}
        />
      ) : null}
    </div>
  );
}

export default News;
