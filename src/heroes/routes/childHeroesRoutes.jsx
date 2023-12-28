import { DcPage, Hero, MarvelPage, Search } from "../pages";
import { Navigate } from "react-router-dom";
export const childHeroesRoutes = [
  { path: "marvel", element: <MarvelPage /> },
  { path: "dc", element: <DcPage></DcPage> },
  { path: "search", element: <Search></Search> },
  { path: "hero/:heroId", element: <Hero></Hero> },
  { path: "/*", element: <Navigate to="/marvel" /> },
];
