import { useEffect, useState } from "react";
import { fetchFood } from "../api/food";

const useFetchFood = () => {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetchFood()
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
