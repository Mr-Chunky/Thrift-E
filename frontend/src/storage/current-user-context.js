import { createContext, useState } from "react";

const CurrentUserContext = createContext({
  userId: 0,
  getCurrentUser: (userId) => {},
});

export function CurrentUserContextProvider(props) {
  let [currentUser, setCurrentUser] = useState();

  function setUserId(userId) {
    setCurrentUser((previousUser) => {
      return (previousUser = userId);
    });
  }

  const context = {
    userId: currentUser,
    getCurrentUser: setUserId,
  };

  return (
    <CurrentUserContext.Provider value={context}>
      {props.children}
    </CurrentUserContext.Provider>
  );
}

export default CurrentUserContext;
