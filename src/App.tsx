import AboutSection from "./components/AboutSecction"
import Header from "./components/Header"
import OtherServices from "./components/OtherServices"
import BusinessSection from "./components/OurMision"
import Service from "./components/Service"


const App = () => {
  return (
    <>
       {/* <NavBar/> */}
       <Header />
       <Service />
       <BusinessSection />
       <AboutSection />
       <OtherServices />
    </>
  )
}

export default App
