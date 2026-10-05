import {
  About,
  CtaFinal,
  Differentials,
  Faq,
  Gallery,
  Hero,
  HowWeWork,
  Location,
  Services,
  // Testimonials,
} from "./sections";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { WhatsAppTriage } from "./components/WhatsAppTriage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#090A0C] text-[#F5F5F5] font-sans antialiased relative selection:bg-[#1473E6]/30 selection:text-white">
      <div className="site-atmosphere" aria-hidden="true" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Services />
        <Differentials />
        <About />
        <Gallery />
        <HowWeWork />
        {/* <Testimonials /> */}
        <Faq />
        <Location />
        <CtaFinal />
      </main>

      <div className="relative">
        <Footer />
      </div>

      <WhatsAppButton />
      <WhatsAppTriage />
    </div>
  );
}

export default App;
