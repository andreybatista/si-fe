import axios from "axios";

const options = {
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "21236d94cdc569116676953454fd30e8",
    language: "pt-Br",
  },
};

const instance = axios.create(options);

export async function getHighlights() {
  const data = await instance.get("movie/now_playing");
  return data;
}

export async function getPopular() {
  const data = await instance.get("movie/popular");
  return data;
}

export async function getTopRated() {
  const data = await instance.get("movie/top_rated");
  return data;
}

export async function getMovieDetails(movie_id) {
  const {data} = await instance.get(`movie/${movie_id}`);
  return data;
}

export async function getMembers(movie_id) {
  const {data} = await instance.get(`movie/${movie_id}/credits`);
  return data;
}

// YouTube: https://www.youtube.com/watch?v=
// Vimeo: https://vimeo.com/

// For example:
// Youtube: https://www.youtube.com/watch?v=h6hZkvrFIj0
// Vimeo: https://vimeo.com/282875052