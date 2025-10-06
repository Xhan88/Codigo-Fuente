import AboutSection from "./components/AboutSecction"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import OtherServices from "./components/OtherServices"
import BusinessSection from "./components/OurMision"
import PricingPackages from "./components/PricingPackages"
import Projects from "./components/Projects"
import Service from "./components/Service"


const App = () => {
  return (
    <>
       <Header />
       <Service />
       <BusinessSection />
       <AboutSection />
       <OtherServices />
       <Projects />
       <PricingPackages />
       <ContactSection />
       <HeroSection />
       <Footer />
    </>
  )
}

export default App
