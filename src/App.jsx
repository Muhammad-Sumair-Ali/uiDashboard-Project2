import { useState } from 'react';
import HeroLand from './components/common/HeroLand';
import Navbar from './components/common/Navbar';
import Dashboard from './components/pages/Dashboard';
import DashboardTwo from './components/pages/DashboardTwo';
import Layout from './components/panel/Layout';
import AppRoutes from './components/AppRoutes';
import { UserProvider } from './context/UserContext';
import { Outlet } from 'react-router-dom';
// import Layout from "./components/panel/Layout"

export default function App() {

  return (
    <>
      
      <UserProvider>
        <AppRoutes/> 
      </UserProvider>
    
     
    </>
  );
}
