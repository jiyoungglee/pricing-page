import '../Styles/HamburgerMenu.css';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import MenuOption from './MenuOption';

function HamburgerMenu({ onClick, menuRef }) {
  const menuOptions = [
    {
      main: "Products",
      options:["Learn More", "Examples","Demo"],
    },
    {
      main: "Connect",
      options:["Email", "Facebook", "Instagram"],
    },
    {
      main: "Partners",
    },
    {
      main: "Pricing",
    },
  ]

  useEffect(() => {
    document.body.style.overflow= 'hidden';
    
    return () => {
      document.body.style.overflow='auto';
    };
  },[]);

  return (
    <div className="menu-view">
      <div className="backdrop" ref={menuRef}></div>
      <div className="hamburger-menu">
        <div className="menu-top">
          <button onClick={onClick}><FontAwesomeIcon icon={faX} size="xl" /></button>
        </div>
        <ul className="hamburger-menu-options">
          {menuOptions.map((menuOption) => {
            if ('options' in menuOption) {
              return (
                <MenuOption key={menuOption.main} text={menuOption.main} dropdown={menuOption.options} />
              )
            } else {
              return (
                <li><a className="menu-link" href="#examples">{menuOption.main}</a></li>
              )
            }
          }

          )}
        </ul>
        <div className="menu-bottom">
          <button>Get started for FREE</button>
        </div>
      </div>
    </div>
  )
}

export default HamburgerMenu;
