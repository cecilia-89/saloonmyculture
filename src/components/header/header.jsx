import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";
import logo from '/images/sanloonmyculture-removebg-preview.png'
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()
  const isHome = location?.pathname === '/'


  return (
    <header className="header">
      <div className="logo">
        <Link to="/"><img src={logo} alt="salon my culture logo"/></Link>
      </div>

      {isHome? (
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        {["About Us", "Why Us", "Services", "Gallery", "Testimonials", "Book Now"].map((item) => (
          <div key={item} style={{cursor: 'pointer'}}>
            <ScrollLink 
            onClick={() => setIsOpen(false)}
            smooth={true} 
            duration={500} 
            to={item.toLowerCase().replace(/\s+/g, "")} 
            >{item}</ScrollLink>
          </div>
        ))}
      </nav> ): null
      }

    
      {isHome === '/'? (
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>) : null
      }
      
    </header>
  );
};

export default Header;
