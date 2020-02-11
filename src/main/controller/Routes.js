import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../../page/home-page/HomePage";
import {PATH_HOME} from "../../constants";

export const Routes = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Switch>
      <Route exact path={PATH_HOME} component={HomePage}/>
    </Switch>
  );
};

export default Routes;
