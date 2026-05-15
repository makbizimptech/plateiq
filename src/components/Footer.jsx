import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/logo1.png" alt="PlatIQ Icon" style={{ height: '56px', width: 'auto', backgroundColor: '#FFFFFF', padding: '4px', borderRadius: '4px' }} />
          </Link>
          <p className="footer-tagline">Run Better. Grow Smarter.</p>
          <div className="footer-socials">
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links-group">
          <h4 className="footer-heading">Product</h4>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/">Integrations</Link>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-heading">Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Careers</Link>
        </div>

        <div className="footer-links-group">
          <h4 className="footer-heading">Legal</h4>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PlatIQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
