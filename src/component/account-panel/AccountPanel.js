import React from "react";
import propTypes from "prop-types";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import "../../index.css";

export const AccountPanel = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const renderDataElement = (key, value) => {
    return (
      <>
        <div className="px-5 text-justify mt-2">
          <h6>
            {key + ": " + value}
          </h6>
        </div>
        <div className="px-4">
          <hr className="border-white m-1"/>
        </div>
      </>
    );
  };

  const renderData = () => {
    return (
      <div className="col-sm-8">
        <h4 className="card-title text-center">
          {props.name}
        </h4>
        {renderDataElement("Email", props.email)}
        {renderDataElement("Email Verified", props.emailVerified)}
        {renderDataElement("Last sign in", props.lastSignInTime)}
        {renderDataElement("Registration Date", props.creationTime)}
      </div>
    )
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container custom-container-lg text-white">
      <div className={"card mt-5 " + props.backgroundColorStyles}>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4 custom-font-size-9">
              <AccountBoxIcon fontSize="inherit"/>
            </div>

            {renderData()}
          </div>
        </div>
      </div>
    </div>
  );
};

AccountPanel.propTypes = {
  name: propTypes.string,
  email: propTypes.string,
  emailVerified: propTypes.bool,
  lastSignInTime: propTypes.string,
  creationTime: propTypes.string,
  backgroundColorStyles: propTypes.string.isRequired
};

export default AccountPanel;
    