import React from "react";
import { useParams } from "react-router-dom";

import useMovieDetails from "../../hooks/query/movie/useMovieDetails";

import Loading from "../components/Loading";
import AboutMovie from "../components/pages/Movie/AboutMovie";
import MainImage from "../components/pages/Movie/MainImage";

function Movie() {
  const { movie_id } = useParams();
  const movieDetails = useMovieDetails(movie_id);

  if (movieDetails.isLoading) {
    return <Loading />;
  }

  return (
    <>
      <MainImage movie={movieDetails.data} />
      <AboutMovie movie={movieDetails.data} />
    </>
  );
}
export default Movie;
