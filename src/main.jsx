import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-loading-skeleton/dist/skeleton.css";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("root")
);
