import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Users, Building2, TrendingUp, CheckCircle, Star } from 'lucide-react';
import './HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();

  const testimonials = [
    { name: 'Rajesh Kumar', role: 'Project Manager, BuildCorp',   text: 'SiteLink transformed how we verify workers. The audit trail is impeccable.',              rating: 5 },
    { name: 'Priya Sharma', role: 'HR Director, ConstructPro',    text: 'Compliance reporting used to take days. Now it takes minutes.',                            rating: 5 },
    { name: 'Amit Patel',   role: 'Site Supervisor, InfraTech',   text: 'The vendor verification system saved us from multiple compliance issues.',                  rating: 5 },
  ];

  return (
    <div className="home-page">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-grid" />
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <Shield size={14} />
            <span>India's #1 Construction Manpower Network</span>
          </div>
          <h1 className="hero-title">
            Connect. Verify.<br />
            <span className="hero-gradient-text">Build with Confidence.</span>
          </h1>
          <p className="hero-subtitle">
            SiteLink is the trusted manpower network connecting verified construction professionals,
            contractors, and project managers across India's fastest-growing infrastructure sector.
          </p>
          <div className="hero-actions">
            <button className="hp-btn-primary" onClick={() => navigate('/audit')}>
              Explore Dashboard <ArrowRight size={18} />
            </button>
            <button className="hp-btn-outline" onClick={() => navigate('/features')}>
              See Features
            </button>
          </div>
          <div className="hero-trust">
            {['ISO Certified', 'BOCW Compliant', 'PF & ESI Verified'].map(t => (
              <div key={t} className="trust-badge">
                <CheckCircle size={14} /><span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-img-stack">
            {[
              { src: '/11.jpg', label: 'Construction Site Workers', delay: '0s'    },
              { src: '/22.jpg', label: 'Engineer Reviewing Plans',  delay: '0.15s' },
              { src: '/33.jpg', label: 'Building Construction',      delay: '0.3s'  },
            ].map(({ src, label, delay }) => (
              <div key={label} className="hero-img-card" style={{ animationDelay: delay }}>
                <img src={src} alt={label} />
                <div className="hero-img-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why SiteLink ── */}
      <section className="hp-why-section">
        <div className="hp-container">
          <div className="hp-section-header">
            <span className="hp-section-tag">Why SiteLink</span>
            <h2>Built for the Construction Industry</h2>
            <p>Every feature designed around the real challenges of managing construction manpower at scale.</p>
          </div>
          <div className="hp-why-grid">
            {[
              { icon: Shield,    title: 'Real-time Verification', desc: 'Instant background checks, skill certifications, and document verification for every worker.' },
              { icon: Users,     title: 'Manpower Network',       desc: 'Access to 12,000+ verified construction professionals across 50+ trade categories.' },
              { icon: Building2, title: 'Vendor Management',      desc: 'Approved contractor database with compliance history and performance ratings.' },
              { icon: TrendingUp,title: 'Audit Reports',          desc: 'Automated compliance reports for BOCW, PF, ESI, and labour law requirements.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="hp-why-card">
                <div className="hp-why-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="hp-testimonials-section">
        <div className="hp-container">
          <div className="hp-section-header">
            <span className="hp-section-tag">Testimonials</span>
            <h2>Trusted by Industry Leaders</h2>
          </div>
          <div className="hp-testimonials-grid">
            {testimonials.map(t => (
              <div key={t.name} className="hp-testimonial-card">
                <div className="hp-t-stars">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="#e8621a" color="#e8621a" />)}
                </div>
                <p className="hp-t-text">"{t.text}"</p>
                <div className="hp-t-author">
                  <div className="hp-t-avatar">{t.name[0]}</div>
                  <div>
                    <div className="hp-t-name">{t.name}</div>
                    <div className="hp-t-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="hp-cta-section">
        <div className="hp-container">
          <div className="hp-cta-box">
            <div className="hp-cta-orb" />
            <h2>Ready to Streamline Your Workforce?</h2>
            <p>Join 500+ construction companies already using SiteLink to manage compliance effortlessly.</p>
            <div className="hp-cta-actions">
              <button className="hp-btn-primary" onClick={() => navigate('/contact')}>Get Started Today <ArrowRight size={18} /></button>
              <button className="hp-btn-ghost" onClick={() => navigate('/about')}>Learn More</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
