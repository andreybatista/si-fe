import React from "react";
import OwlCarousel from "react-owl-carousel2";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

import styles from "./movielist.module.css";

export default function MovieList({ movies }) {
  if (!movies) {
    return "teste";
  }
  const options = {
    items: 2,
    dots: true,
    stagePadding: 40,
    loop: true,
    mergeFit: false,
  };
  return (
    <div className={styles.carouselMovies + " movieSlideList"}>
      <OwlCarousel id="topRated" options={options}>
        {movies.data.results?.map((movie) => (
          <div key={movie.id} className={styles.boxPoster}>
            <div className={styles.container}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
                }}
              >
                <CircularProgressbar
                  value={movie.vote_average}
                  text={`${movie.vote_average}`}
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
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}
