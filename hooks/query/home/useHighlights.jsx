import { useQuery } from "react-query";

import { getHighlights } from "../../../services/requests";

const useHighlights = () => {
  const data = useQuery("now_playing", getHighlights);

  return data;
};

export default useHighlights;
