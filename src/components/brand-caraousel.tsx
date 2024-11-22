import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CompanyData as companies } from "../data/data";

const BrandCarousel: React.FC = () => {
  return (
    <section className="w-full bg-[#0D3B66] py-20 text-white text-center">
      <div className="max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-4">Our Gear</h2>
        <p className="text-lg">
          We work with global brands to deliver robust solutions for our
          clients.
        </p>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 1000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="flex gap-5 sm:gap-10 md:gap-20 items-center">
          {companies.map(({ name, id, path }) => (
            <CarouselItem
              key={id}
              className="basis-1/2 sm:basis-1/3 lg:basis-1/6"
            >
              <img
                src={path}
                alt={name}
                className="h-12 sm:h-16 md:h-24 object-contain"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default BrandCarousel;
