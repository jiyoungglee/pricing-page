import '../Styles/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


function NavBar() {
  return(
    <div className="navbar">
      <img 
        src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
        width="150"
        alt="Bonsai logo"
      />
      <ul className="menu">
        <li className="option">
          <a className="link" href="#Product">Product
            <FontAwesomeIcon className="carat" icon={faAngleDown} />
          </a>
          <div className="dropdown-content">
            <div className="dropdown-option">
              <div className="dropdown-option-title">Bonsai Workflow</div>
              <div className="dropdown-option-desc">Look professional, win more clients and manage your business from one place</div>
            </div>
            <div className="dropdown-option">
              <div className="dropdown-option-title">Bonsai Tax</div>
              <div className="dropdown-option-desc">Track expenses, maximize tax write-offs, and estimate taxes without the headache</div>
            </div>
            <div className="dropdown-option">
              <div className="dropdown-option-title">Bonsai Cash</div>
              <div className="dropdown-option-desc">Bonsai's all-in-one financial hub: No fees and lightning fast payouts</div>
            </div>
          </div>
        </li>
        <li className="option">
          <a className="link" href="#Templates">Templates
            <FontAwesomeIcon className="carat" icon={faAngleDown} />
          </a>
        </li>
        <li className="option"><a className="link" href="#Pricing">Pricing</a></li>
        <li className="option"><a className="link" href="#Reviews">Reviews</a></li>
      </ul>
      <div className="buttons">
        <button type="button" className="button">LOG IN</button>
        <button type="button" className="button">START FREE</button>
      </div>
    </div>
  )
}

export default NavBar;