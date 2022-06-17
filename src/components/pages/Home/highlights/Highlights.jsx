import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel2";

import styles from "./highlights.module.css";

import { Container, Col, Row } from "react-bootstrap";
import ProgressBar from "./ProgressBar";

export default function Highlights({ highlights }) {

  if (!highlights) {
    return "teste";
  }
  const options = {
    items: 1,
    dots: false,
    autoplay: false,
    stagePadding: 0,
    autoplayHoverPause: true,
    loop: true,
    autoplayTimeout: 5000
  };
  return (
    <OwlCarousel options={options}
    >
      {highlights.data.results?.map((highlight) => (
        <div
          key={highlight.id}
          className={styles.background}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${window.screen.width < 500 ? highlight.poster_path : highlight.backdrop_path})`,
          }}
        >
          <div className={styles.boxText}>
            <Container fluid>
              <h1>{highlight.title}</h1>
              <p>{highlight.overview}</p>
              <Row>
                <Col className="d-flex flex-direction-column align-items-center">
                  <ProgressBar />
                </Col>
                <Col className="d-flex justify-content-end">
                  <a className={styles.btnLink}>Continue</a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      ))
      }
    </OwlCarousel >
  );
}
