import ClientesHero from "../components/clientes/ClientesHero";
import ClientesGallery from "../components/clientes/ClientesGallery";
import ClientesHighlights from "../components/clientes/ClientesHighlights";
import ClientesCTA from "../components/clientes/ClientesCTA";
import WhatsAppButton from "../components/BtnWtsp";

function Clientes() {
  return (
    <main className="bg-[#fcf9ff]">
      <ClientesHero />
      <ClientesGallery />
      <ClientesHighlights />
      <ClientesCTA />

      <WhatsAppButton
        phone="56999250899"
        message="Hola, quiero agendar una consulta para mi mascota."
      />
    </main>
  );
}

export default Clientes;