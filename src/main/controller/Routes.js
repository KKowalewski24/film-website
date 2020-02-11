import React, {useContext} from "react";
import {Route, Switch} from "react-router-dom";
import {SessionStorageGetItem} from "./StorageController";
import PrivateRoute from "../../component/util/private-route/PrivateRoute";
import {AppContext} from "./ContextProvider";
import SearchPage from "../../page/basic-functionality/search-page/SearchPage";
import AboutPage from "../../page/util/about-page/AboutPage";
import ContactPage from "../../page/util/contact-page/ContactPage";
import ResultPage from "../../page/basic-functionality/result-page/ResultPage";
import ErrorPage from "../../page/util/error-page/ErrorPage";
import LoginPage from "../../page/account/login-page/LoginPage";
import RegisterPage from "../../page/account/register-page/RegisterPage";
import HomePage from "../../page/basic-functionality/home-page/HomePage";
import DetailsPage from "../../page/basic-functionality/details-page/DetailsPage";
import AccountPage from "../../page/account/account-page/AccountPage";
import {
  PATH_ABOUT,
  PATH_ACCOUNT,
  PATH_CONTACT,
  PATH_DETAILS,
  PATH_HOME,
  PATH_LOGIN,
  PATH_REGISTER,
  PATH_RESULT,
  PATH_SEARCH,
  SEARCHED_MOVIE_DATA
} from "../../constants";

export const Routes = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {isUserLoggedIn} = useContext(AppContext);

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Switch>
      <PrivateRoute
        exact path={PATH_LOGIN} component={LoginPage}
        redirectPath={PATH_ACCOUNT} privacyCondition={!isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_REGISTER} component={RegisterPage}
        redirectPath={PATH_LOGIN} privacyCondition={!isUserLoggedIn}
      />
      <PrivateRoute
        exact path={PATH_ACCOUNT} component={AccountPage}
        redirectPath={PATH_LOGIN} privacyCondition={isUserLoggedIn}
      />

      <Route exact path={PATH_HOME} component={HomePage}/>
      <Route exact path={PATH_DETAILS} component={DetailsPage}/>
      <Route exact path={PATH_SEARCH} component={SearchPage}/>
      <PrivateRoute
        exact path={PATH_RESULT} component={ResultPage}
        redirectPath={PATH_SEARCH} privacyCondition={SessionStorageGetItem(SEARCHED_MOVIE_DATA)}
      />

      <Route exact path={PATH_ABOUT} component={AboutPage}/>
      <Route exact path={PATH_CONTACT} component={ContactPage}/>
      <Route component={ErrorPage}/>
    </Switch>
  );
};

export default Routes;
