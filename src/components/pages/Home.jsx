import { AuthLinks } from "../../helper/AuthLinks"
import HeroLand from "../common/HeroLand"
import Navbar from "../common/Navbar"

const Home = () => {
  return(
    <>
      <Navbar />
      <HeroLand/>
       <AuthLinks />
      </>
  )
}
export default Home