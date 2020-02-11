import React from "react";
import propTypes from "prop-types";
import {Link} from "react-router-dom";
import {SessionStorageSaveItem} from "../../main/controller/StorageController";
import {API_LINK_IMAGE, CHOSEN_MOVIE} from "../../constants";
import GradeIcon from "@material-ui/icons/Grade";

export const MovieCard = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const setChosenMovie = () => {
    SessionStorageSaveItem(CHOSEN_MOVIE, props.movie)
  };

  const renderMovieProperty = (key, value) => {
    return (
      <div className="text-dark">
        <GradeIcon fontSize="inherit" className="mb-1"/>
        {key + ": "}
        <span className="text-nowrap">
          {value}
        </span>
      </div>
    );
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className={"card view overlay " + props.gridStyles}>
      <Link to={props.redirectPath} onClick={setChosenMovie}>

        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={API_LINK_IMAGE + props.posterPath}
             className="card-img-top" alt="Movie Image"
        />

        <div className="mask rgba-black-light"/>

        <div className="card-body">
          <h6 className={"font-weight-bold " + props.titleStyles}>
            {props.title}
          </h6>

          {renderMovieProperty("Popularity", props.popularity)}
          {renderMovieProperty("Average Vote", props.voteAverage)}
          {renderMovieProperty("Vote Number", props.voteCount)}
          {renderMovieProperty("Release Date", props.releaseDate)}

        </div>
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  redirectPath: propTypes.string.isRequired,
  movie: propTypes.object.isRequired,
  title: propTypes.string.isRequired,
  posterPath: propTypes.string.isRequired,
  popularity: propTypes.number,
  voteAverage: propTypes.number,
  voteCount: propTypes.number,
  releaseDate: propTypes.string,
  gridStyles: propTypes.string.isRequired,
  titleStyles: propTypes.string,
};

export default MovieCard;
    