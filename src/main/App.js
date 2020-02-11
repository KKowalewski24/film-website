import React from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from "./Routes";

export const App = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
};

export default App;
    