import React, {useEffect, useState} from "react";
import axios from "axios";
import {API_LINK_POPULAR_MOVIE, LANG_EN_US, PATH_DETAILS, PATH_HOME} from "../../../constants";
import FetchDataController from "../../../component/util/fetch-data-controller/FetchDataController";
import MovieCard from "../../../component/movie-card/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import GlobalStyles from "../../../main/GlobalStyles";
import LinearProgress from "@material-ui/core/LinearProgress";

export const HomePage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [movieArray, setMovieArray] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const globalStyles = GlobalStyles();

  const fetchData = () => {
    axios.get(API_LINK_POPULAR_MOVIE, {
      params: {
        api_key: process.env.REACT_APP_API_ACCESS,
        language: LANG_EN_US,
        page: pageNumber + 1,
      }
    })
      .then((res) => {
        setMovieArray(movieArray.concat(res.data.results));
        setPageNumber(res.data.page);
        setIsLoaded(true);
        setIsError(false);
      })
      .catch((err) => {
        setIsLoaded(true);
        setIsError(true);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <InfiniteScroll
      pageStart={0}
      next={fetchData}
      hasMore={true}
      dataLength={movieArray.length}
      loader={pageNumber !== 0 ? <LinearProgress variant="query" color="secondary"/> : null}
    >
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
        <div className="container-fluid">
          <div className="row justify-content-center">
            {
              movieArray.map((it, index) => {
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
      </FetchDataController>
    </InfiniteScroll>
  );
};

HomePage.propTypes = {};

export default HomePage;
