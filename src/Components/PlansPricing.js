import '../Styles/PlansPricing.css';
import PlanDetails from './PlanDetails';

import { useState } from 'react';

function PlansPricing() {
  const [checked, setChecked] = useState(false);

  function toggleFrequency() {
    setChecked((checked) => !checked);
  }

  return (
    <div>
      <div className="plans-header">
        <h1>Plans & Pricing</h1>
        <div className="frequency">
          <span className={checked ? "frequency-checked" : "" }>MONTHLY</span> 
          <label className="switch">
            <input type="checkbox" onClick={toggleFrequency} />
            <span className="slider" />
          </label>
          <span className={!checked ? "frequency-checked" : "" }>YEARLY</span>
        </div>
      </div>
      <PlanDetails frequency={checked} />
    </div>
  )
}

export default PlansPricing;