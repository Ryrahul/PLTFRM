

// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     // children: [
//     //   {
//     //     path: "/",
//     //     element: <LandingPage />,
//     //   },
//     // ],
//   },
// ]);

import AboutUs from "./components/aboutus-section"
import HeroSection from "./components/hero-section"
import Navbar from "./components/navbar"
import ServicesSection from "./components/services-section"

function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutUs />
    </div>
  )
}

export default App
