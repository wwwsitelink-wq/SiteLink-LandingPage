import { useState, useEffect } from 'react';
import { Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import api from '../api/axios';
import './WorkersList.css';

export default function WorkersList() {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock workers data
  const MOCK_WORKERS = [
    {
      _id: 'wk0001',
      name: 'Rajesh Kumar',
      skills: [{ skillName: 'Electrician' }],
      experience: '5+ Years',
      city: 'Mumbai',
      isVerified: false,
      verificationStatus: 'pending',
    },
    {
      _id: 'wk0002',
      name: 'Suresh Patel',
      skills: [{ skillName: 'Plumber' }],
      experience: '3-5 Years',
      city: 'Ahmedabad',
      isVerified: true,
      verificationStatus: 'verified',
    },
    {
      _id: 'wk0005',
      name: 'Pradeep Nair',
      skills: [{ skillName: 'Welder' }],
      experience: '3-5 Years',
      city: 'Chennai',
      isVerified: true,
      verificationStatus: 'verified',
    },
  ];

  useEffect(() => {
    fetchWorkers();
  }, []);

  const fetchWorkers = async () => {
    try {
      const { data } = await api.get('/admin/workers/all');
      setWorkers(data.data || MOCK_WORKERS);
    } catch (err) {
      console.log('Using mock data');
      setWorkers(MOCK_WORKERS);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (worker) => {
    if (worker.isVerified) return 'approved';
    if (worker.verificationStatus === 'rejected') return 'rejected';
    return 'pending';
  };

  const filteredWorkers = workers.filter(w => {
    if (filterStatus === 'all') return true;
    return getStatusBadge(w) === filterStatus;
  });

  if (loading) {
    return <div className="loading">Loading workers...</div>;
  }

  return (
    <div className="workers-list-page">
      <div className="page-header">
        <h1>Verified Workers</h1>
        <p>Browse approved construction professionals</p>
      </div>

      <div className="filters">
        <button
          className={`filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
          onClick={() => setFilterStatus('all')}
        >
          All Workers
        </button>
        <button
          className={`filter-btn ${filterStatus === 'approved' ? 'active' : ''}`}
          onClick={() => setFilterStatus('approved')}
        >
          Approved
        </button>
        <button
          className={`filter-btn ${filterStatus === 'pending' ? 'active' : ''}`}
          onClick={() => setFilterStatus('pending')}
        >
          Pending
        </button>
      </div>

      <div className="workers-grid">
        {filteredWorkers.map((worker, index) => (
          <motion.div
            key={worker._id}
            className="worker-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="worker-header">
              <div className="worker-info">
                <h3>{worker.name}</h3>
                <p className="worker-role">{worker.skills?.[0]?.skillName || 'Worker'}</p>
              </div>
              <span className={`status-badge status-${getStatusBadge(worker)}`}>
                {getStatusBadge(worker).toUpperCase()}
              </span>
            </div>

            <div className="worker-details">
              <div className="detail-item">
                <span className="detail-label">Experience</span>
                <span className="detail-value">{worker.experience}</span>
              </div>
              <div className="detail-item">
                <MapPin size={16} />
                <span className="detail-value">{worker.city}</span>
              </div>
            </div>

            <div className="worker-rating">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#fbbf24" stroke="#fbbf24" />
              ))}
              <span>4.5</span>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredWorkers.length === 0 && (
        <div className="no-results">
          <p>No workers found with the selected filters.</p>
        </div>
      )}
    </div>
  );
}
