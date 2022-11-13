import { createContext, useState } from "react";

const CurrentUserContext = createContext({
  userId: 0,
  userType: 0,
  userBanStatus: 0,
  gameId: 0,
  getCurrentUser: (userId) => {},
  getCurrentUserType: (userType) => {},
  getCurrentUserBanStatus: (userBanStatus) => {},
  getCurrentGame: (gameId) => {},
});

export function CurrentUserContextProvider(props) {
  let [currentUser, setCurrentUser] = useState();
  let [currentUserType, setCurrentUserType] = useState();
  let [currentUserBanStatus, setCurrentUserBanStatus] = useState();
  let [selectedGame, setSelectedGame] = useState();

  function setUserId(userId) {
    setCurrentUser((previousUser) => {
      return (previousUser = userId);
    });
  }

  function setUserType(userType) {
    setCurrentUserType((previousUserType) => {
      return (previousUserType = userType);
    });
  }

  function setUserBanStatus(banStatus) {
    setCurrentUserBanStatus((previousBanStatus) => {
      return (previousBanStatus = banStatus);
    });
  }

  function setSelectedGameId(gameId) {
    setSelectedGame((previousGame) => {
      return (previousGame = gameId);
    });
  }

  const context = {
    userId: currentUser,
    userType: currentUserType,
    userBanStatus: currentUserBanStatus,
    gameId: selectedGame,
    getCurrentUser: setUserId,
    getCurrentUserType: setUserType,
    getCurrentUserBanStatus: setUserBanStatus,
    getCurrentGame: setSelectedGameId,
  };

  return (
    <CurrentUserContext.Provider value={context}>
      {props.children}
    </CurrentUserContext.Provider>
  );
}

export default CurrentUserContext;
