import { useQuery } from "react-query";

import { getMembers } from "../../../services/requests";

const useMembers = (movie_id) => {
  const data = useQuery("members", ()=> getMembers(movie_id));
  return data;
};

export default useMembers;
