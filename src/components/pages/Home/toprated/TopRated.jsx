import React, { useEffect, useState } from "react";

import OwlCarousel from "react-owl-carousel";


import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import api from "../../../../../services/api";



export default function TopRated() {
  const [movies, setMovies] = useState([]);

    api.get("movie/top_rated").then(({ data }) => {
      setMovies(data.results);
    });

  return (
    <OwlCarousel className="owl-theme" items={2}>
      {movies.map((movie) => (
        <div className="item" key={movie.id}>
          <img height={350} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} width={250} />
        </div>
      ))}
    </OwlCarousel>
  );
}
