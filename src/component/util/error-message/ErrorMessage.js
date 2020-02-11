import React from "react";
import propTypes from "prop-types";
import {Link} from "react-router-dom";
import "../../../index.css";

export const ErrorMessage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container">
      <div className="custom-margin-text text-center">
        <h1 className="font-weight-bold custom-font-size-7">
          {props.title}
        </h1>
        <h2 className="font-weight-bold">
          {props.message}
        </h2>
        <Link to={props.redirectPath} className={props.styles}>
          <h5>
            {props.redirectMessage}
          </h5>
        </Link>
      </div>
    </div>
  );
};

ErrorMessage.propTypes = {
  title: propTypes.string,
  message: propTypes.string.isRequired,
  redirectPath: propTypes.string.isRequired,
  redirectMessage: propTypes.string.isRequired,
  styles: propTypes.string,
};

export default ErrorMessage;
    