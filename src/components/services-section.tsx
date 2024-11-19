"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { ImageIcon, ShoppingCart, Code, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

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
    color: "bg-[#2B42F3]",
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
    color: "bg-[#FF312E]",
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
    color: "bg-[#FAD403]",
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
    color: "bg-[#2B42F3]",
    features: [
      "Content Strategy",
      "Social Media",
      "SEO Optimization",
      "Email Campaigns",
    ],
  },
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.2) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative bg-[#2b42f3] px-4 py-16 md:px-6 lg:px-8"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
    >
      {/* <div className="absolute top-0 left-0 right-0 h-8 block md:hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 240 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0V4L10 8L20 4L30 8L40 4L50 8L60 4L70 8L80 4L90 8L100 4L110 8L120 4L130 8L140 4L150 8L160 4L170 8L180 4L190 8L200 4L210 8L220 4L230 8L240 4V0H0Z"
            fill="white"
          />
        </svg>
      </div> */}
      {/* 
      <div className="absolute top-0 left-0 right-0 h-8 hidden md:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0V16L20 32L40 16L60 32L80 16L100 32L120 16L140 32L160 16L180 32L200 16L220 32L240 16L260 32L280 16L300 32L320 16L340 32L360 16L380 32L400 16L420 32L440 16L460 32L480 16L500 32L520 16L540 32L560 16L580 32L600 16L620 32L640 16L660 32L680 16L700 32L720 16L740 32L760 16L780 32L800 16L820 32L840 16L860 32L880 16L900 32L920 16L940 32L960 16L980 32L1000 16L1020 32L1040 16L1060 32L1080 16L1100 32L1120 16L1140 32L1160 16L1180 32L1200 16V0H0Z"
            fill="white"
          />
        </svg>
      </div> */}

      <div className="mx-auto max-w-6xl pt-8">
        <h1 className="mb-16 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
          Our Services
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={cardVariants}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.1 + 0.3,
              }}
            >
              <Card className="overflow-hidden bg-white">
                <CardContent className="flex items-start gap-4 p-6">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${service.color}`}
                  >
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-500">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <p className="mt-12 text-center text-lg text-white">
          We offer these services and many more in-house to meet all your
          digital needs.
        </p>
      </div>
    </motion.div>
  );
}
