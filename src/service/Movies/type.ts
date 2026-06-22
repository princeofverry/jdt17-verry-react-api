export interface ResponseData {
  total_results: number;
  total_pages: number;
  page: number;
  results: Movie[];
}

export interface Movie {
  id: number;
  overview: string;
  original_title: string;
  poster_path: string;
  title?: string;
  vote_average?: number;
  release_date?: string;
  backdrop_path?: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetail extends Movie {
  backdrop_path: string;
  genres: Genre[];
  homepage: string;
  release_date: string;
  runtime: number;
  tagline: string;
  vote_average: number;
  vote_count: number;
}

export interface VideoResult {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
}

export interface MovieVideosResponse {
  id: number;
  results: VideoResult[];
}

