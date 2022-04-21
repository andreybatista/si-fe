import React from "react";

import OwlCarousel from "react-owl-carousel";

export default function MovieList({ movies }) {
  if (!movies) {
    return "teste";
  }
  return (
    <OwlCarousel id="topRated" className="owl-theme" items={2}>
      {movies.data.results?.map((movie) => (
        <div className="item" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            width={250}
          />
          <div className="punctuation">{movie.vote_average}</div>
        </div>
      ))}
    </OwlCarousel>
  );
}
