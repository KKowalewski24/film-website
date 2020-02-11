import React from "react";
import propTypes from "prop-types";
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = ({privacyCondition, redirectPath, component: Component, ...rest}) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <Route
      {...rest}
      render={(it) =>
        !!privacyCondition ? <Component {...it}/> : <Redirect to={redirectPath}/>
      }
    />
  );
};

PrivateRoute.propTypes = {
  exact: propTypes.bool.isRequired,
  path: propTypes.string.isRequired,
  component: propTypes.func.isRequired,
  privacyCondition: propTypes.any,
  redirectPath: propTypes.string.isRequired,
};

export default PrivateRoute;
