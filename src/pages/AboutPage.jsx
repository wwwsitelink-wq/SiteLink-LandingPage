import { useNavigate } from 'react-router-dom';
import { Target, Eye, Heart, Award, Users, MapPin, ArrowRight } from 'lucide-react';
import './AboutPage.css';

const team = [
  { name: 'Vikram Singh', role: 'CEO & Founder', initials: 'VS', desc: '15+ years in construction industry management.' },
  { name: 'Neha Gupta', role: 'CTO', initials: 'NG', desc: 'Ex-TCS engineer, built SiteLink\'s verification engine.' },
  { name: 'Arjun Mehta', role: 'Head of Compliance', initials: 'AM', desc: 'Labour law expert with 12 years of experience.' },
  { name: 'Sunita Rao', role: 'VP Operations', initials: 'SR', desc: 'Scaled operations across 20+ Indian cities.' },
];

const milestones = [
  { year: '2019', title: 'Founded', desc: 'SiteLink launched in Mumbai with 50 verified workers.' },
  { year: '2020', title: 'Series A', desc: 'Raised ₹5Cr to expand verification infrastructure.' },
  { year: '2022', title: 'Pan-India', desc: 'Expanded to 25 cities with 5,000+ verified workers.' },
  { year: '2024', title: '10K+ Workers', desc: 'Crossed 10,000 verified professionals milestone.' },
  { year: '2026', title: 'Today', desc: '12,000+ workers, 850+ vendors, 500+ active projects.' },
];

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="ah-orb ah-orb-1" />
          <div className="ah-orb ah-orb-2" />
        </div>
        <div className="container">
          <div className="about-hero-content">
            <span className="section-tag">About SiteLink</span>
            <h1>The Manpower Network<br /><span className="gradient-text">Built for Bharat</span></h1>
            <p>We're on a mission to bring transparency, trust, and technology to India's construction workforce — connecting skilled workers with the right opportunities while ensuring full compliance.</p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="mvv-section">
        <div className="container">
          <div className="mvv-grid">
            {[
              { icon: Target, title: 'Our Mission', text: 'To digitize and verify India\'s construction workforce, creating a trusted network that benefits workers, contractors, and project owners alike.' },
              { icon: Eye, title: 'Our Vision', text: 'A construction industry where every worker is verified, every project is compliant, and every stakeholder has complete visibility.' },
              { icon: Heart, title: 'Our Values', text: 'Transparency in every verification. Dignity for every worker. Accountability at every level of the supply chain.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="mvv-card">
                <div className="mvv-icon"><Icon size={26} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span className="section-tag">Our Story</span>
              <h2>From a Construction Site to a National Platform</h2>
              <p>SiteLink was born out of frustration. Our founder Vikram Singh spent 15 years managing large construction projects and constantly struggled with unverified workers, compliance gaps, and manual paperwork.</p>
              <p>In 2019, he partnered with technologist Neha Gupta to build a digital solution — a platform that could verify workers in real-time, automate compliance reporting, and connect the entire construction ecosystem.</p>
              <p>Today, SiteLink is India's most trusted construction manpower network, processing thousands of verifications daily across 25+ cities.</p>
              <button className="btn-primary" onClick={() => navigate('/features')}>
                Explore Our Platform <ArrowRight size={18} />
              </button>
            </div>
            <div className="timeline">
              {milestones.map((m, i) => (
                <div key={m.year} className="timeline-item" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="timeline-year">{m.year}</div>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h4>{m.title}</h4>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Leadership</span>
            <h2>The Team Behind SiteLink</h2>
            <p>Industry veterans and technology experts united by a common purpose.</p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-avatar">{member.initials}</div>
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presence */}
      <section className="presence-section">
        <div className="container">
          <div className="presence-box">
            <div className="presence-content">
              <span className="section-tag">Our Presence</span>
              <h2>Operating Across India</h2>
              <p>From metro cities to tier-2 towns, SiteLink's network spans the entire country.</p>
              <div className="cities-grid">
                {['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Ahmedabad', 'Kolkata', 'Jaipur', 'Surat', 'Lucknow', 'Nagpur'].map(city => (
                  <div key={city} className="city-tag">
                    <MapPin size={12} /> {city}
                  </div>
                ))}
              </div>
            </div>
            <div className="presence-stats">
              {[
                { icon: Users, value: '12,000+', label: 'Verified Workers' },
                { icon: MapPin, value: '25+', label: 'Cities' },
                { icon: Award, value: '98%', label: 'Satisfaction Rate' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="p-stat">
                  <Icon size={22} />
                  <div className="p-stat-value">{value}</div>
                  <div className="p-stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
