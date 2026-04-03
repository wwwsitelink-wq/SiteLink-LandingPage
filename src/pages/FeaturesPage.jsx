import { useNavigate } from 'react-router-dom';
import { Eye, Target, Heart, Star, ArrowRight, CheckCircle, Zap, Users, Building2, Shield } from 'lucide-react';
import './FeaturesPage.css';

export default function FeaturesPage() {
  const navigate = useNavigate();

  return (
    <div className="features-page">

      {/* ── Hero ── */}
      <section className="features-hero">
        <div className="fh-bg">
          <div className="fh-orb fh-orb-1" />
          <div className="fh-orb fh-orb-2" />
        </div>
        <div className="container">
          <div className="fh-content">
            <span className="section-tag">Vision & Mission</span>
            <h1>Why We Built<br /><span className="gradient-text">SiteLink</span></h1>
            <p>A platform born from the real frustrations of India's construction industry — built to bring speed, trust, and dignity to every worker and vendor.</p>
          </div>
        </div>
      </section>

      {/* ── Vision / Mission / Values ── */}
      <section className="vmv-section">
        <div className="container">
          <div className="vmv-grid">
            {[
              {
                icon: Eye,
                title: 'Our Vision',
                text: 'A construction industry where every worker is verified, every vendor gets manpower within 24 hours, and every replacement is handled within 48 hours — without friction.',
                color: '#c0392b',
              },
              {
                icon: Target,
                title: 'Our Mission',
                text: 'To build India\'s most trusted manpower hiring platform — connecting verified construction workers with vendors through a fast, simple, and reliable request-based system.',
                color: '#e8621a',
              },
              {
                icon: Heart,
                title: 'Our Values',
                text: 'Speed in delivery. Dignity for every worker. Transparency in every transaction. Accountability at every step of the hiring process.',
                color: '#c0392b',
              },
            ].map(({ icon: Icon, title, text, color }) => (
              <div key={title} className="vmv-card">
                <div className="vmv-icon" style={{ background: `linear-gradient(135deg, ${color}, ${color}99)` }}>
                  <Icon size={26} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Problem We Solve ── */}
      <section className="problem-section">
        <div className="container">
          <div className="problem-grid">
            <div className="problem-content">
              <span className="section-tag">The Problem</span>
              <h2>Construction Manpower is Broken</h2>
              <p>India's construction industry employs millions of workers — yet hiring is still done through phone calls, middlemen, and unverified contacts. Vendors wait days for workers. Workers wait weeks for jobs. No one has visibility.</p>
              <p>Compliance is manual. Replacements take forever. And there's no single platform that connects workers, vendors, and administrators in one place.</p>
              <div className="problem-points">
                {[
                  'No verified worker database',
                  'Hiring takes days or weeks',
                  'No replacement guarantee',
                  'Manual, paper-based processes',
                  'No transparency for vendors',
                ].map(p => (
                  <div key={p} className="problem-point">
                    <div className="pp-dot" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="solution-content">
              <span className="section-tag">The Solution</span>
              <h2>SiteLink Changes Everything</h2>
              <p>SiteLink is a mobile-first platform that digitizes the entire manpower hiring process — from worker registration and verification to vendor requests and admin matching.</p>
              <div className="solution-points">
                {[
                  { icon: Zap,       text: 'Manpower confirmed in 24 hours' },
                  { icon: CheckCircle, text: 'Replacement guaranteed in 48 hours' },
                  { icon: Shield,    text: 'Every worker ID-verified & admin-approved' },
                  { icon: Users,     text: 'Workers register via mobile OTP — no paperwork' },
                  { icon: Building2, text: 'Vendors post requirements in minutes' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="solution-point">
                    <div className="sp-icon"><Icon size={16} /></div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Beliefs ── */}
      <section className="beliefs-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">What We Stand For</span>
            <h2>Our Core Beliefs</h2>
          </div>
          <div className="beliefs-grid">
            {[
              { icon: Star,        title: 'Workers Deserve Dignity',      desc: 'Every construction worker deserves a verified profile, fair pay, and a platform that represents them professionally.' },
              { icon: Zap,         title: 'Speed is Non-Negotiable',      desc: 'Construction sites can\'t wait. 24-hour hiring and 48-hour replacement isn\'t a goal — it\'s our guarantee.' },
              { icon: Shield,      title: 'Trust Through Verification',   desc: 'No unverified worker enters our network. Every profile is checked, approved, and maintained by our admin team.' },
              { icon: Building2,   title: 'Vendors Need Simplicity',      desc: 'Vendors shouldn\'t need to manage complex contracts. Post a requirement, get workers — that\'s it.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="belief-card">
                <div className="bc-icon"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="features-cta">
        <div className="container">
          <div className="fcta-box">
            <div className="fcta-orb" />
            <h2>Be Part of the Change</h2>
            <p>Whether you're a vendor needing workers or a worker looking for jobs — SiteLink is launching soon.</p>
            <div className="fcta-actions">
              <button className="btn-primary" onClick={() => navigate('/contact')}>
                Get Notified at Launch <ArrowRight size={18} />
              </button>
              <button className="btn-outline" onClick={() => navigate('/about')}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
