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
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
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
            fill="#2d43f3"
          />
        </svg>
      </div>
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="flex flex-col md:flex-row gap-12 items-stretch max-w-6xl mx-auto">
          {/* Left column - Text content */}
          <div className="space-y-8 md:w-1/2 flex-1">
            <motion.h1
              className="text-5xl font-extrabold text-[#2b42f3] relative inline-block"
              variants={textVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
            >
              About Us
              <span className="absolute -inset-1 border border-dashed border-blue-300 -z-10"></span>
            </motion.h1>
            <div className="space-y-6 text-lg leading-relaxed relative">
              <motion.p
                className="relative"
                variants={textVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.4 }}
              >
                <a
                  href="https://pltfrm-ruddy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-500 hover:underline"
                >
                  PLTFRM.WTF
                </a>{" "}
                is a hub of innovation and imagination, true to its name WTF –{" "}
                <em>Watch the Future</em>. We offer a diverse range of services
                designed to meet your business needs, including:
              </motion.p>
              <motion.ul
                className="list-disc ml-6 space-y-2"
                variants={textVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              >
                <li>Branding and graphic design</li>
                <li>Digital marketing</li>
                <li>Content creation</li>
              </motion.ul>
              <motion.p
                className="relative"
                variants={textVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.6 }}
              >
                We deliver high-quality solutions that drive tangible results.
                Our dedicated team takes pride in ensuring top-notch client
                satisfaction, having successfully collaborated with numerous
                clients across industries to elevate their brands and achieve
                their goals.
              </motion.p>
              <motion.p
                className="relative"
                variants={textVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.7 }}
              >
                What makes us truly unique is that{" "}
                <a
                  href="https://pltfrm-ruddy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-500 hover:underline"
                >
                  PLTFRM.WTF
                </a>{" "}
                is a student-led initiative, the brainchild of Dr. Chenraj
                Roychand, Chancellor of Jain (Deemed-to-be University). This
                “earn while you learn” program empowers the student community to
                develop real-world skills while making a significant impact.
              </motion.p>
              <motion.p
                className="relative"
                variants={textVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.8 }}
              >
                Our innovative ventures include:
              </motion.p>
              <motion.ul
                className="list-disc ml-6 space-y-2"
                variants={textVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 0.9 }}
              >
                <li>
                  <a
                    href="https://www.sellenza.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Sellenza
                  </a>
                  : A thriving e-commerce marketplace.
                </li>
                <li>
                  <a
                    href="https://www.sellenza.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-blue-500 hover:underline"
                  >
                    Aanyavaan
                  </a>{" "}
                  : A white-labeled saree brand.
                </li>
                <li>
                  Supporting businesses across various sectors to take flight.
                </li>
              </motion.ul>
              <motion.p
                className="relative"
                variants={textVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5, ease: "easeInOut", delay: 1.0 }}
              >
                At{" "}
                <a
                  href="https://pltfrm-ruddy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-500 hover:underline"
                >
                  PLTFRM.WTF
                </a>
                , creativity meets purpose, helping brands grow while fostering
                the next generation of business leaders.
              </motion.p>
            </div>
          </div>
          {/* Right column - Image placeholder */}
          <motion.div
            className="bg-red-500 w-full md:w-1/2 flex-1 flex items-center justify-center"
            variants={textVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          >
            <div className="p-8 border-2 border-white w-full h-full flex items-center justify-center">
              <p className="text-white text-3xl font-bold text-center">
                A photo that relates to the agency
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
