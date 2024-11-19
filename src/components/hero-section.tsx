import { FC } from "react";
import {
  ShoppingBag,
  Megaphone,
  PenTool,
  Globe,
  FileText,
  Video,
} from "lucide-react";
import QuoteButton from "./quote-button";
import { motion } from "framer-motion";

const FloatingIcon: FC<{
  Icon: typeof ShoppingBag;
  color: "blue" | "red";
  position: string;
  delay?: string;
}> = ({ Icon, color, position, delay = "0s" }) => (
  <motion.div
    className={`absolute ${position} transform hover:scale-110 transition-all duration-300`}
    initial={{ y: 0 }}
    animate={{ y: -50 }}
    transition={{
      duration: 1.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay: parseFloat(delay),
    }}
  >
    <div
      className={`${
        color === "blue" ? "bg-blue-600" : "bg-red-500"
      } text-white p-3 sm:p-4 md:p-4 rounded-full shadow-lg`}
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />
    </div>
  </motion.div>
);

const HeroSection: FC = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] grid-rows-[repeat(auto-fill,minmax(40px,1fr))] h-full">
        {Array.from({ length: 1500 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-gray-100" />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="max-w-4xl mx-auto text-center py-6 space-y-8 md:space-y-4 md:py-8 relative z-10">
          <motion.h1
            className="text-4xl md:text-7xl mt-6 md:mt-1 leading-tight md:leading-normal font-extrabold text-[#2B42F3] relative z-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Watch The Future
          </motion.h1>
          <p className="text-lg md:py-4 md:text-2xl text-gray-600 font-medium px-4 relative z-10 ">
            We craft digital solutions that drive growth, boost visibility, and
            engage audiences.
          </p>
          <div className="py-16">
            <QuoteButton />
          </div>
        </div>

        <div className="mt-20 flex justify-center min-h-">
          <div className="relative w-[80%] sm:w-[60%] md:w-[40%] lg:w-[40%] xl:w-[40%]">
            <img src="./globe.svg" className="w-full h-auto object-cover" />
          </div>
        </div>

        {/* Floating Icons - Responsive Positioning */}
        <FloatingIcon
          Icon={ShoppingBag}
          color="blue"
          position="top-[15%] left-4 sm:left-8 md:top-1/4 md:left-16 lg:left-12 xl:left-16"
          delay="0s"
        />
        <FloatingIcon
          Icon={Megaphone}
          color="blue"
          position="top-[15%] right-4 sm:right-8 md:top-1/4 md:right-16 lg:right-12 xl:right-16"
          delay="0s"
        />
        <FloatingIcon
          Icon={PenTool}
          color="red"
          position="top-[40%] left-4 sm:left-8 md:top-1/2 md:left-1/4 md:mt-20 lg:left-16 xl:left-1/4"
          delay="0.5s"
        />
        <FloatingIcon
          Icon={Globe}
          color="blue"
          position="bottom-[30%] right-4 sm:right-8 md:bottom-1/3 md:bottom-16 md:right-32 lg:right-16 xl:right-24"
          delay="1.5s"
        />
        <FloatingIcon
          Icon={FileText}
          color="red"
          position="top-[40%] right-4 sm:right-8 md:top-1/2 md:right-1/4 md:mt-20 lg:right-16 xl:right-1/4"
          delay="0.5s"
        />
        <FloatingIcon
          Icon={Video}
          color="red"
          position="bottom-[30%] left-4 sm:left-8 md:bottom-1/3 md:bottom-16 md:left-32 lg:left-16 xl:left-24"
          delay="1.2s"
        />
      </motion.div>
    </main>
  );
};

export default HeroSection;
