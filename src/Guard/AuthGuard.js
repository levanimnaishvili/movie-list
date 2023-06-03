import React from "react";
import { useAuthContext } from "../context/auth/AuthContextProvider";
import { Link } from "react-router-dom";
import { SIGN_IN_PATH, SIGN_UP_PATH } from "../constants/routes";
const AuthGuard = ({ children }) => {
  const { state } = useAuthContext();
  return (
    <>
      {state.isAuthenticated ? (
        children
      ) : (
        <div>
          <h1>You are not AUTHENTICATED</h1>
          <h4>Please sign in or sign up</h4>
          <button>
            <Link to={SIGN_IN_PATH}>Sign IN</Link>
          </button>
          <button>
            <Link to={SIGN_UP_PATH}>Sign UP</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default AuthGuard;
