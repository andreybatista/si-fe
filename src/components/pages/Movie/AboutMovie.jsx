import React from "react";
import { Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";

import Members from "./members";

export default function AboutMovie({ movie }) {
  return (
    <>
      <div className="aboutMovie">
        <Container>
          <h1>{movie.title}</h1>
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}</p>
        </Container>
        <Members id={movie.id} />
      </div>
    </>
  );
}
