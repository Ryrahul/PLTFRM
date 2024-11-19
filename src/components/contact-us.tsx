"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

import { Send, CheckCircle, MapPin, Phone, Mail } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-12 lg:p-16 bg-[#2B42F3] text-white">
              <h2 className="text-5xl font-bold mb-8">Contact Us</h2>
              <p className="text-xl mb-12 leading-relaxed">
                We'd love to hear from you. Fill out the form and we'll get back
                to you as soon as possible.
              </p>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <Mail className="w-8 h-8 mt-1" />
                  <div>
                    <h3 className="font-semibold text-2xl mb-2">Email</h3>
                    <p className="text-lg">support@sellenza.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <Phone className="w-8 h-8 mt-1" />
                  <div>
                    <h3 className="font-semibold text-2xl mb-2">Phone</h3>
                    <p className="text-lg">+91 9980481817</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <MapPin className="w-8 h-8 mt-1" />
                  <div>
                    <h3 className="font-semibold text-2xl mb-2">Address</h3>
                    <p className="text-lg">
                      186, 24th Cross Rd, Siddanna Layout
                      <br />
                      Banashankari Stage II, Banashankari,
                      <br />
                      Bengaluru, Karnataka 560070
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-12 lg:p-16">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-lg font-medium text-gray-700 mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      className="border-gray-300 focus:border-[#2B42F3] focus:ring-[#2B42F3] text-lg py-3"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="border-gray-300 focus:border-[#2B42F3] focus:ring-[#2B42F3] text-lg py-3"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-lg font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="border-gray-300 focus:border-[#2B42F3] focus:ring-[#2B42F3] text-lg py-3"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-lg font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project"
                      rows={6}
                      className="border-gray-300 focus:border-[#2B42F3] focus:ring-[#2B42F3] text-lg"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 bg-[#2B42F3] hover:bg-[#1E32D6] text-white transition-colors duration-300 text-xl py-6"
                  >
                    Send Message <Send className="w-6 h-6" />
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
                  <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-xl text-gray-600">
                    Your message has been sent successfully. We'll get back to
                    you soon.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
