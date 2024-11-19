"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function FeaturedProjects({ projects = defaultProjects }) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-[#2b42f3]">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore how we've helped businesses transform their digital presence
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <Button variant="secondary" size="sm" asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const defaultProjects = [
  {
    title: "Sellenza E-commerce Platform",
    description:
      "Revolutionizing student education through hands-on e-commerce experience with our D2C marketplace combining dropshipping and affiliate marketing.",
    imageUrl:
      "https://sjc.microlink.io/N1Pws06L4KQ9SCo0AIvbWE4ji_0NP1KRTbhPaFe1PZJTQTEVw58W5mRDFIPcXOWKdtfxZ5bwGX7iYh5z4PCaIw.jpeg",
    link: "https://www.sellenza.com/",
  },
  {
    title: "Aanyavaan Silk Sarees",
    description:
      "Curated collection of luxurious silk sarees blending traditional craftsmanship with contemporary style, offering timeless elegance for the modern woman.",
    imageUrl:
      "https://sjc.microlink.io/N1Pws06L4KQ9SCo0AIvbWE4ji_0NP1KRTbhPaFe1PZJTQTEVw58W5mRDFIPcXOWKdtfxZ5bwGX7iYh5z4PCaIw.jpeg",
    link: "https://www.sellenza.com/collections/clothing",
  },
];
