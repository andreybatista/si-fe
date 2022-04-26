import React from "react";
import { Container } from "react-bootstrap";

export default function AboutMovie({ movie }) {
  console.log(movie);
  return (
    <>
      <div className="aboutMovie">
        <Container>
          <h1>{movie.title}</h1>
          <h2>
            {movie.tagline}
          </h2>
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}</p>
        </Container>
      </div>
    </>
  );
}
