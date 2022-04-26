import React from "react";
import { Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";

import Loading from "../../Loading";
import useMembers from "../../../../hooks/query/movie/useMembers";

export default function AboutMovie({ movie, members, videos }) {
  const options = {
    items: 2,
    dots: true,
    stagePadding: 15,
    loop: true,
    mergeFit: false,
    lazyLoad: true,
  };
  const optionsVideos = {
    items: 1,
    merge: true,
    loop: true,
    margin: 10,
    video: true,
    lazyLoad: true,
    center: true,
    responsive: {
      480: {
        items: 2,
      },
      600: {
        items: 4,
      },
    },
  };

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
            <div key={member.credit_id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`}
              />
            </div>
          ))}
        </OwlCarousel>
        <Container>
          <h2>Videos</h2>
          <OwlCarousel options={optionsVideos}>
            {videos.results.map((video) => (
              <div key={video.id}>
                {video.site == "YouTube" && (
                  <iframe
                    className="w-100"
                    height="250"
                    src={`https://www.youtube.com/embed/${video.key}`}
                  ></iframe>
                )}
              </div>
            ))}
          </OwlCarousel>
        </Container>
      </div>
    </>
  );
}
