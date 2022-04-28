import React from "react";
import OwlCarousel from "react-owl-carousel2";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

import styles from "./movielist.module.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function MovieList({ movies, title }) {
  if (!movies) {
    return "teste";
  }
  const options = {
    items: 2,
    dots: true,
    stagePadding: 15,
    loop: true,
    mergeFit: false,
  };
  return (
    <div className={styles.carouselMovies + " movieSlideList"}>
      <Container>
        <h2 className={styles.title}>{title}</h2>
      </Container>
      <OwlCarousel options={options}>
        {movies.data.results?.map((movie) => (
          <a 
            href={`/movie/${movie.id}`}
            key={movie.id}
            className={styles.boxPoster}
          >
            <div className={styles.container}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
                }}
              >
                <CircularProgressbar
                  value={movie.vote_average.toFixed(1)}
                  text={`${movie.vote_average.toFixed(1)}`}
                  maxValue={10}
                  className={styles.CircularProgressbar}
                  background={true}
                  styles={buildStyles({
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                    // Colors
                    textSize: "30px",
                    path: {
                      stroke: `rgba(62, 152, 199, ${3 / 100})`,
                      strokeLinecap: "butt",
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      transform: "rotate(0.25turn)",
                      transformOrigin: "center center",
                      pathTransitionDuration: 0.5,
                    },
                    trail: {
                      stroke: "#d6d6d6",
                      strokeLinecap: "butt",
                      transform: "rotate(0.25turn)",
                      transformOrigin: "center center",
                    },
                    background: {
                      fill: "#f88",
                    },
                  })}
                />
              </div>
            </div>
          </a>
        ))}
      </OwlCarousel>
    </div>
  );
}


