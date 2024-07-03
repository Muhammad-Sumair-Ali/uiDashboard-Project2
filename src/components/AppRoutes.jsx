import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import DashboardTwo from './pages/DashboardTwo'
const AppRoutes = () => {
  return(
    <BrowserRouter>
    <Routes>
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/orders" element={<DashboardTwo />} />
    </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes