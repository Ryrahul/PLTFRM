import { Card, CardContent } from "./ui/card";
import { Pen } from "lucide-react";

interface Service {
  title: string;
  description: string;
}

// Create a services array with example data
const services: Service[] = Array(6).fill({
  title: "Graphics & Video",
  description: "We craft captivating visuals that bring your brand to life, from eye-catching logos to engaging social media posts.",
});

export default function ServicesSection() {
  return (
    <div className="relative bg-[#2b42f3] px-4 py-16 md:px-6 lg:px-8">
      {/* Zigzag border */}
      <div className="absolute top-0 left-0 right-0 h-8">
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
      </div>
      <div className="mx-auto max-w-6xl pt-8">
        <h1 className="mb-16 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
          Our Services
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden bg-white">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600">
                  <Pen className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-500">{service.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-12 text-center text-lg text-white">
          We will have some extra text here, explaining that we have these services and many more in-house.
        </p>
      </div>
    </div>
  );
}
