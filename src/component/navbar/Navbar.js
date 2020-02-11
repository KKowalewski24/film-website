import React from "react";
import propTypes from "prop-types";
import {Link} from "react-router-dom";
import {
  PATH_ABOUT,
  PATH_ACCOUNT,
  PATH_CONTACT,
  PATH_HOME,
  PATH_LOGIN,
  PATH_SEARCH
} from "../../constants";
import {IconButton, Switch, Typography} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import InfoIcon from "@material-ui/icons/Info";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "../../index.css";
import GlobalStyles from "../../main/GlobalStyles";

export const Navbar = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const globalStyles = GlobalStyles();

  const renderThemeToggler = () => {
    return (
      <div className="mr-auto">
        <WbSunnyIcon/>
        <Switch
          checked={props.isDarkMode}
          onChange={props.handleDarkMode}
          color="default"
        />
        <NightsStayIcon/>
      </div>
    );
  };

  const renderNavItemList = () => {
    return (
      <div className="collapse navbar-collapse" id="navList">
        <div className="navbar-nav ml-auto text-center">

          <Link to={PATH_SEARCH} className="text-white">
            <IconButton color="inherit">
              <SearchIcon/>
            </IconButton>
          </Link>

          <Link to={PATH_ABOUT} className="text-white">
            <IconButton color="inherit">
              <InfoIcon/>
            </IconButton>
          </Link>

          <Link to={PATH_CONTACT} className="text-white">
            <IconButton color="inherit">
              <MailIcon/>
            </IconButton>
          </Link>

          <Link to={props.isUserLoggedIn ? PATH_ACCOUNT : PATH_LOGIN} className="text-white">
            <IconButton color="inherit">
              <AccountCircle/>
            </IconButton>
          </Link>

          <div onClick={props.logout}>
            {
              props.isUserLoggedIn ?
                <IconButton color="inherit">
                  <ExitToAppIcon/>
                </IconButton>
                : null
            }
          </div>

        </div>
      </div>
    );
  };

  const renderContent = () => {
    return (
      props.children
    );
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <>
      <nav className={"navbar navbar-expand-lg navbar-dark text-white "
      + globalStyles.materialBlueBackground}>
        <Link to={PATH_HOME} className="navbar-brand">
          <Typography className="mr-3" variant="h6" noWrap>
            {props.msg}
          </Typography>
        </Link>

        {renderThemeToggler()}

        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navList" aria-controls="navList" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {renderNavItemList()}
      </nav>

      {renderContent()}
    </>
  );
};

Navbar.propTypes = {
  msg: propTypes.string.isRequired,
  isDarkMode: propTypes.bool.isRequired,
  handleDarkMode: propTypes.func.isRequired,
  isUserLoggedIn: propTypes.bool,
  logout: propTypes.func.isRequired,
};

export default Navbar;
