
import logo from '../assets/logo.png'
import "../component/Nav.css"
import {Link} from 'react-router-dom'
const Nav = () => {
  return (

<nav>
    <div className='logo'>
        <img className='logo1'src= {logo} />
        <span>Nature</span>
        <small>Conservancy</small>
    </div>
    

      <div className="navlink">
        <ul>
            <li><Link to="/">get involved</Link></li>
            <li><Link to = "/bout">membership</Link></li>
            <li><Link to="/admissions">about us</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/longing">login</Link></li>
        </ul>
       </div>

    </nav>
  )
}

export default Nav
