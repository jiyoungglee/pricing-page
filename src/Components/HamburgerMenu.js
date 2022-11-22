import '../Styles/HamburgerMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import MenuOption from './MenuOption';

function HamburgerMenu({ setModalOpen, menuRef }) {
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

  function closeMenu() {
    setModalOpen(false)
    document.body.style.overflow = null;
    const scrollPosition = document.body.style.top;
    document.body.style.top = null;
    document.body.style.position = null;
    document.body.style.width = null;
    window.scrollTo(0,parseInt(scrollPosition || '0', 10) * -1);
  }

  return (
    <div className="menu-view">
      <div className="backdrop" ref={menuRef}></div>
      <div className="hamburger-menu">
        <div className="menu-top">
          <button onClick={closeMenu}><FontAwesomeIcon icon={faX} size="xl" /></button>
        </div>
        <ul className="hamburger-menu-options">
          {menuOptions.map((menuOption) => {
            if ('options' in menuOption) {
              return (
                <MenuOption key={menuOption.main} text={menuOption.main} dropdown={menuOption.options} />
              )
            } else {
              return (
                <li><a className="menu-link" href={`#${menuOption.main}`}>{menuOption.main}</a></li>
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
