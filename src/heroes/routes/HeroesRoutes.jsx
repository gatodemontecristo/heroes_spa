import { Outlet } from "react-router-dom"
import { Navbar } from "../../ui"





export const HeroesRoutes = () => {
  return (
    <>
       <Navbar></Navbar>
       <div className="container">
       <Outlet></Outlet>
       </div>
    </>
  )
}

