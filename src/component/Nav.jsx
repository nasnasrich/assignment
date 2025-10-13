import tnc from '../assets/tnc.svg';
import "../component/Nav.css";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo1" src={tnc} alt="Nature Conservancy Logo" />
        <div className="logo-text">
          <span>Nature</span>
          <small>Conservancy</small>
        </div>
      </div>

      <div className="country">
        <select name="country">
          <option value="watch">Watch</option>
          <option value="full-episodes">Full Episodes</option>
        </select>
      </div>

      <div className="navlink">
        <ul>
          <li><Link to="/">Join Us</Link></li>
          <li><Link to="/about">Membership</Link></li>
          <li><Link to="/admissions">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
