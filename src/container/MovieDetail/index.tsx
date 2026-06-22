import { useParams, useNavigate } from "react-router";
import { useMovieDetail } from "../../hooks/Movies/useMovieDetail";
import { ArrowLeft } from "lucide-react";

const MovieDetailContainer = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { detail, trailerKey, loading, error } = useMovieDetail(id);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#141414] flex flex-col justify-center items-center py-24 box-border">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-t-transparent border-red-600"></div>
        <p className="text-zinc-400 mt-4 text-sm font-medium">
          Memuat detail film...
        </p>
      </div>
    );
  }

  if (error || !detail) {
    return (
      <div className="max-w-md mx-auto p-8 bg-zinc-900 border border-zinc-800 rounded-lg text-center mt-20 box-border">
        <p className="text-red-500 font-semibold text-sm mb-4">
          {error || "Film tidak ditemukan"}
        </p>
        <button
          onClick={() => navigate("/movie-page")}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition-colors text-xs md:text-sm cursor-pointer border-0"
        >
          Kembali ke Movie List
        </button>
      </div>
    );
  }

  // Format runtime to hours and minutes
  const hours = Math.floor(detail.runtime / 60);
  const minutes = detail.runtime % 60;
  const runtimeFormatted = hours > 0 ? `${hours}j ${minutes}m` : `${minutes}m`;

  return (
    <div className="relative w-full min-h-screen bg-[#141414] text-zinc-100 px-4 sm:px-6 md:px-8 pt-24 pb-8 flex flex-col text-left box-border select-none overflow-hidden font-netflix">
      {/* Blurred Backdrop Accent */}
      {detail.backdrop_path && (
        <div
          className="absolute top-0 left-0 right-0 h-[450px] bg-cover bg-center opacity-10 filter blur-md pointer-events-none select-none"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${detail.backdrop_path})`,
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          }}
        />
      )}

      <div className="relative max-w-4xl mx-auto w-full z-10 box-border">
        <button
          onClick={() => navigate("/movie-page")}
          className="inline-flex items-center gap-2 hover:bg-zinc-800/80 hover:rounded-lg text-zinc-300 font-semibold py-1.5 px-4 rounded mb-8 cursor-pointer transition-colors text-xs md:text-sm"
        >
          <ArrowLeft /> Kembali
        </button>

        {/* Movie Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 box-border">
          {/* Column 1: Poster */}
          <div className="col-span-1 flex justify-center box-border">
            <div className="w-full max-w-[260px] aspect-[2/3] overflow-hidden rounded-lg border border-zinc-800 shadow-2xl bg-zinc-900">
              <img
                src={
                  detail.poster_path
                    ? `https://image.tmdb.org/t/p/w500${detail.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Poster"
                }
                alt={detail.title || detail.original_title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Column 2: Movie Details */}
          <div className="md:col-span-2 flex flex-col justify-start text-left box-border">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight tracking-tight mt-0 mb-1">
              {detail.title || detail.original_title}
            </h1>
            {detail.tagline && (
              <p className="italic text-zinc-400 text-xs md:text-sm mb-4">
                "{detail.tagline}"
              </p>
            )}

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm text-zinc-300 font-semibold mb-6">
              <span className="flex items-center gap-1 text-amber-500 font-bold">
                ★ {detail.vote_average ? detail.vote_average.toFixed(1) : "0.0"}
              </span>
              <span className="text-zinc-600">|</span>
              <span>
                {detail.release_date
                  ? new Date(detail.release_date).toLocaleDateString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "N/A"}
              </span>
              <span className="text-zinc-600">|</span>
              <span>{runtimeFormatted}</span>
            </div>

            <div className="mb-6 box-border">
              <h3 className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-2">
                Genre
              </h3>
              <div className="flex flex-wrap gap-2">
                {detail.genres && detail.genres.length > 0 ? (
                  detail.genres.map((g) => (
                    <span
                      key={g.id}
                      className="bg-zinc-800 text-zinc-300 border border-zinc-700 px-2.5 py-1 rounded text-xs font-semibold"
                    >
                      {g.name}
                    </span>
                  ))
                ) : (
                  <span className="text-zinc-500 text-xs font-medium">
                    Genre tidak tersedia
                  </span>
                )}
              </div>
            </div>

            <div className="box-border">
              <h3 className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-2">
                Ringkasan
              </h3>
              <p className="text-zinc-300 text-xs md:text-sm leading-relaxed font-medium m-0">
                {detail.overview ||
                  "Tidak ada deskripsi ringkasan untuk film ini."}
              </p>
            </div>
          </div>
        </div>

        {/* Video Trailer Section */}
        <div className="mt-12 box-border">
          <h2 className="text-lg md:text-xl font-bold text-white border-b border-zinc-800 pb-3 mb-4">
            Official Trailer
          </h2>
          {trailerKey ? (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 shadow-xl mt-4">
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title={`${detail.title || detail.original_title} Official Trailer`}
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center bg-zinc-900/50 border border-zinc-800/80 rounded-lg py-16 px-4 text-center mt-4">
              <span className="text-zinc-600 text-3xl mb-2">🎬</span>
              <p className="text-zinc-400 font-semibold text-sm m-0">
                Trailer tidak tersedia
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailContainer;
