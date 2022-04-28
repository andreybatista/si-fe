import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import * as ReactDOMClient from "react-dom/client";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Movie from "./pages/movie";


import "react-owl-carousel2/src/owl.carousel.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-circular-progressbar/dist/styles.css";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/movie/:movie_id" index element={<Movie />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("root")
);

// const root = ReactDOMClient.createRoot(document.getElementById("root"));
// root.render(<App />);
