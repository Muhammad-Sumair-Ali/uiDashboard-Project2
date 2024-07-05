import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const AuthRoutes = () => {
  const [ auth ] = useAuth()
  const navigate = useNavigate()
  
  useEffect(() => {
    if(!auth?.token){
       navigate('/login')
    }
  },[auth && auth.token])
  return(
   <>
     <Outlet/> 
   </>
  )
}
export default AuthRoutes