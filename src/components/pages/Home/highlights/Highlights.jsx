import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import styles from "./highlights.module.css";

import useHighlights from "../../../../../hooks/query/home/useHighlights";
import { Col, Container, Row } from "react-bootstrap";

export default function Highlights() {
  const {data} = useHighlights();
  if(useHighlights().isLoading){
    return ("teste");
  }
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
      {data.data.results?.map((highlight) => (
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
                <div className={`${styles.progressBar} mt-1`}>
                  <div className="progress"></div>
                </div>
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
