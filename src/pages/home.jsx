import React from "react";

import useHighlights from "../../hooks/query/home/useHighlights";
import useTopRated from "../../hooks/query/home/useHighlights";

import TopRated from "../components/pages/Home/toprated/TopRated";
import Highlights from "../components/pages/Home/highlights/Highlights";

function Home() {
  const highlights = useHighlights();
  const topRated = useTopRated();
  if (highlights.isLoading && topRated.isLoading) {
    return "teste";
  }
  return (
    <>
      <Highlights highlights={highlights.data} />

      <TopRated topRated={topRated.data} />
    </>
  );
}
export default Home;
