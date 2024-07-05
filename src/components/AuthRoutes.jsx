import { useEffect } from 'react'
import { BrowserRouter , Routes,Route, Outlet, useNavigate } from 'react-router-dom'

const AuthRoutes = ({token}) => {
  const navigate = useNavigate()
  useEffect(() => {
    if(!token){
       navigate('/login')
    }
  },[token])
  return(
   <>
     <div>
     <h2>Auth Page</h2>
     </div>
     <Outlet/> 
   </>
  )
}
export default AuthRoutes