import { createContext, useState } from "react";

const CurrentUserContext = createContext({
  userId: 0,
  userSalt: 0,
  gameId: 0,
  getCurrentUser: (userId) => {},
  getCurrentUserSalt: (salt) => {},
  getCurrentGame: (gameId) => {},
});

export function CurrentUserContextProvider(props) {
  let [currentUser, setCurrentUser] = useState();
  let [userSalt, setUserSalt] = useState();
  let [selectedGame, setSelectedGame] = useState();

  function setUserId(userId) {
    setCurrentUser((previousUser) => {
      return (previousUser = userId);
    });
  }

  function setSalt(salt) {
    setUserSalt((previousSalt) => {
      return (previousSalt = salt);
    });
  }

  function setSelectedGameId(gameId) {
    setSelectedGame((previousGame) => {
      return (previousGame = gameId);
    });
  }

  const context = {
    userId: currentUser,
    userSalt: userSalt,
    gameId: selectedGame,
    getCurrentUser: setUserId,
    getCurrentUserSalt: setSalt,
    getCurrentGame: setSelectedGameId,
  };

  return (
    <CurrentUserContext.Provider value={context}>
      {props.children}
    </CurrentUserContext.Provider>
  );
}

export default CurrentUserContext;
