"use client";
import Actions from '@/components/Actions';
import "./globals.css";
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Symptoms from '@/components/Symptoms';
import Composition from '@/components/Composition';
import Adding from '@/components/Adding';
import Specialist from '@/components/Specialist';
import Faq from '@/components/Faq';
import Reviews from '@/components/Reviews';
import Bottom from '@/components/Bottom';
import Footer from '@/components/Footer';

const App = () => {

  return (
    <div >
      <Hero />
      <Statistics />
      <Symptoms />
      <Actions />
      <Composition />
      <Adding />
      <Specialist />
      <Faq />
      <Reviews />
      <Bottom />
      <Footer />
    </div>
  );
};

export default App;
