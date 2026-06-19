import { useEffect, useState } from "react";
import { getMovieDetail, type MovieDetail } from "../../service/Movies";

export const useMovieDetail = (movieId: string | undefined) => {
  const [detail, setDetail] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!movieId) {
      setError("No movie ID provided.");
      setLoading(false);
      return;
    }
    
    let isMounted = true;
    setLoading(true);
    setError(null);

    getMovieDetail(movieId)
      .then((data) => {
        if (isMounted) {
          if (data) {
            setDetail(data);
          } else {
            setError("No details found for this movie.");
          }
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error(err);
          setError("Failed to load movie details. Please try again later.");
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [movieId]);

  return { detail, loading, error };
};
