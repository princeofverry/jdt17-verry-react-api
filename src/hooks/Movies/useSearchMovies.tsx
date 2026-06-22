import { useEffect, useState } from "react";
import { searchMovies, type Movie } from "../../service/Movies";

export const useSearchMovies = (query: string) => {
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.trim()) {
      setSearchResults([]);
      setLoading(false);
      setError(null);
      return;
    }

    let isMounted = true;
    setLoading(true);
    setError(null);

    const delayDebounceFn = setTimeout(() => {
      searchMovies(query)
        .then((data) => {
          if (isMounted) {
            setSearchResults(data?.results || []);
          }
        })
        .catch((err) => {
          if (isMounted) {
            console.error(err);
            setError("Failed to load search results.");
          }
        })
        .finally(() => {
          if (isMounted) {
            setLoading(false);
          }
        });
    }, 500); // 500ms debounce

    return () => {
      isMounted = false;
      clearTimeout(delayDebounceFn);
    };
  }, [query]);

  return { searchResults, loading, error };
};
