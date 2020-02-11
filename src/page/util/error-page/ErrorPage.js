import React from "react";
import {ErrorMessage} from "../../../component/util/error-message/ErrorMessage";
import {PATH_HOME} from "../../../constants";
import GlobalStyles from "../../../main/GlobalStyles";

export const ErrorPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const globalStyles = GlobalStyles();

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <ErrorMessage
      title={"404"}
      message={"Page Not Found"}
      redirectPath={PATH_HOME}
      redirectMessage={"Go back to home page"}
      styles={globalStyles.materialBlueFont}
    />
  );
};

ErrorPage.propTypes = {};

export default ErrorPage;
    