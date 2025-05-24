import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-list">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>We build fast, secure, and responsive websites tailored to your business goals.</p>
          </div>
          <div className="service-card">
            <h3>Mobile App Development</h3>
            <p>Our team delivers user-friendly apps for both Android and iOS platforms.</p>
          </div>
          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>We craft clean and intuitive designs to ensure a seamless user experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
