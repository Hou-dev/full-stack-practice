import React from "react";
import Hero from "./hero";

// TMDB API KEY: 88dc9b885ceb3b71099af50619a53612
// Example API Request https://api.themoviedb.org/3/movie/550?api_key=88dc9b885ceb3b71099af50619a53612

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <div className="col-lg-4 col-md-3 col-2 my-4">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          Go somewhere
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard moive={obj} key={i} />;
  });

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
