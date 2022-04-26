import { useQuery } from "react-query";

import { getMovieDetails } from "../../../services/requests";

const useMovieDetails = (movie_id) => {
  const data = useQuery("details", ()=> getMovieDetails(movie_id));
  return data;
};

export default useMovieDetails;
