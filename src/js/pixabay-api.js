import axios from "axios";

const KEY = "55068673-7a1553b3dfa5acdc200b34057";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query, page = 1, perPage = 15) {
  return axios.get(BASE_URL, {
    params: {
      key: KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page: page,
      per_page: perPage,
    },
  }).then(res => res.data);
}
