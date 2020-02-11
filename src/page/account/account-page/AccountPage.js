import React, {useEffect, useState} from "react";
import FetchDataController from "../../../component/util/fetch-data-controller/FetchDataController";
import config from "../../../config";
import {
  keyValueObjectToArray,
  readDataFromDatabase
} from "../../../main/controller/AccountController";
import ErrorMessage from "../../../component/util/error-message/ErrorMessage";
import MovieCard from "../../../component/movie-card/MovieCard";
import AccountPanel from "../../../component/account-panel/AccountPanel";
import {
  FAVOURITES_PATH,
  PATH_DETAILS,
  PATH_HOME,
  SLASH,
  USERS_PATH,
  VALUE
} from "../../../constants";
import "../../../index.css";
import GlobalStyles from "../../../main/GlobalStyles";

export const AccountPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [userData, setUserData] = useState("");
  const [favouriteMovieArray, setFavouriteMovieArray] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [firebaseAuthState, setFirebaseAuthState] = useState(null);
  const globalStyles = GlobalStyles();

  const setFormatUserData = (data) => {
    if (data) {
      setUserData(data.firstName + " " + data.lastName)
    }
  };

  const setObjectToArray = (data) => {
    setFavouriteMovieArray(keyValueObjectToArray(data.val()));
  };

  useEffect(() => {
    const path = USERS_PATH + SLASH + config.auth().currentUser.uid;
    readDataFromDatabase(path, VALUE, setFormatUserData, setIsLoaded, setIsError, true);
    readDataFromDatabase(path + FAVOURITES_PATH, VALUE, setObjectToArray, setIsLoaded, setIsError, false);

    setFirebaseAuthState(config.auth().currentUser);
  }, []);

  /*------------------------ RETURN REGION ------------------------*/
  return (
    firebaseAuthState ?
      <>
        <FetchDataController
          isLoaded={isLoaded}
          isError={isError}
          errorMessageObject={{
            message: "Error during loading",
            redirectPath: PATH_HOME,
            redirectMessage: "Refresh Page",
            styles: globalStyles.materialBlueFont,
          }}
        >
          <>
            <AccountPanel
              name={userData}
              email={firebaseAuthState.email}
              emailVerified={firebaseAuthState.emailVerified}
              lastSignInTime={firebaseAuthState.metadata.lastSignInTime}
              creationTime={firebaseAuthState.metadata.creationTime}
              backgroundColorStyles={globalStyles.materialBlueBackground}
            />

            <div className="container-fluid mt-4">
              <div className="row justify-content-center">
                {
                  favouriteMovieArray.map((it, index) => {
                    return (
                      <MovieCard
                        key={index}
                        redirectPath={PATH_DETAILS}
                        movie={it}
                        title={it.title}
                        posterPath={it.poster_path}
                        popularity={it.popularity}
                        voteAverage={it.vote_average}
                        voteCount={it.vote_count}
                        releaseDate={it.release_date}
                        gridStyles={"col-sm-5 col-md-4 col-lg-3 col-xl-2 m-3 p-0"}
                        titleStyles={globalStyles.materialBlueFont}
                      />
                    )
                  })
                }
              </div>
            </div>
          </>
        </FetchDataController>
      </>
      :
      <ErrorMessage
        message={"Error during loading"}
        redirectPath={PATH_HOME}
        redirectMessage={"Redirect To Main Page"}
        styles={globalStyles.materialBlueFont}
      />
  );
};

AccountPage.propTypes = {};

export default AccountPage;
    