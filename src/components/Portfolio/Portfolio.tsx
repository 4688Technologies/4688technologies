import React from 'react';
import { motion } from 'framer-motion';
import IDCardSystemImg from '/public/images/ID-card-system.png';
import { ExternalLink } from 'lucide-react';
import './Portfolio.scss';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce website with shopping cart, payment integration, and admin dashboard. Built with React and modern CSS.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe API'],
    liveUrl: 'https://al-ameenmd.github.io/markethub',
    githubUrl: 'https://github.com/Al-AmeenMD/markethub.git'
  },
  {
    title: 'ID Card System',
    description: 'A robust ID Card management system for schools, featuring secure card generation, student/staff database integration, and real-time validation. Built with React, Node.js, and MongoDB.',
    image: IDCardSystemImg,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Weather API', 'Chart.js', 'CSS Grid'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'CoinCraft',
    description: 'A comprehensive cryptocurrency price tracking website with real-time market data, price charts, and detailed coin information powered by CoinGecko API.',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'CoinGecko API', 'Chart.js', 'Tailwind CSS'],
    liveUrl: 'https://al-ameenmd.github.io/coincraft/',
    githubUrl: 'https://github.com/Al-AmeenMD/coincraft'
  },
  {
    title: 'Restaurant Website',
    description: 'A beautiful restaurant website with online menu, reservation system, and location integration. Fully responsive design.',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'SCSS', 'Google Maps API', 'EmailJS'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Notes App',
    description: 'A clean and intuitive note-taking application with rich text editing, categories, search functionality, and local storage for seamless note management.',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Local Storage', 'Rich Text Editor', 'CSS Modules'],
    liveUrl: 'https://notes-sigma-ruby.vercel.app',
    githubUrl: 'https://github.com/Al-AmeenMD/notes'
  },
  // Cybersecurity Project
  {
    title: 'Security Audit Dashboard',
    description: 'A web-based dashboard for automated security audits, vulnerability scanning, and compliance reporting. Features real-time alerts and detailed analytics for IT environments.',
    image: 'https://images.pexels.com/photos/5380646/pexels-photo-5380646.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Node.js', 'Express', 'OWASP', 'Socket.io'],
    liveUrl: '#',
    githubUrl: '#'
  },
  // Mobile Development Project
  {
    title: 'Campus Mobile App',
    description: 'A cross-platform mobile app for campus management, including messaging, schedules, notifications, and student services. Built with React Native and Firebase.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React Native', 'Expo', 'Firebase', 'Push Notifications'],
    liveUrl: '#',
    githubUrl: '#'
  },
  // Networking Project
  {
    title: 'Smart Network Monitor',
    description: 'A real-time network monitoring solution with device discovery, bandwidth analytics, and automated outage alerts. Designed for scalable IT infrastructure.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'D3.js', 'SNMP', 'WebSockets', 'Node.js'],
    liveUrl: '#',
    githubUrl: '#'
  }
];

const Portfolio: React.FC = () => (
  <section id="portfolio" className="portfolio section">
    <div className="container-max section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects we've worked on. Each one represents a unique challenge and learning experience.
        </p>
      </motion.div>
      <div className="portfolio__grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="portfolio__item group"
          >
            <div className="portfolio__image-wrapper relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio__image group-hover:scale-105 transition-transform duration-300"
              />
              <div className="portfolio__overlay absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="text-gray-700" />
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="portfolio__info p-6">
              <h3 className="portfolio__project-title">{project.title}</h3>
              <p className="portfolio__description">{project.description}</p>
              <div className="portfolio__tech-list flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="portfolio__tech px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        
      </motion.div>
    </div>
  </section>
);

export default Portfolio;
