import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, Mail, User } from 'lucide-react';
import './Reservations.scss';

const Reservations: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    alert('Thank you! Your reservation request has been submitted. We will contact you shortly to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  return (
    <section id="reservations" className="reservations section">
      <div className="container">
        <h2 className="section-title">Make a Reservation</h2>
        <p className="section-subtitle">
          Reserve your table for an unforgettable dining experience
        </p>

        <div className="reservations__content">
          <div className="reservations__info">
            <h3>Restaurant Hours</h3>
            <div className="reservations__hours">
              <div className="hours-item">
                <span>Monday - Thursday</span>
                <span>5:00 PM - 10:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Friday - Saturday</span>
                <span>5:00 PM - 11:00 PM</span>
              </div>
              <div className="hours-item">
                <span>Sunday</span>
                <span>4:00 PM - 9:00 PM</span>
              </div>
            </div>

            <div className="reservations__contact">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <Phone size={20} />
                <span>(555) 123-4567</span>
              </div>
              <div className="contact-item">
                <Mail size={20} />
                <span>reservations@4688Bistro.com</span>
              </div>
            </div>

            <div className="reservations__policies">
              <h3>Reservation Policies</h3>
              <ul>
                <li>Reservations are recommended, especially on weekends</li>
                <li>We hold tables for 15 minutes past reservation time</li>
                <li>Large parties (8+) may require a deposit</li>
                <li>Special dietary requirements can be accommodated with advance notice</li>
              </ul>
            </div>
          </div>

          <form className="reservations__form" onSubmit={handleSubmit}>
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

            <div className="form-row">
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

              <div className="form-group">
                <div className="input-wrapper">
                  <Phone size={20} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <div className="input-wrapper">
                  <Calendar size={20} />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <Clock size={20} />
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <div className="input-wrapper">
                  <Users size={20} />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <option key={num} value={num.toString()}>
                        {num} Guest{num !== 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="specialRequests"
                placeholder="Special requests or dietary requirements (optional)"
                value={formData.specialRequests}
                onChange={handleChange}
                rows={4}
              />
            </div>

            <button type="submit" className="btn reservations__submit">
              Request Reservation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservations;