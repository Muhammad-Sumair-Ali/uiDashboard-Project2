import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'
import toast from 'react-hot-toast'

const AuthRoutes = () => {
  const [ auth ] = useAuth()
  const navigate = useNavigate()
  
  useEffect(() => {
    if(!auth.token){
      toast.error("Please Login first")
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