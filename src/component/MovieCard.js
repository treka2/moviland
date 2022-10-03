import React from "react";

const movieCard = ({ movie }) => {
  return (
    <div className="movie" key={movie.imdbID}>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          src={movie.Poster ? movie.Poster : "https://picsum.photos/300/400"}
          alt="poster"
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default movieCard;
