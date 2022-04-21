import React, { useEffect, useState } from "react";

import useHighlights from "../../hooks/query/home/useHighlights";
import useTopRated from "../../hooks/query/home/useTopRated";

import Highlights from "../components/pages/Home/highlights/Highlights";
import MovieList from "../components/pages/Home/movieList/MovieList";
import usePopular from "../../hooks/query/home/usePopular";
import Loading from "../components/Loading";

function Home() {
  const highlights = useHighlights();
  const topRated = useTopRated();
  const popular = usePopular();
  useEffect(() => {
    $(window).scroll(function () {
      if ($("#topRated").offset().top > $(window).scrollTop()) {
        $("#topRated").addClass("hidden");
      }
    });
  }, []);

  console.log(topRated.isLoading);

 // if (highlights.isLoading && topRated.isLoading) {
    return <Loading/>;
  //}

  return (
    <>
      <Highlights highlights={highlights.data} />

      <MovieList movies={popular.data} />

      <MovieList movies={topRated.data} />
    </>
  );
}
export default Home;
