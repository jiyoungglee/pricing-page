import { useState } from 'react';
import Card from './Card';

import '../Styles/PlansPricing.css';

function PlansPricing() {
  const [checked, setChecked] = useState(false);
  const plans = [
    {
      plan: 'Basic Model',
      prices: {
        monthly: '$19',
        yearly: '$180',
      },
      features: [
        {description: '1 User Access'},
        {description: 'Basic Membership'},
        {description: 'Invoicing & Payment'},
        {description: 'Monthly Reporting'},
      ]
    },
    {
      plan: 'Plus Model',
      prices: {
        monthly: '$32',
        yearly: '$300',
      },
      features: [
        {description: 'Up to 5 Users Access'},
        {description: 'Plus Membership'},
        {description: 'Invoicing & Payment'},
        {description: 'Daily Reporting'},
        {description: 'Available Anytime'},
        {
          description: 'New Feature 1',
          badge: 'New'
        },

      ]
    },
    {
      plan: 'Pro Model',
      prices: {
        monthly: '$50',
        yearly: '$370',
      },
      features: [
        {description: 'Unlimited Users Access'},
        {description: 'Pro Membership'},
        {description: 'Invoicing & Payment'},
        {description: 'Daily Reporting'},
        {description: 'Available Anytime'},
        {description: 'Mobile App Accessible'},
        {description: '1 on 1 Support'},
        {
          description: 'New Feature 1',
          badge: 'New'
        },
        {
          description: 'New Feature 2',
          badge: 'New'
        },
      ]
    },
  ]

  function toggleFrequency() {
    setChecked((checked) => !checked);
  }

  return (
    <div className="plans-pricing">
      <div className="plans-header">
        <h1>Plans & Pricing</h1>
        <div className="frequency">
          <label htmlFor="monthly" className={checked ? "frequency-checked" : "" }>MONTHLY</label> 
          <label className="switch">
            <input id={checked ? "yearly" : "monthly"} type="checkbox" onClick={toggleFrequency} />
            <span className="slider" />
          </label>
          <label htmlFor="yearly" className={!checked ? "frequency-checked" : "" }>YEARLY</label>
        </div>
      </div>
      <div className="pp-card-section">
        {plans.map(({ plan, prices, features }) =>
            <Card key={plan} frequency={checked} plan={plan} prices={prices} features={features} />
        )}
      </div>
    </div>
  )
}

export default PlansPricing;
