import '../Styles/AddOns.css'

function AddOns() {
  return (
    <div>
      <div className="heading">Super charge your work with add-ons</div>
      <div className="add-ons">
        <div className="add-on-container">
          <div className="add-on-left">
            <div className="add-on-type">Collaborators</div>
            <div className="add-on-description">Invite other users to specific projects for limited access and functionality.</div>
          </div>  
          <div className="add-on-right">Free</div>
        </div>
        <div className="add-on-container">
          <div className="add-on-left">
            <div className="add-on-type">Partners</div>
            <div className="add-on-description">Invite other users for full account access and company management.</div>
          </div>
          <div className="add-on-right">
            <div className="price-top">$9</div>
            <div className="price-bottom">/MONTH</div>
          </div>
        </div>
        <div className="add-on-container">
          <div className="add-on-left">
            <div className="add-on-type">Bonsai Tax</div>
            <div className="add-on-description">Track expenses, identify write-offs, and estimate quarterly taxes easily.</div>
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