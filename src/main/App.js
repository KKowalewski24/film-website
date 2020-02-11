import React from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from "./controller/Routes";

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
    