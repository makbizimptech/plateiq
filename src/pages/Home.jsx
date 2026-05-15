import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Store, LineChart, Cpu, ShoppingBag } from 'lucide-react';
import SavingsCalculator from '../components/SavingsCalculator';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <span className="hero-badge">0% Commission on Orders. Forever.</span>
          <h1 className="heading-1 hero-title">
            Take Back Control of Your <span className="text-primary">Restaurant Delivery</span>
          </h1>
          <p className="subtitle hero-subtitle">
            PlatIQ helps restaurant brands control ordering, streamline operations, and grow customer relationships from one platform.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Book a Demo <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
            <Link to="/features" className="btn btn-outline">
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Savings Calculator Section */}
      <SavingsCalculator />

      {/* How it Works Section */}
      <section className="steps-section">
        <div className="container">
          <div className="text-center">
            <h2 className="heading-2">One Connected System</h2>
            <p className="subtitle" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
              Everything connected. Nothing fragmented.
            </p>
          </div>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon-wrapper">
                <Store size={32} />
              </div>
              <h3 className="heading-3 step-title">1. We Build Your Brand</h3>
              <p className="subtitle">
                Get a custom-branded ordering website on your own subdomain that matches your restaurant's identity.
              </p>
            </div>
            <div className="step-card">
              <div className="step-icon-wrapper">
                <Cpu size={32} />
              </div>
              <h3 className="heading-3 step-title">2. Connect Your POS</h3>
              <p className="subtitle">
                Seamlessly sync your existing menu, prices, and inventory directly from your Point of Sale system.
              </p>
            </div>
            <div className="step-card">
              <div className="step-icon-wrapper">
                <LineChart size={32} />
              </div>
              <h3 className="heading-3 step-title">3. Keep Your Profit</h3>
              <p className="subtitle">
                Customers order directly from you. No 30% third-party commissions. Watch your margins grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-content">
              <h2 className="heading-2">Everything you need to scale direct orders</h2>
              <p className="subtitle">
                Stop paying exorbitant fees to delivery apps. PlatIQ provides the premium tools you need to run your own show.
              </p>
              <div className="feature-list">
                {[
                  'Real-time order management dashboard',
                  'Seamless POS system integration',
                  'Customer data ownership & reporting',
                  'Commission-free driver dispatch',
                  'Mobile-optimized ordering experience'
                ].map((feature, i) => (
                  <div key={i} className="feature-item">
                    <CheckCircle2 size={24} className="feature-item-icon" />
                    <span style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-dark)' }}>{feature}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/features" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Explore All Features
                </Link>
              </div>
            </div>
            <div className="feature-image">
              <div style={{ background: 'var(--background)', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
                <ShoppingBag size={64} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
                <h3 className="heading-3">Zero Commission Model</h3>
                <p className="subtitle" style={{ marginTop: '1rem' }}>
                  Instead of taking up to 30% per order, we charge a flat, predictable monthly fee starting at just $50/mo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="heading-1 cta-title" style={{ color: 'white' }}>Ready to boost your margins?</h2>
          <p className="subtitle" style={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px', margin: '0 auto' }}>
            Join thousands of restaurants who have taken back control of their online ordering with PlatIQ.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="btn btn-white">Get Your Ordering System</Link>
            <Link to="/contact" className="btn btn-outline-white">Talk to Sales</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
