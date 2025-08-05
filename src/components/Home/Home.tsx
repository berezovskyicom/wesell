import Header from "@/components/Header"
import CarBrands from "./Home-CarBrands"
import ContactUs from "./Home-ContactUs"
import Features from "./Home-Features"
import Footer from "./Home-Footer"
import Hero from "./Home-Hero"
import Instagram from "./Home-Instagram"
import Reviews from "./Home-Reviews"
import Services from "./Home-Services"
import Social from "./Home-Social"
import Steps from "./Home-Steps"

// TODO: Separate using folders, rename component to "Content"
const Home = () => (
  <>
    <Header />
    <Hero />
    <Features />
    <Services />
    <CarBrands />
    <Steps />
    <Reviews />
    <Instagram />
    <Social />
    <ContactUs />
    <Footer />
  </>
)

export default Home
