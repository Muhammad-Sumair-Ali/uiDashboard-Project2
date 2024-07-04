import { Outlet } from "react-router-dom"
import Navbar from "../common/Navbar"
import HeroLand from "../common/HeroLand"
import Layout from "../panel/Layout"

 const Home = () => {
  return(
    <>
    
      <Navbar />
      <div className="p-10 m-5 bg-primary text-primary-foreground">
        <HeroLand />

          
      </div>
        <Layout>
          <Outlet />
        </Layout>
    </>
  )
  
}
export default Home