import React from "react";
import { useAuthContext } from "../../context/auth/AuthContextProvider";
import { logOutAction } from "../../context/auth/actions";
import Food from "../../components/FoodUI/Food";

const Home = () => {
  const { dispatch } = useAuthContext();
  return (
    <div>
      Home page
      <button
        onClick={() => {
          dispatch(logOutAction());
        }}
      >
        log out
      </button>
      <Food />
    </div>
  );
};

export default Home;
