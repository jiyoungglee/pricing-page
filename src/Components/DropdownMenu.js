import '../Styles/DropdownMenu.css';

function DropdownMenu({ options }) {
  return(
    <ul className="dropdown-menu">
      {options.map((option) => 
        <li key={option}>{option}</li>
      )}
    </ul>
  )
};

export default DropdownMenu;