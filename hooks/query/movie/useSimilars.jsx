import { useQuery } from "react-query";

import { getSimilars } from "../../../services/requests";

const useSimilars = (movie_id) => {
  const data = useQuery("similares", ()=> getSimilars(movie_id));
  return data;
};

export default useSimilars;
