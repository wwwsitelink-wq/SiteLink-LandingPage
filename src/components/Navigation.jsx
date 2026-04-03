import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home',              path: '/' },
    { label: 'About',             path: '/about' },
    { label: 'Vision & Mission',  path: '/vision' },
    { label: 'Contact',           path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand" onClick={() => navigate('/')}>
          <img src="/logo.png" alt="SiteLink" className="nav-logo" />
        </div>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`nav-links ${mobileOpen ? 'mobile-active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.path}>
              <button
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                onClick={() => { navigate(item.path); setMobileOpen(false); }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
