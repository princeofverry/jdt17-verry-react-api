import API from "../api";
import type { ResponseData, MovieDetail } from "./type";

export const getPopularMovies = async () => {
  try {
    const response = await API.get("movie/popular");

    return response.data as ResponseData;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieDetail = async (movieId: string | number) => {
  try {
    const response = await API.get(`movie/${movieId}`);
    return response.data as MovieDetail;
  } catch (error) {
    console.error("Error fetching movie detail:", error);
    throw error;
  }
};

