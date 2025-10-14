import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  {
    label: "Continents Connected",
    value: 2,
    duration: 4,
    delay: 0.3,
  },
  {
    label: "Products Sourced",
    value: 2,
    duration: 2,
    delay: 0.6,
  },
  {
    label: "Trusted by 2 SMEs, governments & trade groups",
    value: 2,
    duration: 4,
    delay: 0.9,
  },
];

const IntroStatsSection = () => {
  return (
    <section
      className="relative bg-lightbrown px-6 md:px-24 md:py-14 text-center overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 99%, 0 100%)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-[22px] mt-12 md:text-3xl md:mt-0 font-medium leading-relaxed max-w-4xl mx-auto text-[#4e3629] mb-12 md:mb-16"
      >
        <span className="relative inline-block">
          Connecting Africa's potential with the world's opportunities for
          mutual growth and transformative partnerships.
          <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#d4a373] opacity-60 rounded" />
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-8 lg:gap-12 mt-10 max-w-5xl mx-auto"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: stat.delay,
              duration: 0.7,
              type: "spring",
              stiffness: 50,
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl md:text-6xl font-bold text-[#4e3629] drop-shadow">
              <CountUp
                end={stat.value}
                duration={stat.duration}
                delay={stat.delay}
                enableScrollSpy
                scrollSpyOnce
              />
              +
            </h3>
            <p className="mt-3 uppercase tracking-widest text-sm text-[#8a6b56] font-medium px-2">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        viewport={{ once: true }}
        className="flex flex-col items-center sm:flex-row justify-center gap-4 sm:gap-6 mt-16 px-4"
      >
        <Link to="/partner-with-us" className="w-full sm:w-auto max-w-xs">
          <button className="w-full bg-[#8a6b56] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#a1785c] transition duration-300 shadow-md">
            Partner With Us
          </button>
        </Link>
        <Link
          to="/start-trade-journey"
          className="w-full sm:w-auto max-w-xs"
        >
          <button className="w-full border border-[#8a6b56] text-[#8a6b56] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#f6eee7] transition duration-300">
            Start your trade Journey
          </button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-20 max-w-3xl mx-auto text-[#4e3629] text-base md:text-lg leading-relaxed px-4"
      >
        {/* <h3 className="text-xl font-semibold mb-4">About Karagateway Connect</h3>
        <p className="text-[#5e4336] opacity-90">
          Karagateway Connect is a modern pan-African trade platform facilitating
          economic bridges between European markets and African producers.
          Through strategic matchmaking, curated events, and partnership
          support, we channel sustainable capital and global opportunity into
          key African markets.
        </p> */}
      </motion.div>
    </section>
  );
};

export default IntroStatsSection;
