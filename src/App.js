import { useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import AddOns from './Components/AddOns';
import FAQ from './Components/FAQ';
import PlansPricing from './Components/PlansPricing';

function App() {
  useEffect(() => {
    document.body.style.margin= '0px';
    
    return () => {
      document.body.style.margin='0px';
    };
  },[]);

  return (
    <div className="page">
      <NavBar />
      <div className="pricing-page">
        <PlansPricing />
        <AddOns />
        <FAQ />
      </div>
    </div>
  );
}

export default App;
