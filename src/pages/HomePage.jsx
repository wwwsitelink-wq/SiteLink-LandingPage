import { useNavigate } from 'react-router-dom';
import { Wifi, Clock, Users, Building2, ArrowRight, CheckCircle } from 'lucide-react';
import './HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      {/* ── Background ── */}
      <div className="hp-bg">
        <div className="hp-orb hp-orb-1" />
        <div className="hp-orb hp-orb-2" />
        <div className="hp-grid" />
      </div>

      {/* ── Phone Frame ── */}
      <div className="hp-scene">

        {/* Left floating cards */}
        <div className="hp-float-left">
          <div className="hp-float-card" style={{ animationDelay: '0s' }}>
            <div className="hfc-icon"><Users size={18} /></div>
            <div>
              <div className="hfc-val">12,000+</div>
              <div className="hfc-lbl">Verified Workers</div>
            </div>
          </div>
          <div className="hp-float-card" style={{ animationDelay: '0.4s' }}>
            <div className="hfc-icon"><Building2 size={18} /></div>
            <div>
              <div className="hfc-val">850+</div>
              <div className="hfc-lbl">Vendors Registered</div>
            </div>
          </div>
          <div className="hp-float-card" style={{ animationDelay: '0.8s' }}>
            <div className="hfc-icon"><Clock size={18} /></div>
            <div>
              <div className="hfc-val">24 hrs</div>
              <div className="hfc-lbl">Hiring Guarantee</div>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="hp-phone">
          <div className="hp-phone-inner">
            {/* Status bar */}
            <div className="hp-status-bar">
              <span>9:41</span>
              <div className="hp-status-icons">
                <Wifi size={12} />
                <div className="hp-battery" />
              </div>
            </div>

            {/* App content */}
            <div className="hp-app-content">
              {/* Logo */}
              <div className="hp-app-logo">
                <img src="/logo.png" alt="SiteLink" />
              </div>

              {/* Live badge */}
              <div className="hp-live-badge">
                <span className="hp-live-dot" />
                <span>Manpower Network • Live</span>
              </div>

              {/* Main text */}
              <h1 className="hp-app-title">Available<br /><span className="hp-grad-text">Very Soon</span></h1>
              <p className="hp-app-sub">India's fastest manpower hiring platform for construction sites. Hire verified workers in 24 hours.</p>

              {/* Trust pills */}
              <div className="hp-pills">
                {['Workers', 'Vendors', 'Admin Panel'].map(p => (
                  <div key={p} className="hp-pill"><CheckCircle size={11} />{p}</div>
                ))}
              </div>

              {/* Notify button */}
              <button className="hp-notify-btn" onClick={() => navigate('/contact')}>
                Notify Me at Launch <ArrowRight size={15} />
              </button>

              {/* App store row */}
              <div className="hp-stores">
                <div className="hp-store-btn">
                  <span className="hp-store-icon">🍎</span>
                  <div><div className="hp-store-sub">Coming soon on</div><div className="hp-store-name">App Store</div></div>
                </div>
                <div className="hp-store-btn">
                  <span className="hp-store-icon">▶</span>
                  <div><div className="hp-store-sub">Coming soon on</div><div className="hp-store-name">Google Play</div></div>
                </div>
              </div>
            </div>

            {/* Home indicator */}
            <div className="hp-home-bar" />
          </div>
        </div>

        {/* Right floating cards */}
        <div className="hp-float-right">
          <div className="hp-float-card hp-float-card-alt" style={{ animationDelay: '0.2s' }}>
            <div className="hfc-icon"><CheckCircle size={18} /></div>
            <div>
              <div className="hfc-val">48 hrs</div>
              <div className="hfc-lbl">Replacement SLA</div>
            </div>
          </div>
          <div className="hp-float-card hp-float-card-alt" style={{ animationDelay: '0.6s' }}>
            <div className="hfc-icon"><Users size={18} /></div>
            <div>
              <div className="hfc-val">OTP Login</div>
              <div className="hfc-lbl">Simple & Secure</div>
            </div>
          </div>
          <div className="hp-float-card hp-float-card-alt" style={{ animationDelay: '1s' }}>
            <div className="hfc-icon"><Building2 size={18} /></div>
            <div>
              <div className="hfc-val">ID Verified</div>
              <div className="hfc-lbl">Every Worker</div>
            </div>
          </div>
        </div>

      </div>

      {/* ── Bottom tagline ── */}
      <div className="hp-tagline">
        <p>Connecting <span>Workers</span> · <span>Vendors</span> · <span>Construction Sites</span> across India</p>
      </div>
    </div>
  );
}
