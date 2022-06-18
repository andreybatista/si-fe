import React from "react";
import OwlCarousel from "react-owl-carousel2";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

import styles from "./movielist.module.css";
import { Col, Container, Row } from "react-bootstrap";
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
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 3
      },
      700: {
        items: 4
      },
      900: {
        items: 5
      },
      1400: {
        items: 6
      },
      1600: {
        items: 7
      },
      1900: {
        items: 8
      },
      2100: {
        items: 9
      },
      2400: {
        items: 10
      },
      2700: {
        items: 11
      },
      3000: {
        items: 12
      }
    }
  };
  return (
    <div className={styles.carouselMovies + " movieSlideList"}>
      <Container fluid>
        <Row>
          <Col>
            <h2 className={styles.title}>{title}</h2>
          </Col>
        </Row>
      </Container>
      <OwlCarousel options={options}>
        {movies.data.results?.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            key={movie.id}
            className={styles.boxPoster}
          >
            <div className={'position-relative ' + styles.container}>
              <img alt={movie.title} style={{ objectFit: 'cover' }} width={'100%'} height={window.screen.width < 500 ? 250 : 350} src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
              <div className={styles.boxInfo}>
                <CircularProgressbar
                  value={movie.vote_average.toFixed(1)}
                  text={`${movie.vote_average.toFixed(1)}`}
                  maxValue={10}
                  className={styles.CircularProgressbar}
                  background={true}
                  styles={buildStyles({
                    pathTransitionDuration: 0.5,
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
          </Link>
        ))}
      </OwlCarousel>
    </div>
  );
}
