'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackgroundLayer from '@/components/effects/BackgroundLayer';
import CursorGlow from '@/components/effects/CursorGlow';
import SmoothScroll from '@/components/providers/SmoothScroll';
import PageLoader from '@/components/providers/PageLoader';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Services from '@/sections/Services';
import Contact from '@/sections/Contact';

const Multimedia = dynamic(() => import('@/sections/Multimedia'), {
  ssr: false,
  loading: () => null,
});

export default function HomePage() {
  useEffect(() => {
    document.documentElement.classList.add('lenis');
    return () => document.documentElement.classList.remove('lenis');
  }, []);

  return (
    <SmoothScroll>
      <PageLoader />
      <div className="relative min-h-screen overflow-x-hidden bg-luxury-bg">
        <CursorGlow />
        <BackgroundLayer />
        <ScrollProgress />

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Services />
          <Multimedia />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
