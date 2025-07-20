import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';
import './About.scss';

const About: React.FC = () => {
  const features = [
    {
      icon: <Award size={32} />,
      title: 'Proven Expertise',
      description: 'A team of certified professionals with years of experience delivering technology solutions across industries.'
    },
    {
      icon: <Users size={32} />,
      title: 'Client-Centric',
      description: 'We prioritize your business goals and success, building long-term partnerships based on trust.'
    },
    {
      icon: <Clock size={32} />,
      title: 'Agile & Innovative',
      description: 'Embracing the latest technologies and agile methodologies to deliver impactful results quickly.'
    },
    {
      icon: <Heart size={32} />,
      title: 'Security & Reliability',
      description: 'Your data and operations are protected with robust, secure, and dependable solutions.'
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle">
              Smart Tech. Real Solutions.
            </p>
            
            <div className="about__description">
              <p>
                4688 Technologies is a leading provider of innovative technology solutions, dedicated to helping businesses thrive in the digital age. Our team of experts delivers tailored services in software development, IT infrastructure, networking, cybersecurity, mobile development, and more.
              </p>
              <p>
                <strong>Our Mission:</strong> Empowering businesses through innovative, reliable, and secure technology solutions—enabling growth, efficiency, and digital transformation in an ever-evolving world.
              </p>
              <p>
                With a commitment to excellence, customer satisfaction, and continuous innovation, we partner with organizations to create lasting value and drive success in today’s fast-paced technology landscape.
              </p>
            </div>
          </div>

          <div className="about__image hide-on-mobile">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
              alt="Modern technology team at work"
            />
          </div>
        </div>

        <div className="about__features">
          {features.map((feature, index) => (
            <div key={index} className="about__feature">
              <div className="about__feature-icon">
                {feature.icon}
              </div>
              <h3 className="about__feature-title">{feature.title}</h3>
              <p className="about__feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;