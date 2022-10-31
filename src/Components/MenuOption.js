import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
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
          <FontAwesomeIcon icon={faAngleRight} rotation={dropdownOpen ? 90 : 0} />
        </button>
      </li>
      {(dropdownOpen && dropdown !==null) && <DropdownMenu options={dropdown} />}
    </div>
  )
};

export default MenuOption;