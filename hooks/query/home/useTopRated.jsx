import { useQuery } from "react-query";

import { getTopRated } from "../../../services/requests";

const useTopRated = () => {
  const data = useQuery("top_rated", getTopRated);

  return data;
};

export default useTopRated;
