import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/about/AboutHero";
import AboutStory from "../components/about/AboutStory";
import AboutMission from "../components/about/AboutMission";
import AboutValues from "../components/about/AboutValues";
import AboutCTA from "../components/about/AboutCTA";
import WhatsAppButton from "../components/BtnWtsp"

function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutValues />
      <AboutCTA />
      <WhatsAppButton
        phone="56999250899"
        message="Hola, quiero agendar una consulta para mi mascota."
      />
      <Footer />
    </div>
  );
}

export default About;