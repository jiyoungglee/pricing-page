import { useState, useRef, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';
import '../Styles/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAngleDown, faFaceSmileWink } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  const [modalOpen, setModalOpen] = useState(false);
  const menuRef = useRef(null);

  function toggleMenu() {
    setModalOpen(true);
    document.body.style.overflow= 'hidden';
    document.body.style.top=`-${window.scrollY}px`;
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  } 

  useEffect(() => {
    function clickHandler(event) {
      if (menuRef.current && menuRef.current.contains(event.target)) {
        toggleMenu();
      }
    }
    document.addEventListener('click', clickHandler)
    return () => {
      document.removeEventListener('click', clickHandler)
    }
  },[modalOpen])

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <FontAwesomeIcon icon={faFaceSmileWink} inverse />
        </div>
        <ul className="navbar-options">
          <li className="option">
            <a className="link" href="#Product">Product
              <FontAwesomeIcon className="carat" icon={faAngleDown} inverse/>
            </a>
            <div className="dropdown-content">
              <div className="dropdown-option">
                <div className="dropdown-text">
                  <div className="dropdown-option-title">Basic Model</div>
                  <div className="dropdown-option-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                </div>
              </div>
              <div className="dropdown-option">
                <div className="dropdown-text">
                  <div className="dropdown-option-title">Plus Model</div>
                  <div className="dropdown-option-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                </div>
              </div>
              <div className="dropdown-option">
                <div className="dropdown-text">
                  <div className="dropdown-option-title">Pro Model</div>
                  <div className="dropdown-option-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                </div>
              </div>
            </div>
          </li>
          <li><a href="#examples">Examples</a></li>
          <li><a href="#demo">Demo</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul className="navbar-options">
          <li className="option">
            <a className="link" href="#learn">
              Connect
              <FontAwesomeIcon className="carat" icon={faAngleDown} inverse />
            </a>
            <div className="dropdown-content">
              <div className="dropdown-option">
                <div className="dropdown-text">
                  <div className="dropdown-option-title">Facebook</div>
                </div>
              </div>
              <div className="dropdown-option">
                <div className="dropdown-text">
                  <div className="dropdown-option-title">Instagram</div>
                </div>
              </div>
              <div className="dropdown-option">
                <div className="dropdown-text">
                  <div className="dropdown-option-title">Email</div>
                </div>
              </div>
            </div>
          </li>
          <li><a href="#partners">Partners</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><button>Get Started Now</button></li>
        </ul>
        <button aria-label="Menu Button" className="menu-mobile" onClick={toggleMenu}><FontAwesomeIcon icon={faBars} inverse/></button>
      </div>
      { modalOpen && <HamburgerMenu setModalOpen={setModalOpen} menuRef={menuRef} /> }
    </div>
  )
};

export default NavBar;
