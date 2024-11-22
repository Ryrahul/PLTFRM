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
      answer:
        "We offer a comprehensive range of creative services including graphic design, web development, digital marketing, branding, and video production. Our team is equipped to handle projects of various scales and complexities, ensuring that we can meet the diverse needs of our clients.",
    },
    {
      question: "How do you approach new projects?",
      answer:
        "We begin each project with a thorough consultation to understand our client's goals, target audience, and unique challenges. From there, we develop a tailored strategy, create a project timeline, and work closely with the client throughout the process to ensure their vision is brought to life effectively and efficiently.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We work with clients across various industries including technology, healthcare, education, e-commerce, and non-profit organizations. Our diverse experience allows us to bring fresh perspectives and innovative solutions to each project, regardless of the industry.",
    },
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a comprehensive branding project could take 2-3 months. We always provide a detailed timeline during our initial consultation and keep our clients updated throughout the process.",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes, we provide ongoing support and maintenance services for all our projects. This includes regular updates, security checks, and performance optimizations for websites, as well as continued brand support and marketing assistance for our branding and marketing clients.",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 px-4 md:px-8 bg-[#FAF0CA]"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-[#0D3B66]">
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
                className="border border-[#0D3B66] rounded-lg bg-white"
              >
                <AccordionTrigger className="text-lg font-semibold py-4 px-6 text-[#0D3B66] hover:text-[#F4D35E] transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66] px-6 pb-4">
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
