import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Users, CheckCircle, AlertCircle, TrendingUp, Building2, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import api from '../api/axios';
import './AuditDashboard.css';

export default function AuditDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalWorkers: 2400,
    totalVendors: 350,
    approvedWorkers: 2100,
    pendingReviews: 45,
    verificationRate: 98,
    avgRating: 4.7,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAuditData();
  }, []);

  const fetchAuditData = async () => {
    try {
      // Try to fetch real data, fallback to mock
      const { data } = await api.get('/admin/workers/all');
      const workers = data.data || [];
      const approved = workers.filter(w => w.isVerified).length;
      const pending = workers.filter(w => !w.isVerified && w.verificationStatus !== 'rejected').length;
      
      setStats({
        totalWorkers: workers.length || 2400,
        totalVendors: 350,
        approvedWorkers: approved || 2100,
        pendingReviews: pending || 45,
        verificationRate: workers.length ? Math.round((approved / workers.length) * 100) : 98,
        avgRating: 4.7,
      });
    } catch (err) {
      console.error('Using mock data:', err);
      // Keep default mock stats
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      label: 'Total Workers',
      value: stats.totalWorkers.toLocaleString(),
      icon: Users,
      color: '#2f63db',
    },
    {
      label: 'Approved',
      value: stats.approvedWorkers.toLocaleString(),
      icon: CheckCircle,
      color: '#10b981',
    },
    {
      label: 'Pending Review',
      value: stats.pendingReviews,
      icon: AlertCircle,
      color: '#f59e0b',
    },
    {
      label: 'Verification Rate',
      value: `${stats.verificationRate}%`,
      icon: TrendingUp,
      color: '#8b5cf6',
    },
  ];

  if (loading) {
    return <div className="loading">Loading audit dashboard...</div>;
  }

  return (
    <div className="audit-dashboard">
      <div className="dashboard-header">
        <h1>Audit Dashboard</h1>
        <p>Real-time verification metrics and compliance overview</p>
      </div>

      {/* Quick Nav */}
      <div className="dash-nav-grid">
        {[
          { icon: BarChart3,  label: 'Audit Dashboard',    sub: 'Metrics & overview',       path: '/audit',      color: '#c0392b' },
          { icon: Users,      label: 'Workers List',       sub: 'Verified professionals',   path: '/workers',    color: '#e8621a' },
          { icon: Building2,  label: 'Vendors List',       sub: 'Approved contractors',     path: '/vendors',    color: '#c0392b' },
          { icon: FileText,   label: 'Compliance Reports', sub: 'Audit documentation',      path: '/compliance', color: '#e8621a' },
        ].map(({ icon: Icon, label, sub, path, color }) => (
          <motion.button
            key={path}
            className="dash-nav-card"
            onClick={() => navigate(path)}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -4 }}
            style={{ '--card-color': color }}
          >
            <div className="dnc-icon" style={{ background: `${color}18`, color }}>
              <Icon size={24} />
            </div>
            <div className="dnc-text">
              <div className="dnc-label">{label}</div>
              <div className="dnc-sub">{sub}</div>
            </div>
            <ArrowRight size={16} className="dnc-arrow" />
          </motion.button>
        ))}
      </div>

      <div className="stats-grid">
        {statCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="stat-icon" style={{ backgroundColor: `${card.color}20`, color: card.color }}>
                <Icon size={28} />
              </div>
              <div className="stat-content">
                <p className="stat-label">{card.label}</p>
                <p className="stat-value">{card.value}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="audit-sections">
        <motion.section
          className="audit-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2>Verification Status</h2>
          <div className="status-overview">
            <div className="status-item approved">
              <span className="status-count">{stats.approvedWorkers}</span>
              <span className="status-label">Approved Workers</span>
            </div>
            <div className="status-item pending">
              <span className="status-count">{stats.pendingReviews}</span>
              <span className="status-label">Pending Review</span>
            </div>
            <div className="status-item rejected">
              <span className="status-count">{stats.totalWorkers - stats.approvedWorkers - stats.pendingReviews}</span>
              <span className="status-label">Not Approved</span>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="audit-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2>Compliance Metrics</h2>
          <div className="metrics-grid">
            <div className="metric">
              <div className="metric-label">Documentation Verification</div>
              <div className="metric-bar">
                <div className="metric-fill" style={{ width: '95%' }}></div>
              </div>
              <span>95%</span>
            </div>
            <div className="metric">
              <div className="metric-label">Identity Verification</div>
              <div className="metric-bar">
                <div className="metric-fill" style={{ width: '98%' }}></div>
              </div>
              <span>98%</span>
            </div>
            <div className="metric">
              <div className="metric-label">Background Check</div>
              <div className="metric-bar">
                <div className="metric-fill" style={{ width: '92%' }}></div>
              </div>
              <span>92%</span>
            </div>
            <div className="metric">
              <div className="metric-label">Certification Review</div>
              <div className="metric-bar">
                <div className="metric-fill" style={{ width: '88%' }}></div>
              </div>
              <span>88%</span>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
