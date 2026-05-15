import { Store, Users, TrendingUp } from 'lucide-react';
import './Pages.css';

const About = () => {
  return (
    <div className="page-wrapper">
      <header className="page-header">
        <div className="container">
          <h1 className="heading-1 page-title">About PlatIQ</h1>
          <p className="page-subtitle">
            Built by restaurant enthusiasts, for restaurant owners.
          </p>
        </div>
      </header>

      <section className="page-content container">
        <div className="about-mission">
          <h2 className="text-primary">Our Mission</h2>
          <p className="subtitle" style={{ fontSize: '1.25rem' }}>
            To help restaurants thrive in the digital age by providing them with the modern infrastructure to accept direct orders—allowing them to grow without surrendering huge margins to third-party delivery apps.
          </p>
        </div>

        <div className="feature-block" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: 0 }}>
          <div className="step-card">
            <div className="step-icon-wrapper"><Store size={32} /></div>
            <h3 className="heading-3">Reclaim Your Identity</h3>
            <p className="subtitle" style={{ marginTop: '0.5rem' }}>
              Your brand is everything. Don't be just a listing on a delivery app directory. Build a direct relationship with your customers.
            </p>
          </div>
          <div className="step-card">
            <div className="step-icon-wrapper"><TrendingUp size={32} /></div>
            <h3 className="heading-3">Keep Your Money</h3>
            <p className="subtitle" style={{ marginTop: '0.5rem' }}>
              The current third-party model is broken. 30% commissions are unsustainable for independent kitchens. PlatIQ is the solution.
            </p>
          </div>
          <div className="step-card">
            <div className="step-icon-wrapper"><Users size={32} /></div>
            <h3 className="heading-3">Own Your Data</h3>
            <p className="subtitle" style={{ marginTop: '0.5rem' }}>
              Stop renting your customers. We give you full access to your customer data so you can market to them directly and build loyalty.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
