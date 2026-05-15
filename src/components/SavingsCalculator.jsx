import { useState } from 'react';
import './SavingsCalculator.css';

const SavingsCalculator = () => {
  const [monthlySales, setMonthlySales] = useState(25000);

  const competitorFee = (monthlySales * 0.3).toFixed(0);
  const plateIqFee = 50;
  const savings = competitorFee - plateIqFee;

  return (
    <div className="calculator-section">
      <div className="container">
        <div className="calculator-card">
          <h2 className="heading-2 text-center" style={{ marginBottom: '1rem' }}>See How Much You'll Save</h2>
          <p className="subtitle text-center" style={{ marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Don't let third-party apps eat your margins. Calculate your savings with PlatIQ's 0% commission direct ordering.
          </p>
          
          <div className="calc-grid">
            <div className="calc-input-section">
              <label className="calc-label">Monthly Online Delivery Sales</label>
              <div className="calc-amount">${monthlySales.toLocaleString()}</div>
              <input 
                type="range" 
                min="5000" 
                max="100000" 
                step="1000" 
                value={monthlySales} 
                onChange={(e) => setMonthlySales(Number(e.target.value))}
                className="calc-slider"
              />
              <div className="calc-slider-labels">
                <span>$5K</span>
                <span>$100K</span>
              </div>
            </div>

            <div className="calc-results-section">
              <div className="calc-compare">
                <div className="calc-competitor">
                  <div className="calc-result-label">Delivery Apps (30%)</div>
                  <div className="calc-result-value">${Number(competitorFee).toLocaleString()}</div>
                </div>
                <div className="calc-vs">vs</div>
                <div className="calc-plateiq">
                  <div className="calc-result-label">PlatIQ (Flat Fee)</div>
                  <div className="calc-result-value">${plateIqFee}</div>
                </div>
              </div>
              <div className="calc-total-savings">
                <div className="savings-label">Your Monthly Savings</div>
                <div className="savings-value text-primary">+${savings.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsCalculator;
