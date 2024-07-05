import { useState } from 'react';
import { BrowserRouter, Link, Outlet, Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import Dashboard from './pages/Dashboard';
import DashboardTwo from './pages/DashboardTwo';
import { UserProvider, useUser } from '../context/UserContext';
import Navbar from './common/Navbar';
import AuthRoutes from './AuthRoutes';
import HeroLand from './common/HeroLand';

export default function App() {
// const {user} = useUser()
  // ye karna hai ki user ko useUser() me use karne ke baad hi user ko access karne ke li
  const token = "dghhh"
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <>
          <Navbar />
          <HeroLand/>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign</Link>
            <Link to="/dashboard">Home</Link>
            <Link to="/orders">Orders</Link>
          </>
          <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<AuthRoutes token={token} />}>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/orders" element={<DashboardTwo />} />
          </Route>
          </Routes>
          </BrowserRouter>
        
      </UserProvider>
    </>
  );
}
