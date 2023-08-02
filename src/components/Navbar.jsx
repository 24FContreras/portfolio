import "../assets/css/Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="nav-brand">FC</p>
      <ul>
        <li className="navlink">Home</li>
        <li className="navlink">About</li>
        <li className="navlink">Projects</li>
        <li className="navlink">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
