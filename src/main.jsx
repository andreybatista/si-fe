import React from "react";
import ReactDOM from "react-dom";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";

import "react-owl-carousel2/src/owl.carousel.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-circular-progressbar/dist/styles.css";

// const root = ReactDOMClient.createRoot(document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
