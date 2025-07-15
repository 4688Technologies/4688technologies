import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import './Location.scss';

const Location: React.FC = () => {
  return (
    <section id="location" className="location section">
      <div className="container">
        <h2 className="section-title">Visit Us</h2>
        <p className="section-subtitle">
          Located in the heart of Abuja, Nigeria – easily accessible from anywhere in the city
        </p>

        <div className="location__content">
          <div className="location__info">
            <div className="location__address">
              <div className="info-item">
                <MapPin size={24} />
                <div>
                  <h3>Address</h3>
                  <p>Plot 123c Aminu Kano Crescent<br />Wuse 2<br />Abuja, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="location__hours">
              <div className="info-item">
                <Clock size={24} />
                <div>
                  <h3>Opening Hours</h3>
                  <div className="hours-list">
                    <div className="hour-item">
                      <span>Monday - Thursday</span>
                      <span>5:00 PM - 10:00 PM</span>
                    </div>
                    <div className="hour-item">
                      <span>Friday - Saturday</span>
                      <span>5:00 PM - 11:00 PM</span>
                    </div>
                    <div className="hour-item">
                      <span>Sunday</span>
                      <span>4:00 PM - 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="location__contact">
              <div className="info-item">
                <Phone size={24} />
                <div>
                  <h3>Contact</h3>
                  <p>Phone: 234 806 584 0512<br />Email: info@4688bistro.com</p>
                </div>
              </div>
            </div>

            {/* <div className="location__directions">
              <div className="info-item">
                <Navigation size={24} />
                <div>
                  <h3>Getting Here</h3>
                  <p>Valet parking available<br />Public parking garage across the street<br />Subway: Lines 4, 5, 6 to Union Square</p>
                </div>
              </div>
            </div> */}

            <div className="location__actions">
              <a 
                href="https://maps.google.com/?q=123+Culinary+Street,+New+York,+NY+10001" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn"
              >
                Get Directions
              </a>
              <a href="tel:+15551234567" className="btn btn-outline">
                Call Us
              </a>
            </div>
          </div>

          <div className="location__map">
            <div className="map-placeholder">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.796116067851!2d7.488571!3d9.082002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5c4b6e8f8b%3A0x8f7f8c2e7e3b2c8f!2sPlot%20123%20Aminu%20Kano%20Crescent%2C%20Wuse%202%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1620912481443"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="4688 Bistro Abuja Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;