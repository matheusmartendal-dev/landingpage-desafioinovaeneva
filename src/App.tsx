import React from 'react';
import Header from './components/Header';
import Webdoor from './components/Webdoor';
import TitleTextHighlight from './components/TitleTextHighlight';
import NumbersHighlight from './components/NumbersHighlight';
import NossaAtuacao from './components/NossaAtuacao';
import VenhaParaEneva from './components/VenhaParaEneva';
import DecarbonizationBanner from './components/DecarbonizationBanner';
import NewsSlider from './components/NewsSlider';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-white min-h-screen font-sans antialiased text-[#1C2D37] selection:bg-[#99C21C] selection:text-[#002D4B] scroll-smooth">
      {/* Absolute top sticky header */}
      <Header />

      {/* Main Container Layout */}
      <main className="relative">
        {/* Animated slider hero section */}
        <Webdoor />

        {/* High-impact description block */}
        <TitleTextHighlight />

        {/* Dynamic statistics section */}
        <NumbersHighlight />

        {/* Interactive sliding accordion display */}
        <NossaAtuacao />

        {/* Interactive testimonial loop section */}
        <VenhaParaEneva />

        {/* Loop video parallax-style truck banner */}
        <DecarbonizationBanner />

        {/* Horizontal scroll news section */}
        <NewsSlider />

        {/* Expandable FAQs and official contacts panel */}
        <FAQ />
      </main>

      {/* Extensive sitemap and privacy footer */}
      <Footer />
    </div>
  );
}
