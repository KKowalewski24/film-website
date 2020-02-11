import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import "./index.css";
import App from "./main/App";
import ContextProvider from "./main/controller/ContextProvider";

ReactDOM.render(
  <ContextProvider>
    <App/>
  </ContextProvider>,
  document.getElementById("root"));

serviceWorker.unregister();
