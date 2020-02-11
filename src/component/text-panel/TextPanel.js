import React from "react";
import propTypes from "prop-types";
import "../../index.css";

export const TextPanel = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className={"card mt-5 " + props.backgroundColorStyles}>
      <div className="card-body">
        <h3 className="card-title text-center mt-2 mb-4">
          {props.title}
        </h3>
        <h5 className={props.isContentCentered ?
          "text-center custom-text-pre-wrap" : "text-justify custom-text-pre-wrap"}>
          {props.content}
        </h5>
      </div>
    </div>
  );
};

TextPanel.propTypes = {
  title: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
  backgroundColorStyles: propTypes.string.isRequired,
  isContentCentered: propTypes.bool,
};

export default TextPanel;
    