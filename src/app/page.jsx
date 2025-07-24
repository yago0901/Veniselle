"use client";

import { useRef } from "react";
import Actions from "@/components/Actions";
import Hero from "@/components/Hero";
import Statistics from "@/components/Statistics";
import Symptoms from "@/components/Symptoms";
import Composition from "@/components/Composition";
import Adding from "@/components/Adding";
import Specialist from "@/components/Specialist";
import Faq from "@/components/Faq";
import Reviews from "@/components/Reviews";
import Bottom from "@/components/Bottom";
import Footer from "@/components/Footer";
import "./globals.css";
import CookieBanner from '@/components/cookie';

const App = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{position: 'relative'}}>
      <Hero scrollToForm={scrollToForm} />
      <Statistics scrollToForm={scrollToForm} />
      <Symptoms />
      <Actions scrollToForm={scrollToForm} />
      <Composition />
      <Adding />
      <Specialist scrollToForm={scrollToForm} />
      <Faq />
      <Reviews />
      <div ref={formRef}>
        <Bottom />
      </div>
      <Footer />
      <CookieBanner/>
    </div>
  );
};

export default App;
