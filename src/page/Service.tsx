import { useState } from "react";
import ServiceHero from "../components/service/ServiceHero";
import ServiceCategories from "../components/service/ServiceCategories";
import ServiceList from "../components/service/ServiceList";
import ServiceProcess from "../components/service/ServiceProcess";
import ServiceCTA from "../components/service/ServiceCTA";
import WhatsAppButton from "../components/BtnWtsp";

function Service() {
  const [activeCategory, setActiveCategory] = useState<string>("Consultas");

  return (
    <div className="min-h-screen bg-[#fcf9ff] text-gray-800">
      <ServiceHero />

      <ServiceCategories
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <ServiceList activeCategory={activeCategory} />

      <ServiceProcess />
      <ServiceCTA />

      <WhatsAppButton
        phone="56999250899"
        message="Hola, quiero agendar una consulta para mi mascota."
      />
    </div>
  );
}

export default Service;