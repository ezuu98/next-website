import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import About from './components/About';
import Features from './components/Features';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PartnerRegistration from './components/PartnerRegistration';
import Terms from './components/Terms';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Metrics />
              <About />
              <Features />
              <Partners />
              <Testimonials />
              <FAQ />
              <CTA />
              <Footer />
            </>
          } />
          <Route path="/register" element={<PartnerRegistration />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;