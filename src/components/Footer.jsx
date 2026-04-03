import { useNavigate } from 'react-router-dom';
import { Phone, Mail, Linkedin, Twitter, Instagram, Zap } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">

          {/* Brand */}
          <div className="footer-brand">
            <img src="/logo.png" alt="SiteLink" className="footer-logo" />
            <p>India's fastest manpower hiring platform for construction sites. Hire verified workers in 24 hours, replacement in 48 hours.</p>
            <div className="footer-new-product">
              <Zap size={13} />
              <span>A new product by</span>
              <img src="/image.png" alt="Smartnex" className="footer-smartnex-logo" />
              <strong>Smartnex Technologies</strong>
            </div>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <h4>Navigate</h4>
            <ul>
              {[['Home', '/'], ['About', '/about'], ['Vision & Mission', '/vision'], ['Contact', '/contact']].map(([label, path]) => (
                <li key={path}><button onClick={() => navigate(path)}>{label}</button></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="fc-item"><Phone size={14} /><span>+91 82608 05119</span></div>
            <div className="fc-item"><Mail size={14} /><span>info@smartnex.tech</span></div>
            <div className="fc-item"><Mail size={14} /><span>www.sitelink@gmail.com</span></div>
            <div className="fc-bulk">
              <div className="fc-bulk-badge">Bulk Orders</div>
              <p>For bulk manpower requirements, call us directly:</p>
              <a href="tel:+918260805119" className="fc-bulk-number">+91 82608 05119</a>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© {year} SiteLink — The Manpower Network. All rights reserved.</p>
          <p className="powered-by">
            Powered by&nbsp; <span><img src="/image.png" alt="Smartnex" className="footer-smartnex-logo" /></span>
            <a href="https://smartnex.tech" target="_blank" rel="noreferrer">Smartnex Technologies</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
