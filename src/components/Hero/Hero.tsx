import React from 'react';
import './Hero.scss';

const Hero: React.FC = () => {
  const scrollToReservations = () => {
    const element = document.getElementById('reservations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__background">
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80"
          alt="Modern technology workspace"
        />
        <div className="hero__overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title fade-in-up">Welcome to 4688 Technologies</h1>
          <p className="hero__subtitle fade-in-up">
            Empowering your business with innovative technology solutions: Software Development, IT Infrastructure, Networking, Cybersecurity, Mobile Development, and more.
          </p>
          <div className="hero__actions fade-in-up">
            <button className="btn" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}>
              Our Services
            </button>
            <button 
              className="btn-hero-outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;