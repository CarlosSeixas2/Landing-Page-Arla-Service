import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Differentials } from "./components/Differentials";
import { About } from "./components/About";
import { Gallery } from "./components/Gallery";
import { HowWeWork } from "./components/HowWeWork";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { Location } from "./components/Location";
import { CtaFinal } from "./components/CtaFinal";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { WhatsAppTriage } from "./components/WhatsAppTriage";

function App() {
  return (
    <div className="min-h-screen bg-[#090A0C] text-[#F5F5F5] font-sans antialiased relative selection:bg-[#1473E6]/30 selection:text-white">
      <div className="site-atmosphere" aria-hidden="true" />

      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-[2]">
        <Hero />
        <Services />
        <Differentials />
        <About />
        <Gallery />
        <HowWeWork />
        <Testimonials />
        <Faq />
        <Location />
        <CtaFinal />
      </main>

      {/* Footer */}
      <div className="relative z-[2]">
        <Footer />
      </div>

      {/* Persistent Floating WhatsApp Action */}
      <WhatsAppButton />
      <WhatsAppTriage />
    </div>
  );
}

export default App;
