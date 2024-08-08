import Diagnostics from "./Components/Diagnostics";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import OurProduct from "./Components/OurProduct";
import Ventilation from "./Components/Ventilation";
import WhyRespicare from "./Components/WhyRespicare";

export default function Home() {
  return (
    <>
    <Hero/>
    <Diagnostics/>
    <Ventilation/>
    <OurProduct/>
    <WhyRespicare/>
    </>
  );
}
