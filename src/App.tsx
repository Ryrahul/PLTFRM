import AboutUs from "./components/aboutus-section";
import BrandCarousel from "./components/brand-caraousel";
import ContactUs from "./components/contact-us";
import FAQSection from "./components/faq-section";
import FeaturedProjects from "./components/featuredProjects";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Navbar from "./components/navbar";
import ServicesSection from "./components/services-section";
import ClientTestimonials from "./components/testimonial";
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
      <div id="projects">
        <FeaturedProjects />
      </div>
      <div id="testimonials">
        <ClientTestimonials />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <div id="contact-us">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
