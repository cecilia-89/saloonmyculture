import { useState } from "react";
import { Link } from 'react-scroll';
import logo from '/images/sanloonmyculture-removebg-preview.png'
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="salon my culture logo"/>
      </div>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        {["About Us", "Why Us", "Services", "Testimonials", "Book Now"].map((item) => (
          <div key={item} style={{cursor: 'pointer'}}>
            <Link 
            onClick={() => setIsOpen(false)}
            smooth={true} 
            duration={500} 
            to={item.toLowerCase().replace(/\s+/g, "")} 
            >{item}</Link>
          </div>
        ))}
      </nav>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>
    </header>
  );
};

export default Header;
