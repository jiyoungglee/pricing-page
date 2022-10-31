import '../Styles/AddOns.css'

function AddOns() {
  return (
    <div>
      <div className="heading">Additional Add-On Features</div>
      <div className="add-ons">
        <div className="add-on-container">
          <div className="add-on-left">
            <div className="add-on-type">Feature 1</div>
            <div className="add-on-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>  
          <div className="add-on-right">Free</div>
        </div>
        <div className="add-on-container">
          <div className="add-on-left">
            <div className="add-on-type">Feature 2</div>
            <div className="add-on-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          </div>
          <div className="add-on-right">
            <div className="price-top">$9</div>
            <div className="price-bottom">/MONTH</div>
          </div>
        </div>
        <div className="add-on-container">
          <div className="add-on-left">
            <div className="add-on-type">Feature 3</div>
            <div className="add-on-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
          </div>
          <div className="add-on-right">
            <div className="price-top">$10</div>
            <div className="price-bottom">/MONTH</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddOns;