import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group rounded-3xl overflow-hidden bg-white border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#2b42f3] focus:ring-offset-2"
              >
                <div className="aspect-[4/3] relative bg-gray-50 p-6">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-contain w-full h-full p-4"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <Badge variant="secondary" className="shrink-0">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-[#2b42f3] flex items-center gap-2 group-hover:underline">
                      View Project
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-20 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2b42f3] to-[#2b42f3]/90 p-8 md:p-12">
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-white">
                  Ready to Transform Your Digital Presence?
                </h3>
                <p className="text-white/80 text-lg max-w-xl">
                  Let's collaborate to create something extraordinary that sets
                  your brand apart.
                </p>
              </div>
              <Button
                size="lg"
                variant="secondary"
                className="group min-w-[200px]"
                asChild
              >
                <a href="#contact-us" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const defaultProjects = [
  {
    title: "Sellenza E-commerce Platform",
    description:
      "Revolutionizing student education through hands-on e-commerce experience with our D2C marketplace combining dropshipping and affiliate marketing.",
    imageUrl: "/1.png",
    link: "https://www.sellenza.com/",
    category: "E-commerce",
    tags: ["Education", "Marketplace"],
  },
  {
    title: "Aanyavaan Silk Sarees",
    description:
      "Curated collection of luxurious silk sarees blending traditional craftsmanship with contemporary style, offering timeless elegance for the modern woman.",
    imageUrl: "/2.png",
    link: "https://www.sellenza.com/collections/clothing",
    category: "Fashion",
    tags: ["Luxury", "Traditional"],
  },
];
