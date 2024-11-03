import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Set up the Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation variants for the main section
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative bg-white"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }} // Delay for the section animation
    >
      {/* Zigzag border */}
      <div className="absolute top-0 left-0 right-0 h-8">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0V16L20 32L40 16L60 32L80 16L100 32L120 16L140 32L160 16L180 32L200 16L220 32L240 16L260 32L280 16L300 32L320 16L340 32L360 16L380 32L400 16L420 32L440 16L460 32L480 16L500 32L520 16L540 32L560 16L580 32L600 16L620 32L640 16L660 32L680 16L700 32L720 16L740 32L760 16L780 32L800 16L820 32L840 16L860 32L880 16L900 32L920 16L940 32L960 16L980 32L1000 16L1020 32L1040 16L1060 32L1080 16L1100 32L1120 16L1140 32L1160 16L1180 32L1200 16V0H0Z"
            fill="#2d43f3" // Color of the zigzag border
          />
        </svg>
      </div>
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left column - Text content */}
          <div className="space-y-8">
            <motion.h1
              className="text-7xl font-extrabold text-[#2b42f3] relative inline-block"
              variants={textVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }} // Delay for the title animation
            >
              About Us
              <div className="absolute -inset-1 border border-dashed border-blue-300 -z-10"></div>
            </motion.h1>
            <div className="space-y-6 text-lg leading-relaxed relative">
              {[
                "PLTFRM.WTF is a comprehensive creative agency offering a wide range of services tailored to meet your business needs.",
                "From branding and graphic design to digital marketing and content creation, we deliver high-quality solutions that drive results.",
                "Our team is dedicated to providing top-notch client satisfaction, and we're proud to have collaborated with numerous clients across various industries, helping them elevate their brands and achieve their goals.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  className="relative inline-block"
                  variants={textVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.3 + index * 0.1, // Staggered delay for each paragraph
                  }}
                >
                  {text}
                  <div className="absolute -inset-1 border border-dashed border-blue-300 -z-10"></div>
                </motion.p>
              ))}
            </div>
          </div>
          {/* Right column - Image placeholder */}
          <motion.div
            className="bg-red-500 aspect-square relative"
            variants={textVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }} // Delay for the image animation
          >
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="border-2 border-white p-8 w-full h-full flex items-center justify-center">
                <p className="text-white text-4xl font-bold text-center leading-tight">
                  A photo that relates to the agency
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
