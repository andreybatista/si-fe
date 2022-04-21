import { useQuery } from "react-query";

import { getPopular } from "../../../services/requests";

const usePopular = () => {
  const data = useQuery("popular", getPopular);

  return data;
};

export default usePopular;
