import '../Styles/Card.css'

function Workflow({ frequency }) {
  return(
    <div className="card">
      {frequency && <div className="banner">POPULAR</div>}
      <div>
        <div className="plan">Workflow</div>
        <div className="price-container">
          <span className="price-left">{ frequency ? "$192" : "$19" }</span>
          <span className="price-right">{ frequency ? "/YEAR" : "/MONTH" }</span>
        </div>
      </div>
      <ul className="features">
        <li>Unlimited Clients & Project</li>
        <li>Proposal</li>
        <li>Contract</li>
        <li>Invoicing & Payment</li>
        <li>Client CR</li>
        <li>Project Management</li>
        <li>Task & Time Tracking</li>
        <li>iOS, Android, Chrome, & Mac Apps</li>
      </ul>
      <button className="start-button">START FREE</button>
    </div>
  )
}

export default Workflow;