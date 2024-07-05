import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Dashboard from './pages/Dashboard';
import DashboardTwo from './pages/DashboardTwo';
import Navbar from './common/Navbar';
import AuthRoutes from './AuthRoutes';
import HeroLand from './common/HeroLand';
import AuthProvider from '../context/authContext';
import { AuthLinks } from '../helper/AuthLinks';

export default function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <>
          <Navbar />
          <HeroLand/>
           <AuthLinks />
          </>
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
            
          <Route element={<AuthRoutes />}>
          <Route path="/dashboard" element={<DashboardTwo/>} />
          <Route path="/orders" element={< Dashboard/>} />
          </Route>
          </Routes>
          </BrowserRouter>
        
      </AuthProvider>
    </>
  );
}
