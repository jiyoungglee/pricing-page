import '../Styles/Card.css';

function Card({ frequency, plan, prices, features }) {
  return (
    <div className="card">
      <div className="plan-price">
        <div className="plan">{ plan }</div>
        <div className="price-container">
          <span className="price-left">{ frequency ? prices.yearly : prices.monthly }</span>
          <span className="price-right">{ frequency ? "/ YEAR" : "/ MONTH" }</span>
        </div>
      </div>
      <ul className="features">
        {features.map((feature) => {
          if ('badge' in feature) {
            return (
              <li key={feature.description}>
                {feature.description}
                <span className="badge">{feature.badge}</span>
              </li>
            )
          } else {
            return (
              <li key={feature.description}>{feature.description}</li>
            )
          }
        })}
      </ul>
      <button className="start-button">START FREE</button>
    </div>
  )
}

export default Card;
