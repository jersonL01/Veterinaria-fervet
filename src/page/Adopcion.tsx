import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdoptionHero from "../components/adopcion/AdoptionHero";
import AdoptionHighlights from "../components/adopcion/AdoptionHighlights";
import AdoptionPets from "../components/adopcion/AdoptionPets";
import AdoptionProcess from "../components/adopcion/AdoptionProcess";
import AdoptionCommitment from "../components/adopcion/AdoptionCommitment";
import WhatsAppButton from "../components/BtnWtsp";

function Adopcion() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <AdoptionHero />
      <AdoptionHighlights />
      <AdoptionPets />
      <AdoptionProcess />
      <AdoptionCommitment />
       <WhatsAppButton
        phone="56999250899"
        message="Hola, quiero agendar una consulta para mi mascota."
      />
      <Footer />
    </div>
  );
}

export default Adopcion;