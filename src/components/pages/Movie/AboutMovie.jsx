import React from "react";
import { Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import YouTube from "react-youtube";

import Loading from "../../Loading";
import useMembers from "../../../../hooks/query/movie/useMembers";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import MovieList from "../Home/movieList/MovieList.jsx";

export default function AboutMovie({ movie, members, similars }) {

  const options = {
    items: 2,
    dots: true,
    loop: true,
    lazyLoad: true,
  };
  if (
    !movie ||
    !members ||
    !similars ||
    !similars
  ) {
    return <Loading />;
  }
  return (
    <>
      <div className="aboutMovie">
        <Container>
          <h1>{movie.title}</h1>
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}</p>

          <h2>Elenco</h2>
        </Container>
        <OwlCarousel options={options}>
          {members.cast.map((member) => (
            <div key={member.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`}
              />
            </div>
          ))}
        </OwlCarousel>

        <MovieList movies={similars} title="Filmes Similares" />
      </div>
    </>
  );
}
