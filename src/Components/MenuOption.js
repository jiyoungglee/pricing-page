import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../Styles/MenuOption.css';
import DropdownMenu from './DropdownMenu';

function MenuOption({ text, dropdown }){
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggleDropdown(){
    setDropdownOpen((dropdownOpen) => !dropdownOpen);
  }

  return(
    <div>
      <li>
        <button className="dropdown-button" onClick={toggleDropdown}>
          {text}
          <FontAwesomeIcon icon={faAngleDown} rotation={dropdownOpen ? 0 : 90} />
        </button>
      </li>
      {(dropdownOpen && dropdown !==null) && <DropdownMenu options={dropdown} />}
    </div>
  )
};

export default MenuOption;