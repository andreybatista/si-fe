import React from "react";
import { Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";

import Loading from "../../Loading";
import useMembers from "../../../../hooks/query/movie/useMembers";

export default function AboutMovie({ movie, members }) {
  const options = {
    items: 2,
    dots: true,
    stagePadding: 15,
    loop: true,
    mergeFit: false,
  };
 
  return (
    <>
      <div className="aboutMovie">
        <Container>
          <h1>{movie.title}</h1>
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}</p>
        </Container>
        <OwlCarousel options={options}>
          {members.cast.map((member) => (
            <div key={member.credit_id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${member.profile_path}`}
              />
            </div>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
}
