import React from "react";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";

import "react-owl-carousel2/src/owl.carousel.css";
import "react-loading-skeleton/dist/skeleton.css";
import "react-circular-progressbar/dist/styles.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";

import Movie from "./pages/movie";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route exact path="/movie/:movie_id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);
