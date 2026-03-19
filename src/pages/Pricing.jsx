import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Pricing = () => {
  return (
    <div className="page-wrapper">
      <header className="page-header">
        <div className="container">
          <h1 className="heading-1 page-title">Simple, Transparent Pricing</h1>
          <p className="page-subtitle">
            No hidden fees. No commissions. Just a flat low monthly rate to power your direct orders. Upgrade, downgrade, or cancel anytime.
          </p>
        </div>
      </header>

      <section className="page-content container">
        <div className="pricing-grid">
          {/* Basic Tier */}
          <div className="pricing-card">
            <h3 className="heading-3">Basic</h3>
            <p className="subtitle" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>For small independent restaurants taking their first steps online.</p>
            <div className="price">$50<span>/mo</span></div>
            <ul className="pricing-features">
              <li><CheckCircle2 size={18} color="var(--primary)" /> Custom ordering subdomain</li>
              <li><CheckCircle2 size={18} color="var(--primary)" /> Zero commission on orders</li>
              <li><CheckCircle2 size={18} color="var(--primary)" /> Standard Email Support</li>
              <li><CheckCircle2 size={18} color="var(--primary)" /> Basic Analytics Dashboard</li>
            </ul>
            <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>Start Free Trial</Link>
          </div>

          {/* Pro Tier */}
          <div className="pricing-card popular">
            <span className="popular-badge">Most Popular</span>
            <h3 className="heading-3">Pro</h3>
            <p className="subtitle" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>For growing restaurants that need seamless POS syncing.</p>
            <div className="price">$99<span>/mo</span></div>
            <ul className="pricing-features">
              <li><CheckCircle2 size={18} color="var(--primary)" /> Everything in Basic</li>
              <li><CheckCircle2 size={18} color="var(--primary)" /> Direct POS Integration</li>
              <li><CheckCircle2 size={18} color="var(--primary)" /> Automated SMS Notifications</li>
              <li><CheckCircle2 size={18} color="var(--primary)" /> Advanced Reporting</li>
            </ul>
            <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>Get Pro</Link>
          </div>

          {/* Premium Tier */}
          <div className="pricing-card">
            <h3 className="heading-3">Premium</h3>
            <p className="subtitle" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>For larger restaurants and multi-location franchises.</p>
            <div className="price">$150<span>/mo</span></div>
            <ul className="pricing-features">
              <li><CheckCircle2 size={18} color="var(--primary)" /> Everything in Pro</li>
              <li><CheckCircle2 size={18} color="var(--primary)" /> Multi-location support</li>
              <li><CheckCircle2 size={18} color="var(--primary)" /> Custom Loyalty Programs</li>
              <li><CheckCircle2 size={18} color="var(--primary)" /> 24/7 Priority Support</li>
            </ul>
            <Link to="/contact" className="btn btn-outline" style={{ width: '100%' }}>Contact Sales</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
