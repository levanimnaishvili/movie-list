import React from "react";

const Dish = ({ dish }) => {
  return (
    <div>
      <h1>Title {dish.title}</h1>
      <h1>difficulty {dish.difficulty}</h1>
      <img src={dish.image} alt="dish" width="300px" />
    </div>
  );
};

export default Dish;
