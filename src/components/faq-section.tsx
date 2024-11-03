import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export default function FAQSection() {
  const faqData = [
    {
      question: "What services does PLTFRM.WTF offer?",
      answer: "We offer a comprehensive range of creative services including branding, graphic design, digital marketing, content creation, web development, and social media management. Our team delivers high-quality solutions tailored to meet your specific business needs."
    },
    {
      question: "How do you approach new projects?",
      answer: "We begin each project with a thorough consultation to understand your goals, target audience, and brand vision. Our team then develops a customized strategy, maintaining clear communication throughout the process to ensure we meet and exceed your expectations."
    },
    {
      question: "What industries do you work with?",
      answer: "We work with clients across various industries, from startups to established enterprises. Our experience spans across technology, retail, healthcare, education, and more. Each project is approached with industry-specific insights and creative solutions."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on scope and complexity. We provide detailed timelines during our initial consultation and keep you updated throughout the process. Our team is committed to delivering quality work within agreed-upon deadlines."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, we provide ongoing support and maintenance services to ensure your project continues to perform optimally. We also offer training and documentation to help your team manage day-to-day operations effectively."
    }
  ]

  return (
    <div className="w-full bg-white">
      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border  rounded-lg">
                <AccordionTrigger className="text-lg font-semibold py-4 px-6 text-black">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 px-6 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2B42F3] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">PLTFRM.WTF</h3>
              <p className="text-sm">Crafting digital experiences that drive results.</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact</h4>
              <p className="text-sm">hello@pltfrm.wtf</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Address</h4>
              <p className="text-sm">
                123 Creative Street<br />
                Design District<br />
                New York, NY 10001
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
            <p>&copy; {new Date().getFullYear()} PLTFRM.WTF. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}