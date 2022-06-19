import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

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
        <Route index element={<Home />} />
        <Route path="movie/:movie_id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("root")
);
