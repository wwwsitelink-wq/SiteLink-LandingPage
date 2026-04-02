import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ChevronDown, ChevronUp, Linkedin, ArrowRight } from 'lucide-react';
import './ContactPage.css';

const faqs = [
  { q: 'How long does worker verification take?', a: 'Most verifications complete within 24-48 hours. Aadhaar and PAN verification is instant.' },
  { q: 'Is SiteLink compliant with Indian labour laws?', a: 'Yes. SiteLink is fully compliant with BOCW Act, Contract Labour Act, PF & ESI regulations.' },
  { q: 'Can I integrate SiteLink with my existing ERP?', a: 'Yes, we offer REST APIs and pre-built connectors for SAP, Oracle, and other major ERP systems.' },
  { q: 'What happens if a worker fails verification?', a: 'You receive an instant alert with the specific reason. You can request re-verification or flag the worker.' },
  { q: 'Is there a mobile app available?', a: 'Yes, SiteLink is available on iOS and Android for on-site supervisors and workers.' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '', type: 'demo' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="ch-bg">
          <div className="ch-orb ch-orb-1" />
          <div className="ch-orb ch-orb-2" />
        </div>
        <div className="container">
          <div className="ch-content">
            <span className="section-tag">Contact Us</span>
            <h1>Let's Build Something<br /><span className="gradient-text">Together</span></h1>
            <p>Get in touch with our team to schedule a demo, discuss your requirements, or get support.</p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrap">
              <h2>Send Us a Message</h2>
              <p>Fill out the form and our team will get back to you within 24 hours.</p>

              {submitted ? (
                <div className="success-msg">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-type-tabs">
                    {['demo', 'support', 'partnership'].map(t => (
                      <button
                        key={t}
                        type="button"
                        className={`type-tab ${form.type === t ? 'active' : ''}`}
                        onClick={() => setForm(p => ({ ...p, type: t }))}
                      >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                    </div>
                    <div className="form-group">
                      <label>Work Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Company Name *</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder="Your company" required />
                    </div>
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 82608 05119" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your requirements..." rows={5} required />
                  </div>

                  <button type="submit" className="btn-submit">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="contact-info">
              <div className="ci-heading">
                <h2>Contact <span className="gradient-text">Information</span></h2>
                <p>Reach out to us through any of these channels. We're here to help and excited to discuss your project.</p>
              </div>
              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon"><Mail size={20} /></div>
                  <div>
                    <div className="info-title">Email</div>
                    <div className="info-line">contact@smartnex.tech</div>
                    <a href="mailto:contact@smartnex.tech" className="info-action">Send an email <ArrowRight size={13} /></a>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon"><Phone size={20} /></div>
                  <div>
                    <div className="info-title">Phone</div>
                    <div className="info-line">+91 82608 05119</div>
                    <a href="tel:+918260805119" className="info-action">Call us <ArrowRight size={13} /></a>
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-icon"><Linkedin size={20} /></div>
                  <div>
                    <div className="info-title">LinkedIn</div>
                    <div className="info-line">Smartnex Technologies</div>
                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="info-action">Connect with us <ArrowRight size={13} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
