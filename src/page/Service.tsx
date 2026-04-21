
import ServiceHero from "../components/service/ServiceHero";
import ServiceList from "../components/service/ServiceList";
import ServiceBenefits from "../components/service/ServiceBenefits";
import ServiceProcess from "../components/service/ServiceProcess";
import ServiceCTA from "../components/service/ServiceCTA";
import WhatsAppButton from "../components/BtnWtsp";

function Service() {
  return (
    <div className="min-h-screen bg-white text-gray-800"> 
      <ServiceHero />
      <ServiceList />
      <ServiceBenefits />
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