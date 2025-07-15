import React, { useState } from 'react';
import { Mail, User, Phone, Briefcase, MessageSquare } from 'lucide-react';
import './Contact.scss';

const services = [
  'Software Development',
  'IT Infrastructure',
  'Networking',
  'Cybersecurity',
  'Mobile Development',
  'Other'
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recipient = 'info@4688technologies.com';
    const subject = encodeURIComponent(`Business Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company}\n` +
      `Phone: ${formData.phone}\n` +
      `Service Interested In: ${formData.service}\n` +
      `Message: ${formData.message}`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Ready to transform your business? Reach out to discuss your project or request a consultation.
        </p>
        <div className="contact__content">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <div className="input-wrapper">
                  <User size={20} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-wrapper">
                  <Mail size={20} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <div className="input-wrapper">
                  <Briefcase size={20} />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-wrapper">
                  <Phone size={20} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <div className="input-wrapper">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Service Interested In</option>
                    {services.map((srv, idx) => (
                      <option key={idx} value={srv}>{srv}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="input-wrapper">
                <MessageSquare size={20} />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn contact__submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
