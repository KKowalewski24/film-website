import React, {useContext, useState} from "react";
import {HashRouter} from "react-router-dom";
import Routes from "./controller/Routes";
import {AppContext} from "./controller/ContextProvider";
import {logoutUser} from "./controller/AccountController";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import Navbar from "../component/navbar/Navbar";
import {ThemeProvider} from "@material-ui/styles";
import "../index.css";

export const App = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const [isDarkMode, setIsDarkMode] = useState(true);
  const {isUserLoggedIn} = useContext(AppContext);

  const darkTheme = createMuiTheme({
    palette: {
      type: isDarkMode ? "dark" : "light",
      primary: {
        main: "#2196f3",
      },
      grey: {
        main: "#424242",
        light: "#616161",
      },
    },
  });

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <HashRouter>
        <Navbar
          msg="Film Website"
          isDarkMode={isDarkMode}
          handleDarkMode={handleDarkMode}
          isUserLoggedIn={isUserLoggedIn}
          logout={logoutUser}
        >
          <Routes/>
        </Navbar>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
    