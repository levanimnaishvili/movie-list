import { useEffect, useState } from "react";
import { fetchMovies } from "../api/movies";

const useFetchFood = () => {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetchMovies()
      .then((data) => {
        setInfo(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return [info, isLoading, error];
};

export default useFetchFood;
