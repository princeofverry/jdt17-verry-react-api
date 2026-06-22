import { useEffect, useState } from "react";
import { getTopRatedMovies, type Movie } from "../../service/Movies";

export const useTopRated = () => {
  const [topRatedMovie, setTopRatedMovie] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getTopRatedMovieData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getTopRatedMovies();
      if (response) {
        setTopRatedMovie(response.results);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load top rated movies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTopRatedMovieData();
  }, []);

  return { topRatedMovie, loading, error };
};
