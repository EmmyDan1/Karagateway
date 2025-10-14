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
import TechHardWare from "../assets/images/AgricTech.jpg";
import IndustryMachine from "../assets/images/IndustryMachine.png";
import ProcessedFood from "../assets/images/Medics.png";
import DiaryProduct from "../assets/images/DiaryProducts.png";
import AfricanSpice from "../assets/images/AfricanSpices2.webp";
import TradePfood from '../assets/images/Minerals.png'
import BambooProduct from "../assets/images/Bamboo.png";
import AfricanOil from "../assets/images/AfricanOil2.png";
import LandingImg from '../assets/images/landingimg.png'
import Funiture from "../assets/images/SmartInfra.jpg" 
import Textiles from '../assets/images/Textiles.png'
import KaraLogo3 from '../assets/images/KaraLogo3.png'
import DigitalSolutions from '../assets/images/DigitalSolutions.jpg'

 type imageProp = {
    img: string
}

export const landingImg: imageProp = { img: LandingImg };
export const EstoniaToAfrica = {
  TechHardWare,
  IndustryMachine,
  ProcessedFood,
  DiaryProduct,
  Funiture,
  DigitalSolutions
};



export const AfricaToEstonia = {
  AfricanSpice,
  AfricanOil,
  Textiles,
  BambooProduct,
  TradePfood,
  
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
