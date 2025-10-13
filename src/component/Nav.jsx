
import tnc from '../assets/tnc.svg'
import "../component/Nav.css"
import {Link} from 'react-router-dom'
const Nav = () => {
  return (

<nav>
    <div className='logo'>
        <img className='logo1'src= {tnc} />
        <span>Nature</span>
        <small>Conservancy</small>

      <div className='country'>
         
        <select name="country">
                <option value="All majors">watch</option>
                <option value="Economics">full episodes</option>
            </select>
      </div>

  </div>
    

      <div className="navlink">
        <ul>
            <li><Link to="/">join us</Link></li>
            <li><Link to = "/about">membership</Link></li>
            <li><Link to="/admissions">about us</Link></li>
            <li><Link to="/contact">contact</Link></li>
            <li><Link to="/longing">login</Link></li>
        </ul>
       </div>


    </nav>
  )
}

export default Nav
