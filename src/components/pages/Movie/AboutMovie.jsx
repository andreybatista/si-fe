import React from "react";
import { Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";

import Loading from "../../Loading";
import useMembers from "../../../../hooks/query/movie/useMembers";

import Members from "./members";

export default function AboutMovie({ movie }) {
  const members = useMembers(movie.id);

  if (members.isLoading) {
    return <Loading />;
  }
  
  console.log(members.data.cast);

  return (
    <>
      <div className="aboutMovie">
        <Container>
          <h1>{movie.title}</h1>
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}</p>
        </Container>
      </div>
    </>
  );
}
