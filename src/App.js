import { useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar'
import Workflow from './Components/Workflow';
import WorkflowPlus from './Components/WorkflowPlus';
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
    <div>
      <NavBar />
      <div className="page">
        <PlansPricing />
        <div className="pp-card-section">
          <Workflow />
          <WorkflowPlus />
        </div>
        <AddOns />
        <FAQ />
      </div>
    </div>
  );
}

export default App;
