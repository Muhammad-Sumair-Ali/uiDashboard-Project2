import { useState } from 'react';
import './App.css';
import HeroLand from './components/common/HeroLand';
import Navbar from './components/common/Navbar';
import Dashboard from './components/pages/Dashboard';
import DashboardTwo from './components/pages/DashboardTwo';

export default function App() {
  const [showDashboard, setShowDashboard] = useState(true);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <>
      <Navbar />
      <div className='p-10 m-5 bg-primary text-primary-foreground'>
        <HeroLand />

        <nav className="flex justify-center mt-10 text-lg font-medium ">
          <span>
          click here to see dashboard and order page 
          </span>
         
          <button
            style={{color:"blue"}}
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground focus:outline-none"
            onClick={toggleDashboard}
          >
            {showDashboard ? 'Show All Orders Two' : 'Show Dashboard'}
          </button>
          <button
             style={{color:"blue",textDecoration:"undeline"}}
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground focus:outline-none"
            onClick={() => console.log('Orders clicked')}
          >
            
          </button>
        </nav>

        <hr className="border-gray-200 my-2" />

        {showDashboard ? <Dashboard /> : <DashboardTwo />}
      </div>
    </>
  );
}
