import React from 'react';
import { Code, Server, Shield, Smartphone, Network } from 'lucide-react';
import './Services.scss';

const services = [
  {
    icon: <Code size={32} />,
    title: 'Software Development',
    description: 'Custom web, mobile, and enterprise software tailored to your business needs.'
  },
  {
    icon: <Server size={32} />,
    title: 'IT Infrastructure',
    description: 'Robust, scalable IT infrastructure design, deployment, and management.'
  },
  {
    icon: <Network size={32} />,
    title: 'Networking',
    description: 'Reliable network architecture, implementation, and support for seamless connectivity.'
  },
  {
    icon: <Shield size={32} />,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your data, systems, and reputation.'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps to engage your customers on any device.'
  },
  // Add more services as needed
];

const Services: React.FC = () => (
  <section id="services" className="services section">
    <div className="container">
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle">
        Explore our comprehensive range of technology solutions designed to drive your business forward.
      </p>
      <div className="services__list">
        {services.map((service, idx) => (
          <div key={idx} className="services__item">
            <div className="services__icon">{service.icon}</div>
            <h3 className="services__title">{service.title}</h3>
            <p className="services__description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
