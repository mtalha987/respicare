import Diagnostics from "./Components/Diagnostics";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import WhyRespicare from "./Components/WhyRespicare";

export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Diagnostics/>
    <WhyRespicare/>
    <Footer/>
    </>
  );
}
