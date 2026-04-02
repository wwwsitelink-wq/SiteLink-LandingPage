import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-brand">
            <img src="/logo.png" alt="SiteLink" className="footer-logo" />
            <p>India's most trusted construction manpower network. Connecting verified workers, contractors, and project managers.</p>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Platform</h4>
            <ul>
              {[['Home', '/'], ['About', '/about'], ['Features', '/features'], ['Contact', '/contact']].map(([label, path]) => (
                <li key={path}><button onClick={() => navigate(path)}>{label}</button></li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Dashboard</h4>
            <ul>
              {[['Audit Dashboard', '/audit'], ['Workers List', '/workers'], ['Vendors List', '/vendors'], ['Compliance Reports', '/compliance']].map(([label, path]) => (
                <li key={path}><button onClick={() => navigate(path)}>{label}</button></li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <div className="fc-item"><Phone size={14} /><span>+91 82608 05119</span></div>
            <div className="fc-item"><Mail size={14} /><span>contact@smartnex.tech</span></div>
            <div className="fc-item"><MapPin size={14} /><span>Smartnex Technologies</span></div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>© {year} SiteLink — The Manpower Network. All rights reserved.</p>
          <p className="built-by">Built by <a href="https://smartnex.tech" target="_blank" rel="noreferrer">Smartnex Technologies</a></p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
