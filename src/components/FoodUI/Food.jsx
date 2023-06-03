import React from "react";
import useFetchFood from "../../hooks/useFetchFood";
import { PacmanLoader } from "react-spinners";
import Dish from "../dish/Dish";

const Food = () => {
  const [foods, isLoading, error] = useFetchFood();

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Foods component</h1>
      {isLoading && <PacmanLoader />}
      {foods.map((dish) => (
        <Dish key={dish.id} dish={dish} />
      ))}
    </div>
  );
};

export default Food;
