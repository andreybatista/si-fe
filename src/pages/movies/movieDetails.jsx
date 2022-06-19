import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useMembers from "../../../hooks/query/movie/useMembers";
import useMovieDetails from "../../../hooks/query/movie/useMovieDetails";
import useSimilars from "../../../hooks/query/movie/useSimilars";
import useVideos from "../../../hooks/query/movie/useVideos";

import Loading from "../../components/Loading";
import AboutMovie from "../../components/pages/Movie/AboutMovie";
import MainImage from "../../components/pages/Movie/MainImage";

function MovieDetails() {
  let params = useParams();
  console.log(params.movieId);

  const movieDetails = useMovieDetails(params.movieId);
  const members = useMembers(params.movieId);
  const similars = useSimilars(params.movieId);
  const videos = useVideos(params.movieId);

  // const [movieDetails, setMovieDetails] = useState();
  // const [members, setMembers] = useState();
  // const [similars, setSimilars] = useState();
  // const [videos, setVideos] = useState();

  useEffect(() => {
    console.log('mudou', params.movieId)
  }, params.movieId);



  if (
    movieDetails.isLoading ||
    members.isLoading ||
    similars.isLoading ||
    videos.isLoading
  ) {
    return <Loading />;
  }
  return (
    <>
      <MainImage movie={movieDetails.data} />
      <AboutMovie
        movie={movieDetails.data}
        members={members.data}
        videos={videos.data}
        similars={similars}
      />
    </>
  );
}
export default MovieDetails;
