import { useEffect, useState } from "react";
import { getNowPlayingMovies, type Movie } from "../../service/Movies";

export const useNowPlaying = () => {
  const [nowPlayingMovie, setNowPlayingMovie] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getNowPlayingMovieData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getNowPlayingMovies();
      if (response) {
        setNowPlayingMovie(response.results);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load now playing movies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNowPlayingMovieData();
  }, []);

  return { nowPlayingMovie, loading, error };
};
