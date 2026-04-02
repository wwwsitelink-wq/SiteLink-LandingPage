import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shield, Users, FileText, BarChart3, Bell, Lock,
  CheckCircle, ArrowRight, Zap, Globe, Database, Smartphone
} from 'lucide-react';
import './FeaturesPage.css';

const features = [
  {
    icon: Shield,
    title: 'Real-time Worker Verification',
    desc: 'Instant background checks, skill certifications, BOCW registration, and document verification for every worker on your site.',
    points: ['Aadhaar & PAN verification', 'Skill certificate validation', 'BOCW registration check', 'Criminal background screening'],
    color: '#c0392b',
  },
  {
    icon: Users,
    title: 'Manpower Network Access',
    desc: 'Browse and hire from 12,000+ pre-verified construction professionals across 50+ trade categories.',
    points: ['50+ trade categories', 'Skill-based filtering', 'Location-based search', 'Rating & review system'],
    color: '#e8621a',
  },
  {
    icon: FileText,
    title: 'Automated Compliance Reports',
    desc: 'Generate BOCW, PF, ESI, and labour law compliance reports automatically with one click.',
    points: ['BOCW compliance reports', 'PF & ESI statements', 'Labour law documentation', 'Audit-ready exports'],
    color: '#c0392b',
  },
  {
    icon: BarChart3,
    title: 'Audit Dashboard',
    desc: 'Real-time visibility into your workforce compliance status, verification metrics, and risk indicators.',
    points: ['Live compliance metrics', 'Risk score tracking', 'Trend analysis', 'Custom date ranges'],
    color: '#e8621a',
  },
  {
    icon: Bell,
    title: 'Smart Alerts & Notifications',
    desc: 'Proactive alerts for expiring documents, compliance deadlines, and verification failures.',
    points: ['Document expiry alerts', 'Compliance deadline reminders', 'Verification failure notifications', 'Custom alert rules'],
    color: '#c0392b',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    desc: 'Bank-grade security with role-based access control, audit logs, and data encryption.',
    points: ['256-bit AES encryption', 'Role-based access control', 'Complete audit trail', 'GDPR compliant'],
    color: '#e8621a',
  },
];

const integrations = [
  { icon: Zap, name: 'Zapier', desc: 'Automate workflows' },
  { icon: Globe, name: 'REST API', desc: 'Custom integrations' },
  { icon: Database, name: 'SAP / ERP', desc: 'Enterprise systems' },
  { icon: Smartphone, name: 'Mobile App', desc: 'iOS & Android' },
];

export default function FeaturesPage() {
  const navigate = useNavigate();
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="features-page">
      {/* Hero */}
      <section className="features-hero">
        <div className="fh-bg">
          <div className="fh-orb fh-orb-1" />
          <div className="fh-orb fh-orb-2" />
        </div>
        <div className="container">
          <div className="fh-content">
            <span className="section-tag">Platform Features</span>
            <h1>Everything You Need to<br /><span className="gradient-text">Manage Your Workforce</span></h1>
            <p>A complete suite of tools for construction workforce verification, compliance management, and manpower sourcing.</p>
            <button className="btn-primary" onClick={() => navigate('/audit')}>
              Try the Dashboard <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="features-grid-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Features</span>
            <h2>Built for Construction Compliance</h2>
            <p>Every feature purpose-built for the unique challenges of managing construction manpower.</p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`feature-card ${activeFeature === i ? 'active' : ''}`}
                onClick={() => setActiveFeature(i)}
                style={{ '--card-color': f.color }}
              >
                <div className="fc-icon" style={{ background: `linear-gradient(135deg, ${f.color}, ${f.color}99)` }}>
                  <f.icon size={24} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <ul className="fc-points">
                  {f.points.map(p => (
                    <li key={p}><CheckCircle size={13} />{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">How It Works</span>
            <h2>Get Started in 3 Simple Steps</h2>
          </div>
          <div className="steps-grid">
            {[
              { step: '01', title: 'Register Your Company', desc: 'Create your SiteLink account and set up your company profile with project details.' },
              { step: '02', title: 'Add Your Workers', desc: 'Upload worker details or let workers self-register. Our system verifies documents automatically.' },
              { step: '03', title: 'Stay Compliant', desc: 'Get real-time compliance scores, automated reports, and alerts for any issues.' },
            ].map((s, i) => (
              <div key={s.step} className="step-card" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="step-number">{s.step}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {i < 2 && <div className="step-arrow"><ArrowRight size={20} /></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="integrations-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Integrations</span>
            <h2>Connects with Your Existing Tools</h2>
          </div>
          <div className="integrations-grid">
            {integrations.map(({ icon: Icon, name, desc }) => (
              <div key={name} className="integration-card">
                <div className="int-icon"><Icon size={28} /></div>
                <div className="int-name">{name}</div>
                <div className="int-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="features-cta">
        <div className="container">
          <div className="fcta-box">
            <div className="fcta-orb" />
            <h2>Ready to Transform Your Compliance?</h2>
            <p>Join 500+ construction companies already using SiteLink.</p>
            <div className="fcta-actions">
              <button className="btn-primary" onClick={() => navigate('/contact')}>
                Get Started <ArrowRight size={18} />
              </button>
              <button className="btn-outline" onClick={() => navigate('/audit')}>
                View Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
