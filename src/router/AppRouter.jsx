import { createBrowserRouter,RouterProvider,Navigate} from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes, childHeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const router = createBrowserRouter([
    {
      path: "/login",
      element: <PublicRoute> <LoginPage /> </PublicRoute>,
    },
    {
      path: "/",
      element: <PrivateRoute> <HeroesRoutes /> </PrivateRoute>,
      children: childHeroesRoutes
    }
  ]);

  export const AppRouter = () => {
    return(
      <>
      <RouterProvider  router={router} />
      </>
    )
  }