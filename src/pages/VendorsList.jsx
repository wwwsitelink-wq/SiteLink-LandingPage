import { Star, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './VendorsList.css';

export default function VendorsList() {
  const vendors = [
    {
      _id: 'v001',
      name: 'BuildTech Solutions',
      type: 'General Contractor',
      city: 'Mumbai',
      rating: 4.8,
      projects: '150+',
      verified: true,
    },
    {
      _id: 'v002',
      name: 'StructureMax',
      type: 'Civil Construction',
      city: 'Bangalore',
      rating: 4.5,
      projects: '98',
      verified: true,
    },
    {
      _id: 'v003',
      name: 'Elite Builders',
      type: 'Residential',
      city: 'Delhi',
      rating: 4.6,
      projects: '125',
      verified: true,
    },
  ];

  return (
    <div className="vendors-list-page">
      <div className="page-header">
        <h1>Approved Vendors & Contractors</h1>
        <p>View verified construction companies and contractors</p>
      </div>

      <div className="vendors-grid">
        {vendors.map((vendor, index) => (
          <motion.div
            key={vendor._id}
            className="vendor-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="vendor-header">
              <div className="vendor-icon">
                <Building2 size={32} />
              </div>
              <span className="verified-badge">VERIFIED</span>
            </div>

            <h3>{vendor.name}</h3>
            <p className="vendor-type">{vendor.type}</p>

            <div className="vendor-stats">
              <div className="stat">
                <span className="stat-label">Location</span>
                <span className="stat-value">{vendor.city}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Projects</span>
                <span className="stat-value">{vendor.projects}</span>
              </div>
            </div>

            <div className="vendor-rating">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < Math.floor(vendor.rating) ? '#fbbf24' : '#e5e7eb'}
                  stroke={i < Math.floor(vendor.rating) ? '#fbbf24' : '#e5e7eb'}
                />
              ))}
              <span>{vendor.rating}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
