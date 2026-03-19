import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="PlateiQ Icon" style={{ height: '32px', width: 'auto' }} />
          <span>Platei<span className="text-primary">Q</span></span>
        </Link>
        <div className="navbar-links">
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        <div className="navbar-actions">
          <Link to="/contact" className="btn btn-primary">Start Free Trial</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
