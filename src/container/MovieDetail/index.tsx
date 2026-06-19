import { useParams, useNavigate } from "react-router";
import { useMovieDetail } from "../../hooks/Movies/useMovieDetail";

const MovieDetailContainer = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { detail, loading, error } = useMovieDetail(id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !detail) {
    return (
      <div>
        <p>{error || "Movie not found"}</p>
        <button onClick={() => navigate("/movie-page")}>Back</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        onClick={() => navigate("/movie-page")}
        className="border px-3 py-1 mb-4 cursor-pointer"
      >
        Back
      </button>

      <div className="flex gap-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
          alt={detail.original_title}
          className="w-56 border"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{detail.original_title}</h1>

          <p>
            <strong>Release Date:</strong> {detail.release_date}
          </p>

          <p>
            <strong>Rating:</strong> {detail.vote_average}
          </p>

          <p>
            <strong>Runtime:</strong> {detail.runtime} minutes
          </p>

          <p>
            <strong>Genres:</strong>{" "}
            {detail.genres?.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Overview</h2>
        <p>{detail.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetailContainer;
