import { createContext, useState } from "react";

const CurrentUserContext = createContext({
  userId: 0,
  gameId: 0,
  getCurrentUser: (userId) => {},
  getCurrentGame: (gameId) => {},
});

export function CurrentUserContextProvider(props) {
  let [currentUser, setCurrentUser] = useState();
  let [selectedGame, setSelectedGame] = useState();

  function setUserId(userId) {
    setCurrentUser((previousUser) => {
      return (previousUser = userId);
    });
  }

  function setSelectedGameId(gameId) {
    setSelectedGame((previousGame) => {
      return (previousGame = gameId);
    });
  }

  const context = {
    userId: currentUser,
    gameId: selectedGame,
    getCurrentUser: setUserId,
    getCurrentGame: setSelectedGame,
  };

  return (
    <CurrentUserContext.Provider value={context}>
      {props.children}
    </CurrentUserContext.Provider>
  );
}

export default CurrentUserContext;
