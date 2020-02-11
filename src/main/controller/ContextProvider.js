import React, {createContext, useEffect, useState} from "react";
import config from "../../config";

export const AppContext = createContext(null);

export const ContextProvider = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [firebaseAuthState, setFirebaseAuthState] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    config.auth().onAuthStateChanged(setFirebaseAuthState);
    firebaseAuthState ? setIsUserLoggedIn(true) : setIsUserLoggedIn(false);
  }, [firebaseAuthState]);

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <AppContext.Provider value={{isUserLoggedIn}}>
      {props.children}
    </AppContext.Provider>
  );
};

ContextProvider.propTypes = {};

export default ContextProvider;
