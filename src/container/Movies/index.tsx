import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useNowPlaying } from "../../hooks/Movies/useNowPlaying";
import { usePopular } from "../../hooks/Movies/usePopular";
import { useUpcoming } from "../../hooks/Movies/useUpcoming";
import { useTopRated } from "../../hooks/Movies/useTopRated";
import { useSearchMovies } from "../../hooks/Movies/useSearchMovies";
import MoviesComponent from "../../components/movies";
import { Play, Search, Star } from "lucide-react";

const Movies = () => {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState<string>("");
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const {
    nowPlayingMovie,
    loading: loadingNow,
    error: errorNow,
  } = useNowPlaying();
  const { popularMovie } = usePopular();
  const {
    upcomingMovie,
    loading: loadingUpcoming,
    error: errorUpcoming,
  } = useUpcoming();
  const { topRatedMovie, loading: loadingTop, error: errorTop } = useTopRated();
  const {
    searchResults,
    loading: loadingSearch,
    error: errorSearch,
  } = useSearchMovies(searchVal);

  const movePageDetail = (id: number) => {
    navigate(`/movie-page/${id}`);
  };

  const isSearching = searchVal.trim().length > 0;
  const carouselMovies = nowPlayingMovie ? nowPlayingMovie.slice(0, 5) : [];

  // Auto-slide effect for the Hero Carousel
  useEffect(() => {
    if (carouselMovies.length === 0 || isSearching) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselMovies.length);
    }, 6000); // rotate slides every 6 seconds

    return () => clearInterval(interval);
  }, [carouselMovies.length, isSearching]);

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#141414] text-zinc-100 box-border font-netflix">
      {/* 1. Hero Banner Carousel */}
      {!isSearching && carouselMovies.length > 0 && (
        <div className="relative w-full h-[56.25vw] max-h-[480px] bg-zinc-950 flex items-end overflow-hidden select-none">
          {carouselMovies.map((movie, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={movie.id}
                className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out flex items-end ${
                  isActive
                    ? "opacity-100 z-10 scale-100"
                    : "opacity-0 z-0 pointer-events-none scale-105"
                }`}
              >
                {/* Backdrop Image with gradient overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out"
                  style={{
                    backgroundImage: `linear-gradient(to top, #141414 0%, rgba(20, 20, 20, 0.3) 50%, rgba(20, 20, 20, 0.6) 100%), url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
                  }}
                />

                {/* Movie Details Info Layer */}
                <div className="relative w-full p-4 sm:p-8 md:p-12 text-left bg-linear-to-t from-[#141414] to-transparent box-border">
                  <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-white mb-2 md:mb-4 max-w-xl leading-tight tracking-tight mt-0 drop-shadow-lg">
                    {movie.title || movie.original_title}
                  </h1>
                  <div className="text-xs md:text-sm text-zinc-300 font-semibold mb-3 flex items-center gap-3">
                    <span className="text-amber-500 flex flex-row justify-center items-center gap-1">
                      <Star size={12} fill="currentColor" />{" "}
                      {movie.vote_average?.toFixed(1) || "0.0"}
                    </span>
                    <span>
                      {movie.release_date
                        ? new Date(movie.release_date).getFullYear()
                        : "N/A"}
                    </span>
                  </div>
                  <p className="hidden md:block text-zinc-400 text-xs md:text-sm max-w-lg mb-6 line-clamp-3 leading-relaxed">
                    {movie.overview}
                  </p>
                  <button
                    onClick={() => movePageDetail(movie.id)}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold my-4 py-2 px-6 rounded transition-colors text-xs md:text-sm cursor-pointer shadow-md border-0 flex flex-row justify-center items-center gap-2 hover:scale-105 active:scale-95 duration-200"
                  >
                    <Play size={16} fill="currentColor" /> Details
                  </button>
                </div>
              </div>
            );
          })}

          {/* Carousel dots indicators */}
          <div className="absolute right-4 bottom-4 md:right-12 md:bottom-8 flex items-center gap-2.5 z-20">
            {carouselMovies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer border-0 p-0 ${
                  idx === currentSlide
                    ? "bg-red-600 w-6"
                    : "bg-zinc-500/80 hover:bg-zinc-300 w-2"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* 2. Search Bar Section */}
      <div
        className={`px-4 md:px-8 text-left box-border ${isSearching ? "pt-24" : "mt-8"}`}
      >
        <div className="relative max-w-md w-full">
          <input
            type="text"
            placeholder="Cari pelem..."
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 text-white rounded-md py-2 px-4 pl-10 text-xs md:text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors box-border"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-xs md:text-sm">
            <Search size={14} />
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
              <p className="text-red-500 py-6 font-medium text-sm">
                {errorSearch}
              </p>
            ) : searchResults.length === 0 ? (
              <p className="text-zinc-500 py-6 font-medium text-sm">
                Tidak ada film yang cocok dengan pencarian Anda.
              </p>
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
            {/* Now Playing Row - Infinite Smooth Marquee */}
            <div className="text-left box-border w-full overflow-hidden">
              <h2 className="text-base md:text-lg font-bold text-white mb-3 px-4 md:px-8 tracking-wide">
                <span className="text-red-800 font-bold">|</span> Now Playing
              </h2>
              {loadingNow ? (
                <div className="px-4 md:px-8 text-zinc-500 text-sm">
                  Memuat film...
                </div>
              ) : errorNow ? (
                <div className="px-4 md:px-8 text-red-500 text-sm">
                  {errorNow}
                </div>
              ) : (
                <div className="relative overflow-hidden w-full py-2">
                  {/* Left and right fade overlays for visual depth */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-linear-to-r from-[#141414] to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-linear-to-l from-[#141414] to-transparent z-10 pointer-events-none" />

                  <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused] py-2">
                    {/* First copy of movies */}
                    {nowPlayingMovie.map((el) => (
                      <div
                        key={`${el.id}-first`}
                        className="w-20 sm:w-28 md:w-36 shrink-0"
                      >
                        <MoviesComponent movie={el} onClick={movePageDetail} />
                      </div>
                    ))}
                    {/* Second duplicate copy for seamless looping */}
                    {nowPlayingMovie.map((el) => (
                      <div
                        key={`${el.id}-second`}
                        className="w-28 sm:w-36 md:w-44 shrink-0"
                      >
                        <MoviesComponent movie={el} onClick={movePageDetail} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Popular Movies Row */}
            <div className="text-left box-border">
              <h2 className="text-base md:text-lg font-bold text-white mb-3 px-4 md:px-8 tracking-wide">
                <span className="text-red-800 font-bold">|</span> Popular Movies
              </h2>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-4 md:px-8">
                {popularMovie.map((el) => (
                  <div key={el.id} className="w-28 sm:w-36 md:w-44 shrink-0">
                    <MoviesComponent movie={el} onClick={movePageDetail} />
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Movies Row */}
            <div className="text-left box-border">
              <h2 className="text-base md:text-lg font-bold text-white mb-3 px-4 md:px-8 tracking-wide">
                <span className="text-red-800 font-bold">|</span> Upcoming
                Movies
              </h2>
              {loadingUpcoming ? (
                <div className="px-4 md:px-8 text-zinc-500 text-sm">
                  Memuat film...
                </div>
              ) : errorUpcoming ? (
                <div className="px-4 md:px-8 text-red-500 text-sm">
                  {errorUpcoming}
                </div>
              ) : (
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-4 md:px-8">
                  {upcomingMovie.map((el) => (
                    <div key={el.id} className="w-28 sm:w-36 md:w-44 shrink-0">
                      <MoviesComponent movie={el} onClick={movePageDetail} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Top Rated Movies Row */}
            <div className="text-left box-border">
              <h2 className="text-base md:text-lg font-bold text-white mb-3 px-4 md:px-8 tracking-wide">
                <span className="text-red-800 font-bold">|</span> Top Rated
                Movies
              </h2>
              {loadingTop ? (
                <div className="px-4 md:px-8 text-zinc-500 text-sm">
                  Memuat film...
                </div>
              ) : errorTop ? (
                <div className="px-4 md:px-8 text-red-500 text-sm">
                  {errorTop}
                </div>
              ) : (
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-4 md:px-8">
                  {topRatedMovie.map((el) => (
                    <div key={el.id} className="w-28 sm:w-36 md:w-44 shrink-0">
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
