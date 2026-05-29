import logo from '../../assets/logo.png';
import './Navbar.css';
import { useState} from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";


function Navbar(){

    const [active , setActive] = useState("Home");
    const [menuOpen, setMenuopen] = useState(false);
    
    const navitems = ["Home", "Programs", "Services", "Events", "Hiring", "About Us", "Contact"];


    return ( 
        
 <nav className = "navbar">
    <div className = "nav-container">
      
      <div className="togglebtn"
        onClick={() => setMenuopen(!menuOpen)}>
      {menuOpen ? <IoClose /> : <HiOutlineMenuAlt3 />}
      </div>


        <div className = "logo">
           <img src = {logo} alt = "logo" className = "logo"/> 
        </div>
         
        <ul className={`navlinks ${menuOpen ? "showmenu" : ""}`}>
          {navitems.map((item) => (
            <li
                 key={item}
                  className={active === item ? "active" : ""}
                  onClick={() => {
                   setActive(item);
                  setMenuopen(false);
            }}>

              {item}

              </li>
             ))}

        <button className = "signup-btn">Sign - up</button>
        
        </ul>


    </div>
</nav>


    );
}

export default Navbar;