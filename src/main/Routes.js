import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../page/home-page/HomePage";
import {HOME_PATH} from "../constants";

export const Routes = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Switch>
      <Route exact path={HOME_PATH} component={HomePage}/>
    </Switch>
  );
};

export default Routes;
