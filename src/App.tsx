import AboutUs from "./components/aboutus-section";
import BrandCarousel from "./components/brand-caraousel";
import FAQSection from "./components/faq-section";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import ServicesSection from "./components/services-section";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="brands">
        <BrandCarousel />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
    </div>
  );
}

export default App;
