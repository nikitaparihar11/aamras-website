import './Footer.css'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <h2>🥭 Aamras</h2>
          <p>Pure mango bliss from the heart of Gujarat, served with love since generations.</p>
        </div>

        <div className="footer__links">
          <h4>Menu</h4>
          <ul>
            <li>Classic Aamras</li>
            <li>Kesar Aamras</li>
            <li>Aamras Puri</li>
            <li>Mango Lassi</li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>About</h4>
          <ul>
            <li>Our Story</li>
            <li>Farm to Table</li>
            <li>Gujarati Culture</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer__links">
          <h4>Follow Us</h4>
          <div className="footer__socials">
            <button><FaFacebookF /></button>
            <button><FaInstagram /></button>
            <button><FaTwitter /></button>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© 2026 </p>
      </div>
    </footer>
  )
}

export default Footer