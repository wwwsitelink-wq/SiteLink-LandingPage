import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import AuditDashboard from './pages/AuditDashboard';
import WorkersList from './pages/WorkersList';
import VendorsList from './pages/VendorsList';
import ComplianceReport from './pages/ComplianceReport';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navigation />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/audit" element={<AuditDashboard />} />
            <Route path="/workers" element={<WorkersList />} />
            <Route path="/vendors" element={<VendorsList />} />
            <Route path="/compliance" element={<ComplianceReport />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
