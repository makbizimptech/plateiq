import { Mail, Phone, MapPin } from 'lucide-react';
import './Pages.css';

const Contact = () => {
  return (
    <div className="page-wrapper">
      <header className="page-header">
        <div className="container">
          <h1 className="heading-1 page-title">Get in Touch</h1>
          <p className="page-subtitle">
            Whether you want a demo or just have a few questions, our team is ready to help you upgrade your ordering experience.
          </p>
        </div>
      </header>

      <section className="page-content container">
        <div className="contact-container">
          <div className="contact-info">
            <h2 className="heading-2" style={{ marginBottom: '1rem' }}>Let's talk about your restaurant's future.</h2>
            <div className="info-item">
              <Mail className="text-primary" size={24} />
              <div>
                <h4 style={{ fontWeight: 600 }}>Email Sales</h4>
                <p className="subtitle">sales@plateiq.com</p>
              </div>
            </div>
            <div className="info-item">
              <Phone className="text-primary" size={24} />
              <div>
                <h4 style={{ fontWeight: 600 }}>Call Us</h4>
                <p className="subtitle">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin className="text-primary" size={24} />
              <div>
                <h4 style={{ fontWeight: 600 }}>Office</h4>
                <p className="subtitle">123 Tech Boulevard<br />San Francisco, CA 94105</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" className="form-control" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="restaurant">Restaurant Name</label>
              <input type="text" id="restaurant" className="form-control" placeholder="The Great Burger" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Work Email</label>
              <input type="email" id="email" className="form-control" placeholder="john@restaurant.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">How can we help?</label>
              <textarea id="message" className="form-control" rows={4} placeholder="Tell us about your current POS setup..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
