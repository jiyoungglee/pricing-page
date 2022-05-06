import '../Styles/Card.css'

function WorkflowPlus() {
  return(
    <div className="card">
      <div className="plan-price">
        <div className="plan">Workflow Plus</div>
        <div className="price-container">
          <span className="price-left">$29</span>
          <span className="price-right">/MONTH</span>
        </div>
      </div>
      <ul className="features">
        <li>Everything in Workflow, plus...</li>
        <li>White-labelled client experience</li>
        <li>Client forms and questionnaires
          <span className="badge">New</span>
        </li>
        <li>Workflow automations</li>
        <li>Subcontracting (client-mode)</li>
        <li>Calendly integration</li>
        <li>Client portal</li>
        <li>Priority support</li>
      </ul>
      <button className="start-button">START FREE</button>
    </div>
  )
}

export default WorkflowPlus;