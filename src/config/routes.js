import {
  HOME_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH,
  PATH_NOT_FOUND,
  DETAILS_PATH
} from "../constants/routes";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import NotFound from "../pages/not-found/index";
import MovieDetails  from "../pages/Details/MovieDetails";

import AuthGuard from "../Guard/AuthGuard";
import GustGuard from "../Guard/GustGuard";

const routes = [
  {
    path: HOME_PATH,
    Component: Home,
    Guard: AuthGuard,
  },
  {
    path: SIGN_IN_PATH,
    Component: SignIn,
    Guard: GustGuard,
  },
  {
    path: SIGN_UP_PATH,
    Component: SignUp,
    Guard: GustGuard,
  },
  {
    path: DETAILS_PATH,
    Component: MovieDetails,
    Guard: AuthGuard,
  },
  {
    path: PATH_NOT_FOUND,
    Component: NotFound,
  },
];

export default routes;
