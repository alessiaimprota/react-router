//importo navlink perché quello solo mi serve al momento

import { NavLink } from "react-router-dom";
//inserisco le pagine
function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">About us</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
