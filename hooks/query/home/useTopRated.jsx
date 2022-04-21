import { useQuery } from "react-query";

import { getTopRated } from "../../../services/requests";

const useTopRated = () => {
  const data = useQuery("now_playing", getTopRated);

  return data;
};

export default useTopRated;
