import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink activeclassname="active" className="nav-item" to="/">
        Dashboard
      </NavLink>
      <NavLink activeclassname="active" className="nav-item" to="/departments">
        Departments
      </NavLink>
      <NavLink activeclassname="active" className="nav-item" to="/products">
        Products
      </NavLink>
    </nav>
  );
}
