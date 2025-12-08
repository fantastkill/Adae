import React from 'react';
import NavigationBar from '../components/home/NavigationBar';
import HeroSection from '../components/home/HeroSection';
import ImpactSection from '../components/home/ImpactSection';
import ProjectsSection from '../components/home/ProjectsSection';
import GoalsSection from '../components/home/GoalsSection';
import JoinSection from '../components/home/JoinSection';
import FooterSection from '../components/home/FooterSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <HeroSection />
      <ImpactSection />
      <ProjectsSection />
      <GoalsSection />
      <JoinSection />
      <FooterSection />
    </div>
  );
};

export default Home;
