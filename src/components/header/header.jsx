import { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">MyWebsite</div>
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        {["About Us", "Why Us", "Services", "Testimonials", "Book Now"].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "")}`} onClick={() => setIsOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>
    </header>
  );
};

export default Header;
