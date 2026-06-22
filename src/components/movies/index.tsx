import type { Movie } from "../../service/Movies";

interface Props {
  movie: Movie;
  onClick: (id: number) => void;
}

const MoviesComponent = ({ movie, onClick }: Props) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : "https://via.placeholder.com/342x513?text=No+Image";

  return (
    <div
      onClick={() => onClick(movie.id)}
      className="group w-full flex flex-col cursor-pointer text-left select-none"
    >
      <div className="relative w-full aspect-[2/3] overflow-hidden rounded-md bg-zinc-900 border border-zinc-800 shadow-md">
        <img
          src={imageUrl}
          alt={movie.title || movie.original_title}
          className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="mt-2 text-sm font-semibold text-zinc-100 line-clamp-1 group-hover:text-red-500 transition-colors">
        {movie.title || movie.original_title}
      </h3>
      <div className="flex items-center justify-between mt-1 text-[11px] text-zinc-400 font-medium">
        <span className="flex items-center gap-1 text-amber-500">
          ★ {movie.vote_average ? movie.vote_average.toFixed(1) : "0.0"}
        </span>
        <span>
          {movie.release_date
            ? new Date(movie.release_date).toLocaleDateString("id-ID", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })
            : "N/A"}
        </span>
      </div>
    </div>
  );
};

export default MoviesComponent;
