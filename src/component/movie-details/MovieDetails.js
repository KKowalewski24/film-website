import React from "react";
import propTypes from "prop-types";
import {API_LINK_IMAGE} from "../../constants";
import Button from "@material-ui/core/Button";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "../../index.css";

export const MovieDetails = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const renderSectionTitle = (title) => {
    return (
      <h6 className="font-weight-bold text-center">
        {title}
      </h6>
    );
  };

  const renderBadge = (array) => {
    return (
      array && array.map((it, index) => {
        return (
          <span key={index} className={"badge custom-font-size-0-8 mr-1 mb-2 " + props.badgeStyles}>
          {it.name}
        </span>
        );
      })
    );
  };

  const renderCell = (title, value) => {
    return (
      <div className="col-6 col-sm-3 col-md-6 col-lg-3 text-center">
        <div className={"text-nowrap " + props.titleStyles}>
          {title}
        </div>
        <div>
          {value}
        </div>
      </div>
    );
  };

  const renderGenres = () => {
    return (
      <div className="border-bottom p-3">
        {renderSectionTitle(props.genres.length > 1 ? "Genres" : "Genre")}
        {renderBadge(props.genres)}
      </div>
    );
  };

  const renderCountries = () => {
    return (
      <div className="border-bottom p-3">
        {
          renderSectionTitle(props.productionCountries.length > 1 ?
            "Production Countries" : "Production Country")
        }
        {renderBadge(props.productionCountries)}
      </div>
    );
  };

  const renderCompanies = () => {
    return (
      <div className="border-bottom p-3">
        {
          renderSectionTitle(props.productionCompanies.length > 1 ?
            "Production Companies" : "Production Company")
        }
        {renderBadge(props.productionCompanies)}
      </div>
    );
  };

  const renderStatistics = () => {
    return (
      <div className="border-bottom p-3">
        {renderSectionTitle("Statistics")}
        <div className="row">
          {renderCell("Popularity", props.popularity)}
          {renderCell("Average Vote", props.voteAverage)}
          {renderCell("Vote Number", props.voteCount)}
          {renderCell("Release Date", props.releaseDate)}
        </div>
      </div>
    );
  };

  const renderDescription = () => {
    return (
      <div className="border-bottom p-3">
        {renderSectionTitle("Description")}
        <div className="text-justify">
          {props.overview}
        </div>
      </div>
    );
  };

  const renderFavouriteButtons = () => {
    return (
      <>
        <div className="d-flex justify-content-center pt-3 pb-1">
          <Button className="mt-1" variant="contained" color="primary"
                  onClick={() => props.addFavouriteMovie(props.movie)}>
            <StarBorderIcon/> &nbsp; Add To Favourites
          </Button>
        </div>

        <div className="d-flex justify-content-center pt-1 pb-3">
          <Button className="mt-1" variant="contained" color="secondary"
                  onClick={() => props.removeFavouriteMovie(props.movie)}>
            <StarBorderIcon/> &nbsp; Remove From Favourites
          </Button>
        </div>
      </>
    );
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="row mt-5">
      <div className="col-md-6 col-lg-4 mb-4">
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={API_LINK_IMAGE + props.posterPath}
             className="card-img-top" alt="Movie Image"
        />
      </div>

      <div className="col-xs-6 col-lg-8 border rounded-lg custom-border mb-4 p-0">
        <div className="border-bottom p-3 m-0">
          <h4 className={"text-center font-weight-bold " + props.titleStyles}>
            {props.title}
          </h4>
        </div>

        {renderGenres()}
        {renderCountries()}
        {renderCompanies()}
        {renderStatistics()}
        {renderDescription()}

        {props.isUserLoggedIn ? renderFavouriteButtons() : null}
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: propTypes.object.isRequired,
  title: propTypes.string,
  genres: propTypes.array,
  productionCountries: propTypes.array,
  productionCompanies: propTypes.array,
  posterPath: propTypes.string,
  popularity: propTypes.number,
  voteAverage: propTypes.number,
  voteCount: propTypes.number,
  releaseDate: propTypes.string,
  overview: propTypes.string,
  isUserLoggedIn: propTypes.bool.isRequired,
  addFavouriteMovie: propTypes.func.isRequired,
  removeFavouriteMovie: propTypes.func.isRequired,
  titleStyles: propTypes.string,
  badgeStyles: propTypes.string,
};

export default MovieDetails;
    