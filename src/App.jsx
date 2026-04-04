import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import ContactPage from './pages/ContactPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="app-container">
        <Navigation />
        <main className="app-main">
          <Routes>
            <Route path="/"        element={<HomePage />} />
            <Route path="/about"   element={<AboutPage />} />
            <Route path="/vision"  element={<FeaturesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
