import {
  FaIndustry,
  FaShoppingCart,
  FaTruck,
  FaChartLine,
} from "react-icons/fa";

export const partnerTypes = [
  {
    type: "Producers & Suppliers",
    description:
      "Showcase your products for export and gain access to new international markets",
    icon: <FaIndustry className="text-2xl text-[#4e3629]" />,
  },
  {
    type: "Buyers & Distributors",
    description:
      "Source high-quality African products or global goods efficiently",
    icon: <FaShoppingCart className="text-2xl text-[#4e3629]" />,
  },
  {
    type: "Logistics & Service Providers",
    description:
      "Collaborate on cross-border solutions for shipping, customs, and supply chain",
    icon: <FaTruck className="text-2xl text-[#4e3629]" />,
  },
  {
    type: "Investors & Strategic Partners",
    description:
      "Support trade growth, scale operations, and participate in market expansion",
    icon: <FaChartLine className="text-2xl text-[#4e3629]" />,
  },
];
