"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Send, CheckCircle, MapPin, Phone, Mail } from "lucide-react";

export default function ContactUs() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setIsSubmitted(true);
  };

  const ContactInfo = () => (
    <div className="space-y-6 md:space-y-8">
      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 mt-1" />
        <div>
          <h3 className="font-semibold text-xl mb-1">Email</h3>
          <p className="text-base">support@sellenza.com</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 mt-1" />
        <div>
          <h3 className="font-semibold text-xl mb-1">Phone</h3>
          <p className="text-base">+91 9980481817</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 mt-1" />
        <div>
          <h3 className="font-semibold text-xl mb-1">Address</h3>
          <p className="text-base">
            186, 24th Cross Rd, Siddanna Layout
            <br />
            Banashankari Stage II, Banashankari,
            <br />
            Bengaluru, Karnataka 560070
          </p>
        </div>
      </div>
    </div>
  );

  const ContactForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-base font-medium text-gray-700 mb-2"
        >
          Name
        </label>
        <Input
          id="name"
          placeholder="Your Name"
          className="border-gray-300 focus:border-[#0D3B66] focus:ring-[#0D3B66] text-base py-2"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-base font-medium text-gray-700 mb-2"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="border-gray-300 focus:border-[#0D3B66] focus:ring-[#0D3B66] text-base py-2"
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-base font-medium text-gray-700 mb-2"
        >
          Subject
        </label>
        <Input
          id="subject"
          placeholder="What's this about?"
          className="border-gray-300 focus:border-[#0D3B66] focus:ring-[#0D3B66] text-base py-2"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-base font-medium text-gray-700 mb-2"
        >
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your project"
          rows={4}
          className="border-gray-300 focus:border-[#0D3B66] focus:ring-[#0D3B66] text-base"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full gap-2 bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white transition-colors duration-300 text-base py-4"
      >
        Send Message <Send className="w-5 h-5" />
      </Button>
    </form>
  );

  return (
    <section className="py-12 md:py-24 bg-[#FAF0CA] min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Desktop version */}
          <div className="hidden md:grid md:grid-cols-2">
            <div className="p-12 lg:p-16 bg-[#0D3B66] text-white">
              <h2 className="text-5xl font-bold mb-8">Contact Us</h2>
              <p className="text-xl mb-12 leading-relaxed">
                We'd love to hear from you. Fill out the form and we'll get back
                to you as soon as possible.
              </p>
              <ContactInfo />
            </div>
            <div className="p-12 lg:p-16">
              {!isSubmitted ? (
                <ContactForm />
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-24 h-24 text-[#F4D35E] mx-auto mb-6" />
                  <h3 className="text-3xl font-semibold text-[#0D3B66] mb-4">
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

          {/* Mobile version */}
          <div className="md:hidden">
            <div className="p-8 bg-[#0D3B66] text-white">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg mb-6 leading-relaxed">
                We'd love to hear from you. Fill out the form and we'll get back
                to you as soon as possible.
              </p>
            </div>
            <div className="p-8">
              {!isSubmitted ? (
                <>
                  <ContactForm />
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-2xl font-bold mb-4 text-[#0D3B66]">
                      Get in Touch
                    </h3>
                    <ContactInfo />
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="w-16 h-16 text-[#F4D35E] mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-[#0D3B66] mb-3">
                    Thank You!
                  </h3>
                  <p className="text-lg text-gray-600">
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
