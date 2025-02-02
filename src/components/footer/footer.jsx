import "./footer.css";
import { FaFacebook, FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Call Us Now</h3>
          <p>08038999827</p>
          <p>09160007711</p>
        </div>

        <div className="address">
          <h3>Visit Us</h3>
          <p>No 4 Morija Close Off Ademola Adetokunbo Crescent, behind Oti Carpets, Wuse 2, Abuja, Nigeria.</p>
        </div>

        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/14ry2SjJR9/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>

            <a href="https://wa.me/message/L2NVJYKOQMIHD1" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.tiktok.com/@salonmyculture?_t=ZM-8tR5YtKKTWH&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://www.instagram.com/salonmyculture.ng?igsh=Ymozb2hkaWozNGRl&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SalonMyCulture. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
