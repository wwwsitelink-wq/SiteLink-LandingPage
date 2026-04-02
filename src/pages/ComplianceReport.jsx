import { FileText, CheckCircle, AlertCircle, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import './ComplianceReport.css';

export default function ComplianceReport() {
  const reports = [
    {
      id: 1,
      title: 'Monthly Verification Report',
      month: 'March 2026',
      verified: 2100,
      pending: 45,
      rejected: 255,
      status: 'completed',
    },
    {
      id: 2,
      title: 'Quarterly Compliance Audit',
      quarter: 'Q1 2026',
      score: '98%',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Year-End Audit Report',
      year: '2025',
      total: 2400,
      compliant: 2350,
      status: 'completed',
    },
  ];

  return (
    <div className="compliance-report-page">
      <div className="page-header">
        <h1>Compliance Reports</h1>
        <p>Detailed audit and verification documentation</p>
      </div>

      <div className="reports-container">
        {reports.map((report, index) => (
          <motion.div
            key={report.id}
            className="report-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="report-header">
              <div className="report-icon">
                <FileText size={28} />
              </div>
              <div className="report-title-section">
                <h3>{report.title}</h3>
                <p className="report-date">
                  {report.month || report.quarter || report.year}
                </p>
              </div>
              <span className="status-badge completed">Completed</span>
            </div>

            <div className="report-content">
              {report.verified && (
                <div className="report-stat">
                  <CheckCircle size={20} style={{ color: '#10b981' }} />
                  <div>
                    <span className="stat-label">Verified Workers</span>
                    <span className="stat-value">{report.verified.toLocaleString()}</span>
                  </div>
                </div>
              )}
              {report.pending && (
                <div className="report-stat">
                  <AlertCircle size={20} style={{ color: '#f59e0b' }} />
                  <div>
                    <span className="stat-label">Pending Review</span>
                    <span className="stat-value">{report.pending}</span>
                  </div>
                </div>
              )}
              {report.score && (
                <div className="report-stat">
                  <CheckCircle size={20} style={{ color: '#2f63db' }} />
                  <div>
                    <span className="stat-label">Compliance Score</span>
                    <span className="stat-value">{report.score}</span>
                  </div>
                </div>
              )}
              {report.compliant && (
                <div className="report-stat">
                  <CheckCircle size={20} style={{ color: '#10b981' }} />
                  <div>
                    <span className="stat-label">Compliant</span>
                    <span className="stat-value">
                      {report.compliant.toLocaleString()} / {report.total.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="report-footer">
              <button className="report-btn">
                <Download size={16} />
                Download PDF
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.section
        className="audit-info"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>What's Included in Reports?</h2>
        <div className="info-grid">
          <div className="info-item">
            <CheckCircle size={24} style={{ color: '#2f63db' }} />
            <h4>Verification Status</h4>
            <p>Complete breakdown of approved, pending, and rejected applications</p>
          </div>
          <div className="info-item">
            <CheckCircle size={24} style={{ color: '#2f63db' }} />
            <h4>Document Review</h4>
            <p>Detailed document verification and compliance metrics</p>
          </div>
          <div className="info-item">
            <CheckCircle size={24} style={{ color: '#2f63db' }} />
            <h4>Trend Analysis</h4>
            <p>Month-over-month and year-over-year verification trends</p>
          </div>
          <div className="info-item">
            <CheckCircle size={24} style={{ color: '#2f63db' }} />
            <h4>Risk Assessment</h4>
            <p>Identification of high-risk applications and patterns</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
