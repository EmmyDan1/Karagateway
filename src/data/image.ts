import HeroImage from "../assets/images/hero.jpg";
import Logistics from "../assets/Services/logistics.jpg";
import Envelope from "../assets/Services/envelopes.jpg";
import PeopleTalking from "../assets/Services/peopetalking.jpg";
import Export from "../assets/Services/packing.jpg";
import FounderImg from "../assets/images/founderImg.png";
import VisionImg from "../assets/images/phto1.jpg";
import matchmaking from "../assets/images/phto2.jpg";
import logistics from "../assets/images/phto3.jpg";
import advisory from "../assets/images/phto4.jpg";
import CGlogo from "../assets/images/KaraLogo.png";
import KaraLogo from "../assets/images/KaraLogo.png";
import KaraLogo2 from "../assets/images/KaraLogo2.png";
import step5 from "../assets/images/step5.jpg";
import step2 from "../assets/images/step2.jpg";
import step3 from "../assets/images/step3.jpg";
import step4 from "../assets/images/step4.jpg";
import TechHardWare from "../assets/images/AgricTech.webp";
import IndustryMachine from "../assets/images/IndustryMachine.webp";
import Medic from "../assets/images/Medics.webp";
import DiaryProduct from "../assets/images/DiaryProducts.webp";
import AfricanSpice from "../assets/images/AfricanSpices2.webp";
import TradePfood from '../assets/images/Minerals.webp'
import BambooProduct from "../assets/images/Bamboo.webp";
import AfricanOil from "../assets/images/AfricanOil2.webp";
import LandingImg from '../assets/images/landingimg.png'
import SmartInfra from "../assets/images/SmartInfra.jpg" 
import Textiles from '../assets/images/Textiles.webp'
import KaraLogo3 from '../assets/images/KaraLogo3.png'
import DigitalSolutions from '../assets/images/DigitalSolutions.jpg'
import ProcessedFood from '../assets/images/Processedfood.webp'

 type imageProp = {
    img: string
}

export const landingImg: imageProp = { img: LandingImg };
export const EstoniaToAfrica = {
  TechHardWare,
  IndustryMachine,
  Medic,
  DiaryProduct,
  SmartInfra,
  DigitalSolutions
};



export const AfricaToEstonia = {
  AfricanSpice,
  AfricanOil,
  Textiles,
  BambooProduct,
  TradePfood,
  ProcessedFood
  
};

export const heroImage = HeroImage;

export const howItWorksImages = {
  step5,
  step2,
  step3,
  step4,
};

export const serviceImages = {
  Logistics,
  Envelope,
  PeopleTalking,
  Export
};
export { FounderImg, VisionImg, CGlogo, KaraLogo, KaraLogo2, KaraLogo3 };
export const modelImages = {
  matchmaking,
  logistics,
  advisory,
};
