import { FC } from "react"
import { ShoppingBag, Megaphone, PenTool } from "lucide-react"
import globe from "../assets/globe.png"
import QuoteButton from "./quote-button"

const HeroSection: FC = () => {
    return (
        <main className="relative">
            <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] grid-rows-[repeat(auto-fill,minmax(40px,1fr))]">
                {Array.from({ length: 1000 }).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-gray-100" />
                ))}
            </div>

            <div className="container mx-auto px-4 py-20 relative">
                <div className="max-w-4xl mx-auto text-center space-y-2">
                    <h1 className="text-5xl md:text-7xl leading-normal font-extrabold text-[#2B42F3]">
                        Watch The Future
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 font-medium">
                        We craft digital solutions that drive growth, boost visibility, and engage audiences.
                    </p>
                    <QuoteButton />
                </div>

                <div className="mt-10 flex justify-center">
                    <div className="relative w-[150px] md:w-[290px]">
                        <img
                            src={globe}
                            alt="Crystal ball illustration"
                            width={400}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                <div className="absolute top-1/4 left-10">
                    <div className="bg-blue-600 text-white p-4 rounded-full">
                        <ShoppingBag className="w-6 h-6" />
                    </div>
                </div>
                <div className="absolute top-1/3 right-10">
                    <div className="bg-blue-600 text-white p-4 rounded-full">
                        <Megaphone className="w-6 h-6" />
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/4">
                    <div className="bg-red-500 text-white p-4 rounded-full">
                        <PenTool className="w-6 h-6" />
                    </div>
                </div>

            </div>
        </main>
    )
}

export default HeroSection
