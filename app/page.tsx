import About from "./components/About";
import AboutBCI from "./components/AboutBCI";
import Header from "./components/Header";
import HeaderSecondary from "./components/HeaderSecondary";
import Hero from "./components/Hero";
import OurMobile from "./components/OurMobile";

export default function Home() {
  return (
    <div>
      <Header />
      <HeaderSecondary />
      <Hero />
      <About />
      <AboutBCI />
      <OurMobile />
    </div>
  );
}
