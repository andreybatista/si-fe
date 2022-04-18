import axios from "axios";

function api(){
  const options = {
    baseURL: "https://api.themoviedb.org/3",
    params: {
      api_key: "21236d94cdc569116676953454fd30e8",
      language: "pt-Br",
    },
  }

  const instance = axios.create(options);

  return instance;
}

export default api;