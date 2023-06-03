import React from "react";
import classes from "./Movie.module.css";
import { Link } from "react-router-dom";
import  {BookmarkIcon} from '../icons/Bookmark'

const Movie = ({ movie }) => {
  return (
    <li className={classes.item}>
      {/* <img src={movie.image} alt="movie" width="300px" /> */}
      <div
        className={classes.card}
        style={{ backgroundImage: `url("${movie.image}")` }}
      >
        <div className={classes.overlay}>
          <div className={classes.actions}>
            <button><BookmarkIcon /></button>
          </div>
          <div className={classes.details}>
            <Link to={`/${movie.id}`} state={movie}>Details</Link>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Movie;
