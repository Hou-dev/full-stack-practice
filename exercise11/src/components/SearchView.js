import Hero from "./Hero";
import { Link } from "react-router-dom";
import missingicon from "../assets/imagenotfound0.png";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
          onError={(e) => (
            (e.target.onerror = null), (e.target.src = missingicon)
          )}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  let resultsHtml;
  if (keyword.length > 0 && searchResults.length === 0) {
    resultsHtml = (
      <h1 className="text-center text-uppercase text-warning">
        No Movies Found, Try Again!
      </h1>
    );
  } else if (keyword.length > 0 && searchResults.length > 0) {
    resultsHtml = searchResults.map((obj, i) => {
      return <MovieCard movie={obj} key={i} />;
    });
  }

  return (
    <>
      <Hero text={title} />
      {resultsHtml && (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      )}
    </>
  );
};

export default SearchView;
