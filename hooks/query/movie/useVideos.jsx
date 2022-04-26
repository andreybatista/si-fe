import { useQuery } from "react-query";

import { getVideos } from "../../../services/requests";

const useVideos = (movie_id) => {
  const data = useQuery("videos", () => getVideos(movie_id));
  return data;
};

export default useVideos;
