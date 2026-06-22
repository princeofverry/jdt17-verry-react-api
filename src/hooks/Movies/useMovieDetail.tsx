import { useEffect, useState } from "react";
import { getMovieDetail, getMovieVideos, type MovieDetail } from "../../service/Movies";

export const useMovieDetail = (movieId: string | undefined) => {
  const [detail, setDetail] = useState<MovieDetail | null>(null);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
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
    setTrailerKey(null);

    const fetchData = async () => {
      try {
        const detailData = await getMovieDetail(movieId);
        if (!isMounted) return;

        if (detailData) {
          setDetail(detailData);
        } else {
          setError("No details found for this movie.");
          setLoading(false);
          return;
        }

        try {
          const videoData = await getMovieVideos(movieId);
          if (isMounted && videoData && videoData.results) {
            const trailers = videoData.results.filter(
              (v) => v.site === "YouTube" && v.type === "Trailer"
            );
            if (trailers.length > 0) {
              const officialTrailer = trailers.find((v) => v.official);
              setTrailerKey(officialTrailer ? officialTrailer.key : trailers[0].key);
            }
          }
        } catch (vErr) {
          console.error("Failed to load movie trailer:", vErr);
        }
      } catch (err) {
        if (isMounted) {
          console.error(err);
          setError("Failed to load movie details. Please try again later.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [movieId]);

  return { detail, trailerKey, loading, error };
};
