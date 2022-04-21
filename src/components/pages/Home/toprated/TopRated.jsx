import React from "react";

import OwlCarousel from "react-owl-carousel";

export default function TopRated({ topRated }) {
  return (
    <OwlCarousel className="owl-theme" items={2}>
      {topRated.data.results?.map((destaque) => (
        <div className="item" key={destaque.id}>
          <img
            height={350}
            src={`https://image.tmdb.org/t/p/original/${destaque.poster_path}`}
            width={250}
          />
        </div>
      ))}
    </OwlCarousel>
  );
}
