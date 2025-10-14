import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { EstoniaToAfrica, AfricaToEstonia } from "../data/image";
import { Button } from "./ui/Button";
import { ChevronLeft, ChevronRight, Globe, TrendingUp } from "lucide-react";

const SectorsAndProducts = () => {
  const [activeDirection, setActiveDirection] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const tradeDirections = [
    {
      title: "Global Innovations to Africa",
      subtitle:
        "World-class technology and expertise meeting African market opportunities",
      icon: <Globe className="w-6 h-6" />,
      products: [
        {
          name: "Renewable Energy Solutions",
          image: EstoniaToAfrica.DiaryProduct,
          description: "Solar, wind, and sustainable power solutions",
        },
        {
          name: "Advanced Agri-Tech",
          image: EstoniaToAfrica.TechHardWare,
          description: "Precision farming and agricultural technology",
        },
        {
          name: "Healthcare & Medical Technology",
          image: EstoniaToAfrica.ProcessedFood,
          description: "Medical devices and healthcare innovations",
        },
        {
          name: "Industrial Machinery & Automation",
          image: EstoniaToAfrica.IndustryMachine,
          description: "Manufacturing and automation systems",
        },
        {
          name: "Smart Infrastructure",
          image: EstoniaToAfrica.Funiture,
          description: "Urban development and smart city solutions",
        },
        {
          name: "Digital Solutions & FinTech",
          image: EstoniaToAfrica.DigitalSolutions,
          description: "Digital transformation and financial technology",
        },
      ],
    },
    {
      title: "African Excellence to the World",
      subtitle:
        "Premium African products and resources reaching global markets",
      icon: <TrendingUp className="w-6 h-6" />,
      products: [
        {
          name: "Organic Agricultural Products",
          description: "Premium cocoa, shea butter, and specialty spices",
          image: AfricaToEstonia.AfricanSpice,
        },
        {
          name: "Natural Beauty & Wellness",
          description:
            "Essential oils, plant extracts, and organic ingredients",
          image: AfricaToEstonia.AfricanOil,
        },
        {
          name: "Artisanal Crafts & Textiles",
          description: "Handcrafted goods and traditional fabrics",
          image: AfricaToEstonia.Textiles,
        },
        {
          name: "Sustainable Materials",
          description: "Bamboo, timber, and eco-friendly resources",
          image: AfricaToEstonia.BambooProduct,
        },
        {
          name: "Processed Foods & Ingredients",
          description: "Value-added agricultural products",
          image: AfricaToEstonia.TradePfood,
        },
        {
          name: "Mineral Resources",
          description: "Strategic minerals and raw materials",
          image: AfricaToEstonia.TradePfood,
        },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === tradeDirections[activeDirection].products.length - 1
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0
        ? tradeDirections[activeDirection].products.length - 1
        : prev - 1
    );
  };

  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-28 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Strategic Trade Sectors
          </h2>
          <p className="text-xl text-primary max-w-3xl mx-auto leading-relaxed">
            Find your pathway to growth through strategic trade sectors with
            proven potential.
          </p>
        </motion.div>

        {/* Direction Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white flex flex-col md:flex-row rounded-2xl p-2 shadow-lg border border-gray-100">
            {tradeDirections.map((direction, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveDirection(index);
                  setCurrentSlide(0);
                }}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeDirection === index
                    ? "bg-gradient-to-r from-[#876e4B] to-[#9a7f58] text-white shadow-md"
                    : "text-primary hover:text-[#876e4B] hover:bg-gray-50"
                }`}
              >
                {direction.icon}
                {direction.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Direction Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDirection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="text-center mb-8 lg:flex">
              <h3 className="text-2xl font-bold text-primary mb-3">
                {tradeDirections[activeDirection].title}
              </h3>
              <p className="text-lg text-primary max-w-2xl mx-auto">
                {tradeDirections[activeDirection].subtitle}
              </p>
            </div>

            {/* Carousel */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-[#876e4B]" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-[#876e4B]" />
              </button>

              {/* Carousel Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center min-h-[400px]"
                >
                  {/* Image Section */}
                  <div className="md:w-1/2 h-64 md:h-full">
                    <img
                      src={
                        tradeDirections[activeDirection].products[currentSlide]
                          .image
                      }
                      alt={
                        tradeDirections[activeDirection].products[currentSlide]
                          .name
                      }
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-[#876e4B] rounded-full"></div>
                      <span className="text-sm font-semibold text-[#876e4B] uppercase tracking-wide">
                        Featured Sector
                      </span>
                    </div>

                    <h4 className="text-3xl font-bold text-[#2d3748] mb-4">
                      {
                        tradeDirections[activeDirection].products[currentSlide]
                          .name
                      }
                    </h4>

                    {"description" in
                      tradeDirections[activeDirection].products[
                        currentSlide
                      ] && (
                      <p className="text-lg text-[#718096] leading-relaxed mb-6">
                        {
                          tradeDirections[activeDirection].products[
                            currentSlide
                          ].description
                        }
                      </p>
                    )}

                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">
                        {currentSlide + 1} of{" "}
                        {tradeDirections[activeDirection].products.length}
                      </span>
                      <div className="flex gap-1">
                        {tradeDirections[activeDirection].products.map(
                          (_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentSlide
                                  ? "bg-[#876e4B] w-6"
                                  : "bg-gray-300"
                              }`}
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Quick Overview Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-primary mb-8">
            All Trade Sectors
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tradeDirections[activeDirection].products.map((product, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-4 rounded-xl text-center transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-[#876e4B] text-white shadow-lg"
                    : "bg-white text-primary shadow-md hover:shadow-lg"
                }`}
              >
                <span className="text-sm font-medium leading-tight">
                  {product.name}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>
        <p className="text-[#876e4B] font-normal text-base md:text-md mb-6 max-w-2xl mx-auto leading-relaxed">
          Your trade sector not covered? Click below to start your journey, our
          team will contact you directly.
        </p>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#876e4B] to-[#9a7f58] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Explore Opportunities?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Connect with our trade experts to discover how these sectors can
              drive your growth.
            </p>

            <Button />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectorsAndProducts;
