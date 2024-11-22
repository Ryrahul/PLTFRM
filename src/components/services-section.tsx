"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { ImageIcon, ShoppingCart, Code, MessageSquare } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  features: string[];
}

const services: Service[] = [
  {
    title: "Graphics & Video",
    description: "Stunning visuals that capture attention and tell your story",
    icon: ImageIcon,
    color: "bg-[#0D3B66]",
    features: [
      "Motion Graphics",
      "Brand Identity",
      "Video Production",
      "3D Animation",
    ],
  },
  {
    title: "Ecommerce",
    description:
      "Convert browsers into buyers with seamless shopping experiences",
    icon: ShoppingCart,
    color: "bg-[#F4D35E]",
    features: [
      "Custom Stores",
      "Payment Integration",
      "Inventory Management",
      "Analytics",
    ],
  },
  {
    title: "Web & App",
    description: "Digital solutions that work flawlessly across all devices",
    icon: Code,
    color: "bg-[#0D3B66]",
    features: [
      "Progressive Web Apps",
      "Mobile Development",
      "UI/UX Design",
      "Cloud Solutions",
    ],
  },
  {
    title: "Content & Marketing",
    description: "Strategic content that drives engagement and growth",
    icon: MessageSquare,
    color: "bg-[#F4D35E]",
    features: [
      "Content Strategy",
      "Social Media",
      "SEO Optimization",
      "Email Campaigns",
    ],
  },
];

export default function ServicesSection() {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          controls.start("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative bg-[#0D3B66] px-4 py-16 md:px-6 lg:px-8"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      <div className="mx-auto max-w-6xl pt-8">
        <motion.h1
          className="mb-16 text-4xl font-extrabold text-[#FAF0CA] md:text-5xl lg:text-6xl"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          Our Services
        </motion.h1>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="overflow-hidden bg-[#FAF0CA] shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex items-start gap-4 p-6">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${service.color}`}
                  >
                    <service.icon className="h-6 w-6 text-[#FAF0CA]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-[#0D3B66]">
                      {service.title}
                    </h3>
                    <p className="text-[#0D3B66]">{service.description}</p>
                    <ul className="mt-2 space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="text-sm text-[#0D3B66]"
                        >
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="mt-12 text-center text-lg text-[#FAF0CA]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.4 },
            },
          }}
        >
          We offer these services and many more in-house to meet all your
          digital needs.
        </motion.p>
      </div>
    </motion.div>
  );
}
