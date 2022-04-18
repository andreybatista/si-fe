import { useQuery } from "react-query";

import { getHighlights } from "../../../services/requests";

const useHighlights = () => {
  const data = useQuery("nowplaying", getHighlights);

  return data;
};

export default useHighlights;
