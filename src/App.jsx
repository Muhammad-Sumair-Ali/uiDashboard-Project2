import { useState } from 'react';
import HeroLand from './components/common/HeroLand';
import Navbar from './components/common/Navbar';
import Dashboard from './components/pages/Dashboard';
import DashboardTwo from './components/pages/DashboardTwo';
import Layout from './components/panel/Layout';
import AppRoutes from './components/AppRoutes';
import { UserProvider } from './context/UserContext';
import { Outlet } from 'react-router-dom';


export default function App() {
  const [showDashboard, setShowDashboard] = useState(true);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <>
    
      
      <UserProvider>
  
        <AppRoutes/> 
      </UserProvider>
    
     
    </>
  );
}
