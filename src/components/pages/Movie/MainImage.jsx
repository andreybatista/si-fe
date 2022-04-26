import React from "react";

export default function MainImage({ movie }) {

  return (
   <>
   <div
   className="mainImage"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      ></div>
   </>
  );
}
