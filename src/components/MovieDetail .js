import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetail({ movies }) {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) return <h2>Movie not found!</h2>;

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating} Stars</p>
      {/* Add rating functionality here */}
    </div>
  );
}

export default MovieDetail;
