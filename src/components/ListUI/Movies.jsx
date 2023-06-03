import React from "react";
import useFetchFood from "../../hooks/useFetchFood";
import { PacmanLoader } from "react-spinners";
import Movie from "../movie/Movie";
import classes from './Movies.module.css'

const Food = () => {
  const [movies, isLoading, error] = useFetchFood();

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }
  return (
    <>
      <h1>TOP 100 movies</h1>
      <span>*selected by IMDB rating.</span>
      <ul className={classes["movie-list"]}>
        {isLoading && <PacmanLoader />}
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </ul>
    </>
  );
};

export default Food;
