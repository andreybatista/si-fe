import React from "react";
import { Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel2";
import YouTube from "react-youtube";

import Loading from "../../Loading";
import useMembers from "../../../../hooks/query/movie/useMembers";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import MovieList from "../Home/movieList/MovieList";

export default function AboutMovie({ movie, members, videos, similars }) {
  const options = {
    items: 2,
    dots: true,
    stagePadding: 15,
    loop: true,
    mergeFit: false,
    lazyLoad: true,
  };
  const carouselVideos = {
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
  const optionsVideo = {
    height: "300",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      autohide: 1,
      wmode: "opaque",
      origin: "http://localhost:3000/",
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
            <div key={member.cast_id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${member.profile_path}`}
              />
            </div>
          ))}
        </OwlCarousel>
        {/* <Container>
          <h2>Videos</h2>
          <OwlCarousel options={carouselVideos}>
            {videos.results.map((video) => (
              <div key={video.id}>
                {video.site == "YouTube" && (
                  <YouTube videoId={video.key} opts={optionsVideo} />
                )}
              </div>
            ))}
          </OwlCarousel>
        </Container> */}

        <MovieList movies={similars} title="Filmes Similares" />
      </div>
    </>
  );
}
