import { useState } from "react";
import { useNavigate } from "react-router";
import { useNowPlaying } from "../../hooks/Movies/useNowPlaying";
import { usePopular } from "../../hooks/Movies/usePopular";
import { useUpcoming } from "../../hooks/Movies/useUpcoming";
import { useTopRated } from "../../hooks/Movies/useTopRated";
import { useSearchMovies } from "../../hooks/Movies/useSearchMovies";
import MoviesComponent from "../../components/movies";

const Movies = () => {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState<string>("");

  const { nowPlayingMovie, loading: loadingNow, error: errorNow } = useNowPlaying();
  const { popularMovie } = usePopular();
  const { upcomingMovie, loading: loadingUpcoming, error: errorUpcoming } = useUpcoming();
  const { topRatedMovie, loading: loadingTop, error: errorTop } = useTopRated();
  const { searchResults, loading: loadingSearch, error: errorSearch } = useSearchMovies(searchVal);

  const movePageDetail = (id: number) => {
    navigate(`/movie-page/${id}`);
  };

  const isSearching = searchVal.trim().length > 0;
  const heroMovie = nowPlayingMovie[0];

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#141414] text-zinc-100 box-border">
      {/* 1. Hero Banner */}
      {!isSearching && heroMovie && (
        <div className="relative w-full h-[56.25vw] max-h-[480px] bg-zinc-950 flex items-end overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
            style={{
              backgroundImage: `linear-gradient(to top, #141414 0%, rgba(20, 20, 20, 0.3) 50%, rgba(20, 20, 20, 0.6) 100%), url(https://image.tmdb.org/t/p/original${heroMovie.backdrop_path})`,
            }}
          />
          <div className="relative w-full p-4 sm:p-8 md:p-12 text-left bg-gradient-to-t from-[#141414] to-transparent box-border">
            <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-white mb-2 md:mb-4 max-w-xl leading-tight tracking-tight mt-0">
              {heroMovie.title || heroMovie.original_title}
            </h1>
            <div className="text-xs md:text-sm text-zinc-300 font-semibold mb-3 flex items-center gap-3">
              <span className="text-amber-500">★ {heroMovie.vote_average?.toFixed(1) || "0.0"}</span>
              <span>
                {heroMovie.release_date
                  ? new Date(heroMovie.release_date).getFullYear()
                  : "N/A"}
              </span>
            </div>
            <p className="hidden md:block text-zinc-400 text-xs md:text-sm max-w-lg mb-6 line-clamp-3 leading-relaxed">
              {heroMovie.overview}
            </p>
            <button
              onClick={() => movePageDetail(heroMovie.id)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-colors text-xs md:text-sm cursor-pointer shadow-md border-0"
            >
              Info Selengkapnya
            </button>
          </div>
        </div>
      )}

      {/* 2. Search Bar Section */}
      <div className="px-4 md:px-8 mt-6 text-left box-border">
        <div className="relative max-w-md w-full">
          <input
            type="text"
            placeholder="Cari film..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md py-2 px-4 pl-10 text-xs md:text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors box-border"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-xs md:text-sm">
            🔍
          </span>
          {searchVal && (
            <button
              onClick={() => setSearchVal("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-0 text-zinc-400 hover:text-white text-xs cursor-pointer font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full py-4 box-border">
        {isSearching ? (
          /* Search Results Page */
          <div className="px-4 md:px-8 text-left box-border">
            <h2 className="text-lg md:text-xl font-bold text-white mb-6">
              Hasil Pencarian: "{searchVal}"
            </h2>

            {loadingSearch ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-2 border-t-transparent border-red-600"></div>
              </div>
            ) : errorSearch ? (
              <p className="text-red-500 py-6 font-medium text-sm">{errorSearch}</p>
            ) : searchResults.length === 0 ? (
              <p className="text-zinc-500 py-6 font-medium text-sm">Tidak ada film yang cocok dengan pencarian Anda.</p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {searchResults.map((movie) => (
                  <MoviesComponent
                    key={movie.id}
                    movie={movie}
                    onClick={movePageDetail}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Normal Rows Page */
          <div className="flex flex-col gap-6 box-border">
            {/* Now Playing Row */}
            <div className="text-left box-border">
              <h2 className="text-base md:text-lg font-bold text-white mb-3 px-4 md:px-8 tracking-wide">
                Now Playing
              </h2>
              {loadingNow ? (
                <div className="px-4 md:px-8 text-zinc-500 text-sm">Memuat film...</div>
              ) : errorNow ? (
                <div className="px-4 md:px-8 text-red-500 text-sm">{errorNow}</div>
              ) : (
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-4 md:px-8">
                  {nowPlayingMovie.map((el) => (
                    <div key={el.id} className="w-28 sm:w-36 md:w-44 flex-shrink-0">
                      <MoviesComponent movie={el} onClick={movePageDetail} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Popular Movies Row */}
            <div className="text-left box-border">
              <h2 className="text-base md:text-lg font-bold text-white mb-3 px-4 md:px-8 tracking-wide">
                Popular Movies
              </h2>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-4 md:px-8">
                {popularMovie.map((el) => (
                  <div key={el.id} className="w-28 sm:w-36 md:w-44 flex-shrink-0">
                    <MoviesComponent movie={el} onClick={movePageDetail} />
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Movies Row */}
            <div className="text-left box-border">
              <h2 className="text-base md:text-lg font-bold text-white mb-3 px-4 md:px-8 tracking-wide">
                Upcoming Movies
              </h2>
              {loadingUpcoming ? (
                <div className="px-4 md:px-8 text-zinc-500 text-sm">Memuat film...</div>
              ) : errorUpcoming ? (
                <div className="px-4 md:px-8 text-red-500 text-sm">{errorUpcoming}</div>
              ) : (
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-4 md:px-8">
                  {upcomingMovie.map((el) => (
                    <div key={el.id} className="w-28 sm:w-36 md:w-44 flex-shrink-0">
                      <MoviesComponent movie={el} onClick={movePageDetail} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Top Rated Movies Row */}
            <div className="text-left box-border">
              <h2 className="text-base md:text-lg font-bold text-white mb-3 px-4 md:px-8 tracking-wide">
                Top Rated Movies
              </h2>
              {loadingTop ? (
                <div className="px-4 md:px-8 text-zinc-500 text-sm">Memuat film...</div>
              ) : errorTop ? (
                <div className="px-4 md:px-8 text-red-500 text-sm">{errorTop}</div>
              ) : (
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-4 md:px-8">
                  {topRatedMovie.map((el) => (
                    <div key={el.id} className="w-28 sm:w-36 md:w-44 flex-shrink-0">
                      <MoviesComponent movie={el} onClick={movePageDetail} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
