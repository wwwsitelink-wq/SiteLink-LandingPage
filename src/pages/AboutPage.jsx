import { useNavigate } from 'react-router-dom';
import { Shield,Users, Building2, Clock, CheckCircle, ArrowRight, Smartphone } from 'lucide-react';
import './AboutPage.css';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="ah-orb ah-orb-1" />
          <div className="ah-orb ah-orb-2" />
        </div>
        <div className="container">
          <div className="about-hero-content">
            <span className="section-tag">About SiteLink</span>
            <h1>India's Fastest<br /><span className="gradient-text">Manpower Hiring Platform</span></h1>
            <p>SiteLink is a manpower hiring application built for India's construction industry. We connect verified workers with vendors and construction companies — delivering confirmed manpower within 24 hours and replacements within 48 hours.</p>
          </div>
        </div>
      </section>

      {/* ── What is SiteLink ── */}
      <section className="about-what-section">
        <div className="container">
          <div className="about-what-grid">
            <div className="about-what-content">
              <span className="section-tag">What We Do</span>
              <h2>A Platform Built Around One Promise</h2>
              <p>SiteLink is a request-based manpower hiring system. Vendors post their requirements — role, quantity, location, and duration — and our admin team matches them with verified workers from our database, confirming deployment within 24 hours.</p>
              <p>If a worker leaves or underperforms, vendors can request a replacement and we deliver a new worker within 24–48 hours, with a documented reason.</p>
              <p>Every worker on SiteLink is ID-verified, skill-checked, and admin-approved before being added to our active pool — so vendors always get reliable, trusted manpower.</p>
              <button className="btn-primary" onClick={() => navigate('/contact')}>
                Get in Touch <ArrowRight size={18} />
              </button>
            </div>
            <div className="about-what-cards">
              {[
                { icon: Building2, title: 'For Vendors',  desc: 'Post manpower requirements and receive confirmed, verified workers at your site within 24 hours.' },
                { icon: Users,     title: 'For Workers',  desc: 'Register, get verified, and receive job calls from construction sites across India.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="about-what-card">
                  <div className="awc-icon"><Icon size={20} /></div>
                  <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="about-flow-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2>Simple. Fast. Reliable.</h2>
            <p>Two simple flows working together to deliver manpower in 24 hours.</p>
          </div>
          <div className="about-flows">

            {/* Vendor Flow */}
            <div className="flow-card">
              <div className="flow-header">
                <div className="flow-icon"><Building2 size={20} /></div>
                <h3>Vendor Flow</h3>
              </div>
              <ol className="flow-steps">
                {[
                  'Open app & create company profile',
                  'Login with mobile OTP',
                  'Select role, quantity, location & duration',
                  'Submit manpower request',
                  'SiteLink verified workers matched from database',
                  'Receive confirmed workers within 24 hours',
                  'Request replacement within 48 hrs if needed',
                ].map((s, i) => (
                  <li key={i}>
                    <span className="flow-num">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Worker Flow */}
            <div className="flow-card">
              <div className="flow-header">
                <div className="flow-icon"><Users size={20} /></div>
                <h3>Worker Flow</h3>
              </div>
              <ol className="flow-steps">
                {[
                  'Install app & create profile',
                  'Register with mobile OTP',
                  'Fill role, experience, location & salary',
                  'Upload ID proof & work experience photos',
                  'SiteLink verified workers approved before entry',
                  'Receive job call & confirm availability',
                  'Get assigned to vendor site',
                ].map((s, i) => (
                  <li key={i}>
                    <span className="flow-num">{i + 1}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>

          </div>
        </div>
      </section>

      {/* ── Key Promises ── */}
      <section className="about-promises-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Guarantee</span>
            <h2>Key System Promises</h2>
          </div>
          <div className="about-promises-grid">
            {[
              { icon: Clock,       title: 'Hiring in 24 Hours',         desc: 'From request submission to confirmed workers on site — guaranteed within 24 hours.' },
              { icon: CheckCircle, title: 'Replacement in 48 Hours',     desc: 'Worker left or underperformed? Replacement delivered within 24–48 hours with documented reason.' },
              { icon: Shield,      title: 'Verified Worker Database',    desc: 'Every worker is ID-verified, skill-checked, and admin-approved before entering our active pool.' },
              { icon: Smartphone,  title: 'Simple Request-Based Hiring', desc: 'No complex contracts. Vendors post requirements, admin matches, manpower is deployed.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="about-promise-card">
                <div className="apc-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
