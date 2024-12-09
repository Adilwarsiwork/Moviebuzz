import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_MOVIEBUZZ_KEY = import.meta.env.VITE_APP_TMDB_MOVIEBUZZ_KEY;

const headers = {
  Authorization: "bearer " + TMDB_MOVIEBUZZ_KEY,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
