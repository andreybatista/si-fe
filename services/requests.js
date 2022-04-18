import api from "./api";

// export async function getHighlights() {
//   const data = await api.get("movie/now_playing");
//   return data;
// }

export async function getHighlights() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=21236d94cdc569116676953454fd30e8&language=pt-Br&page=1"
  );
  return res.json();
}
