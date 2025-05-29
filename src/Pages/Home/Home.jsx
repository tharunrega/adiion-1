import React from 'react';
import Hero from '../../components/Hero/Hero';
import HowWeWork from '../../components/HowWeWork/HowWeWork';
import ServicesPreview from '../../components/ServicesPreview/ServicesPreview'; // 👈 Add this
import WhyChoose from '../../components/WhyChoose/WhyChoose';

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <HowWeWork />
        <ServicesPreview /> {/* 👈 Add this just above WhyChoose */}
        <WhyChoose />
      </main>
    </>
  );
};

export default Home;
