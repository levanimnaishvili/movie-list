import { Link, useNavigate, useLocation } from "react-router-dom";
import classes from "./MovieDetails.module.css";
import ReactPlayer from "react-player/youtube";

const MovieDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, image, rating, year, description, trailer, genre, director } =
    (location && location.state) || {};
  return (
    <div className={classes.page}>
      <Link to={navigate(-1)}>Back to List</Link>
      <div className={classes.wrapper}>
        <h1>{title}</h1>
        <img src={image} alt={title}></img>
        <span>IMDB rating: <b>{rating}</b></span>
        <span>Year: <b>{year}</b></span>
        <span>
          Directors:{" "}
          <b>{director?.reduce((acc, director) =>
            director ? `${acc}, ${director}` : acc
          )}</b>
        </span>
        <span>
          Genre:{" "}
          <b>{genre?.reduce((acc, genre) => (genre ? `${acc}, ${genre}` : acc))}</b>
        </span>
        <p className={classes.description}>{description}</p>
      </div>
      <div className={classes.trailer}>
        <ReactPlayer url={trailer} />
      </div>
    </div>
  );
};
export default MovieDetails;
