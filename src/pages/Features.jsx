import { Smartphone, Link as LinkIcon, MenuSquare, BarChart } from 'lucide-react';
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
          <div className="feature-block-img">
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-light)' }}>Live Orders Dashboard</h3>
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
          <div className="feature-block-img">
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-light)' }}>Two-Way Sync</h3>
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
          <div className="feature-block-img">
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-light)' }}>Centralized Menu</h3>
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
          <div className="feature-block-img">
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-light)' }}>Actionable Insights</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
