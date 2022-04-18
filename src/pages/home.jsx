import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import TopRated from "../components/pages/Home/toprated/TopRated";
import Highlights from "../components/pages/Home/highlights/Highlights";

function Home() {
  return (
    <>
      <Highlights/>

      {/* <TopRated /> */}
    </>
  );
}
export default Home;
