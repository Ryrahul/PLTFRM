import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D3B66] text-white">
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
              <a href="#" className="hover:text-[#FAF0CA] transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-[#FAF0CA] transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-[#FAF0CA] transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-[#FAF0CA] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#FAF0CA]/20 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} PLTFRM.WTF. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
