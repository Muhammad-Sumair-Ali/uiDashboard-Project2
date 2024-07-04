import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import DashboardTwo from './pages/DashboardTwo'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import Home from './pages/Home'
const AppRoutes = () => {
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/orders" element={<DashboardTwo />} />
    <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes