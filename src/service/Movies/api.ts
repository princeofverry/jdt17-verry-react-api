import API from "../api";
import type { ResponseData, MovieDetail, MovieVideosResponse } from "./type";

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

export const getNowPlayingMovies = async () => {
  try {
    const response = await API.get("movie/now_playing");
    return response.data as ResponseData;
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
    throw error;
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await API.get("movie/upcoming");
    return response.data as ResponseData;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    throw error;
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await API.get("movie/top_rated");
    return response.data as ResponseData;
  } catch (error) {
    console.error("Error fetching top rated movies:", error);
    throw error;
  }
};

export const searchMovies = async (query: string) => {
  try {
    const response = await API.get("search/movie", {
      params: {
        query,
        include_adult: true,
      },
    });
    return response.data as ResponseData;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};

export const getMovieVideos = async (movieId: string | number) => {
  try {
    const response = await API.get(`movie/${movieId}/videos`);
    return response.data as MovieVideosResponse;
  } catch (error) {
    console.error("Error fetching movie videos:", error);
    throw error;
  }
};

