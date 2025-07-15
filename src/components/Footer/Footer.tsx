import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <div style={{display:'flex', alignItems:'center', gap:'0.5rem'}}><img src="/images/4688-logo.jpeg" alt="4688 Technologies Logo" style={{height:48, width:48}} /><h3 className="footer__title" style={{margin:0}}>4688 Technologies</h3></div>
            <p className="footer__description">
              Driving business growth with innovative technology solutions. <br/>
              Software Development, IT Infrastructure, Networking, Cybersecurity, Mobile Development, and more.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Contact Info</h4>
            <div className="footer__contact">
              <div className="contact-item">
                <MapPin size={16} />
                <span>123 Tech Avenue, Innovation District, Abuja</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+234 800 4688 000</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@4688technologies.com</span>
              </div>
            </div>
          </div>

          

          <div className="footer__section">
            <h4 className="footer__subtitle">Quick Links</h4>
            <nav className="footer__nav">
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
              
            </nav>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__copy">
            <p>&copy; {currentYear} 4688 Technologies. All rights reserved.</p>
          </div>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;