// FAQSection.tsx
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { motion } from "framer-motion";

export default function FAQSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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
      answer: "We offer a comprehensive range of creative services...",
    },
    {
      question: "How do you approach new projects?",
      answer: "We begin each project with a thorough consultation...",
    },
    {
      question: "What industries do you work with?",
      answer: "We work with clients across various industries...",
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on scope and complexity...",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, we provide ongoing support and maintenance services...",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 px-4 md:px-8"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
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
                delay: 0.3 + index * 0.1,
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
  );
}
