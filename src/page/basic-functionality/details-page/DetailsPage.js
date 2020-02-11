import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import MovieDetails from "../../../component/movie-details/MovieDetails";
import {SessionStorageGetItem} from "../../../main/controller/StorageController";
import FetchDataController from "../../../component/util/fetch-data-controller/FetchDataController";
import {AppContext} from "../../../main/controller/ContextProvider";
import {addFavouriteMovie, removeFavouriteMovie} from "../../../main/controller/AccountController";
import {API_LINK_DETAILS_MOVIE, CHOSEN_MOVIE, LANG_EN_US, PATH_HOME} from "../../../constants";
import GlobalStyles from "../../../main/GlobalStyles";
import ErrorMessage from "../../../component/util/error-message/ErrorMessage";

export const DetailsPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const {isUserLoggedIn} = useContext(AppContext);
  const globalStyles = GlobalStyles();

  const chosenMovieStorage = SessionStorageGetItem(CHOSEN_MOVIE);

  useEffect(() => {
    !!chosenMovieStorage && axios.get(API_LINK_DETAILS_MOVIE + chosenMovieStorage.id, {
      params: {
        api_key: process.env.REACT_APP_API_ACCESS,
        language: LANG_EN_US,
      }
    })
      .then((res) => {
        setMovieDetails(res.data);
        setIsLoaded(true);
        setIsError(false);
      })
      .catch((err) => {
        setIsLoaded(true);
        setIsError(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*------------------------ RETURN REGION ------------------------*/
  return (
    !!chosenMovieStorage ?
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
        <div className="container">
          <MovieDetails
            movie={SessionStorageGetItem(CHOSEN_MOVIE)}
            posterPath={movieDetails.poster_path}
            title={movieDetails.title}
            genres={movieDetails.genres}
            productionCountries={movieDetails.production_countries}
            productionCompanies={movieDetails.production_companies}
            popularity={movieDetails.popularity}
            voteAverage={movieDetails.vote_average}
            voteCount={movieDetails.vote_count}
            releaseDate={movieDetails.release_date}
            overview={movieDetails.overview}
            isUserLoggedIn={isUserLoggedIn}
            addFavouriteMovie={addFavouriteMovie}
            removeFavouriteMovie={removeFavouriteMovie}
            titleStyles={globalStyles.materialBlueFont}
            badgeStyles={globalStyles.materialBlueBackground}
          />
        </div>
      </FetchDataController>
      :
      <ErrorMessage
        message={"Error during loading"}
        redirectPath={PATH_HOME}
        redirectMessage={"Redirect To Main Page"}
        styles={globalStyles.materialBlueFont}
      />
  );
};

DetailsPage.propTypes = {};

export default DetailsPage;
    