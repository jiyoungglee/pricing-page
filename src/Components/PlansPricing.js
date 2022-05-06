import '../Styles/PlansPricing.css'

function PlansPricing() {
  return (
    <div className="plans-header">
      <h1>Plans & Pricing</h1>
      <div className="frequency">
        <span> MONTHLY </span> 
        <label class="switch">
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
        <span> YEARLY </span>
      </div>
    </div>
  )
}

export default PlansPricing;