import { useEffect, useState } from "react";
import { getUpcomingMovies, type Movie } from "../../service/Movies";

export const useUpcoming = () => {
  const [upcomingMovie, setUpcomingMovie] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getUpcomingMovieData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await getUpcomingMovies();
      if (response) {
        setUpcomingMovie(response.results);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to load upcoming movies.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUpcomingMovieData();
  }, []);

  return { upcomingMovie, loading, error };
};
