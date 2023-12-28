import { createBrowserRouter,RouterProvider,Navigate} from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes, childHeroesRoutes } from "../heroes";

const router = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: <HeroesRoutes />,
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