import { motion } from "framer-motion";
import { Button } from "./ui/Button";

const HeroSection = () => {
  return (
    <div
      className="
        relative w-full min-h-screen bg-cover md:bg-[position:50%_0%] flex items-center justify-center
        py-16 sm:py-20 md:py-0
        bg-[url('/images/HeroMobil2.webp')]
        sm:bg-[url('/images/HeroTab.png')]
        lg:bg-[url('/images/HeroDesk.png')]
        bg-center
      "
    >
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="relative z-10 flex flex-col items-center px-6 sm:px-8 md:px-10  sm:mt-16 md:mt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <h1
            className="
    font-libre text-slate-100
    text-[28px] sm:text-[36px] md:text-[44px]
    font-bold leading-tight tracking-tight mb-6
  "
          >
            <span className="block">
              Where Global{" "}
              <span className="text-[#fef5d5] font-extrabold">Innovations</span>
            </span>
            <span className="block">
              and{" "}
              <span className="text-[#fef5d5] font-extrabold">
                Opportunities
              </span>{" "}
              Meet
            </span>
            <span className="block mt-2 text-slate-200">
              African Excellence
            </span>
          </h1>
          <p
            className="
              text-[#fef5d5]/90
              font-inter
              text-base sm:text-lg md:text-xl
              font-medium
              max-w-[20rem] sm:max-w-md mx-auto
              leading-relaxed sm:leading-normal
              mb-8 sm:mb-10
            "
          >
            We help businesses across continents discover new markets, forge
            partnerships, and grow sustainably.
          </p>

          {/* Button */}
          <Button />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
