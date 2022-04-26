import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";

import styles from "./highlights.module.css";

import { Col, Row } from "react-bootstrap";
import ProgressBar from "./ProgressBar";

export default function Highlights({ highlights }) {

  // if (!highlights) {
  //   return "teste";
  // }
  return (
    <OwlCarousel
      className="owl-theme"
      loop
      items={1}
      dots={false}
      autoplay={true}
      autoplayHoverPause={true}
      autoplayTimeout={5000}
    >
      {highlights.data.results?.map((highlight) => (
        <div
          key={highlight.id}
          className={styles.background}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${highlight.poster_path})`,
          }}
        >
          <div className={styles.boxText}>
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
          </div>
        </div>
      ))}
    </OwlCarousel>
  );
}
