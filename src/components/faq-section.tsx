import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function FAQSection() {
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

  // Animation variants for the section and items
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const faqData = [
    {
      question: "What services does PLTFRM.WTF offer?",
      answer:
        "We offer a comprehensive range of creative services including branding, graphic design, digital marketing, content creation, web development, and social media management. Our team delivers high-quality solutions tailored to meet your specific business needs.",
    },
    {
      question: "How do you approach new projects?",
      answer:
        "We begin each project with a thorough consultation to understand your goals, target audience, and brand vision. Our team then develops a customized strategy, maintaining clear communication throughout the process to ensure we meet and exceed your expectations.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with clients across various industries, from startups to established enterprises. Our experience spans across technology, retail, healthcare, education, and more. Each project is approached with industry-specific insights and creative solutions.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary depending on scope and complexity. We provide detailed timelines during our initial consultation and keep you updated throughout the process. Our team is committed to delivering quality work within agreed-upon deadlines.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes, we provide ongoing support and maintenance services to ensure your project continues to perform optimally. We also offer training and documentation to help your team manage day-to-day operations effectively.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* FAQ Section */}
      <motion.section
        ref={sectionRef}
        className="py-16 px-4 md:px-8"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ duration: 0.8, ease: "easeInOut" }} // Animation for the section
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 0.3 + index * 0.1, // Staggered delay for each item
                }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border rounded-lg"
                >
                  <AccordionTrigger className="text-lg font-semibold py-4 px-6 text-black">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 px-6 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#2B42F3] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">PLTFRM.WTF</h3>
              <p className="text-sm">
                Crafting digital experiences that drive results.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <p className="text-sm">support@sellenza.com</p>
              <p className="text-sm">+91 9980481817</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Address</h4>
              <p className="text-sm">
                186, 24th Cross Rd, Siddanna Layout
                <br />
                Banashankari Stage II, Banashankari,
                <br />
                Bengaluru, Karnataka 560070
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-200 transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="hover:text-blue-200 transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-400 mt-8 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} PLTFRM.WTF. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
