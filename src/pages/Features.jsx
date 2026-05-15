import { Link } from 'react-router-dom';
import { Smartphone, Link as LinkIcon, MenuSquare, BarChart, Truck } from 'lucide-react';
import './Pages.css';

const Features = () => {
  return (
    <div className="page-wrapper">
      <header className="page-header">
        <div className="container">
          <h1 className="heading-1 page-title">Power Your Restaurant</h1>
          <p className="page-subtitle">
            From smart ordering to seamless kitchen workflows, PlateiQ gives you all the tools required to scale without the commissions.
          </p>
        </div>
      </header>

      <section className="page-content container">
        <div className="feature-block">
          <div>
            <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><Smartphone size={40} /></div>
            <h2 className="heading-2">Order Management</h2>
            <p className="subtitle" style={{ marginTop: '1rem' }}>
              Accept, track, and fulfill direct online orders in real-time. Our smart dashboard alerts your kitchen the moment an order is placed, and automatically updates customers on their order status via SMS and email.
            </p>
          </div>
          <div className="feature-block-img" style={{ padding: '0', background: 'transparent', border: 'none', display: 'flex', alignItems: 'center' }}>
            <img src="/orders_dashboard.png" alt="Live Orders Dashboard" style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid var(--border)' }} />
          </div>
        </div>

        <div className="feature-block">
          <div>
            <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><LinkIcon size={40} /></div>
            <h2 className="heading-2">POS Integration</h2>
            <p className="subtitle" style={{ marginTop: '1rem' }}>
              No more manual entry. PlateiQ integrates seamlessly with leading Point of Sale systems including Square, Toast, Clover, and Lightspeed. Orders flow directly into your existing workflow.
            </p>
          </div>
          <div className="feature-block-img" style={{ padding: '0', background: 'transparent', border: 'none', display: 'flex', alignItems: 'center' }}>
            <img src="/pos_sync.png" alt="Two-Way Sync POS Integration" style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid var(--border)' }} />
          </div>
        </div>

        <div className="feature-block">
          <div>
            <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><MenuSquare size={40} /></div>
            <h2 className="heading-2">Menu Management</h2>
            <p className="subtitle" style={{ marginTop: '1rem' }}>
              Manage your entire menu from a single dashboard. Update prices, add seasonal specials, or mark items out of stock instantly across all your custom ordering channels.
            </p>
          </div>
          <div className="feature-block-img" style={{ padding: '0', background: 'transparent', border: 'none', display: 'flex', alignItems: 'center' }}>
            <img src="/menu_management.png" alt="Centralized Menu Management" style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid var(--border)' }} />
          </div>
        </div>

        <div className="feature-block">
          <div>
            <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><BarChart size={40} /></div>
            <h2 className="heading-2">Analytics & Reports</h2>
            <p className="subtitle" style={{ marginTop: '1rem' }}>
              Understand your best-selling items, busiest hours, and customer retention metrics. Access detailed reports that empower you to make data-driven decisions and boost profitability.
            </p>
          </div>
          <div className="feature-block-img" style={{ padding: '0', background: 'transparent', border: 'none', display: 'flex', alignItems: 'center' }}>
            <img src="/analytics_dashboard.png" alt="Actionable Insights and Analytics" style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid var(--border)' }} />
          </div>
        </div>

        <div className="feature-block">
          <div>
            <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><Truck size={40} /></div>
            <h2 className="heading-2">Commission-Free Delivery</h2>
            <p className="subtitle" style={{ marginTop: '1rem' }}>
              Don't have your own drivers? No problem. PlateiQ seamlessly dispatches drivers from local networks for a flat, predictable fee. Offer delivery to your customers without sacrificing 30% of your order value.
            </p>
          </div>
          <div className="feature-block-img" style={{ padding: '0', background: 'transparent', border: 'none', display: 'flex', alignItems: 'center' }}>
            <img src="/driver_dispatch.png" alt="Flat-Fee Delivery Dispatch" style={{ width: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid var(--border)' }} />
          </div>
        </div>
      </section>

      <section className="features-cta-section container" style={{ textAlign: 'center', padding: '4rem 0', marginTop: '2rem', borderTop: '1px solid var(--border)' }}>
        <h2 className="heading-2" style={{ marginBottom: '1rem' }}>Ready to Take Back Control?</h2>
        <p className="subtitle" style={{ marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Join the restaurants that have switched to PlateiQ and start saving on every order today.
        </p>
        <Link to="/contact" className="btn btn-primary">Book a Demo</Link>
      </section>
    </div>
  );
};

export default Features;
