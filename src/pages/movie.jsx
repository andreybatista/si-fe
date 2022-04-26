import React from "react";
import { useParams } from "react-router-dom";

import useMembers from "../../hooks/query/movie/useMembers";
import useMovieDetails from "../../hooks/query/movie/useMovieDetails";

import Loading from "../components/Loading";
import AboutMovie from "../components/pages/Movie/AboutMovie";
import MainImage from "../components/pages/Movie/MainImage";

function Movie() {
  const { movie_id } = useParams();
  const movieDetails = useMovieDetails(movie_id);
  const members = useMembers(movie_id);

  if (movieDetails.isLoading || members.isLoading) {
    return <Loading />;
  }

  return (
    <>
      <MainImage movie={movieDetails.data} />
      <AboutMovie movie={movieDetails.data} members={members.data} />
    </>
  );
}
export default Movie;
