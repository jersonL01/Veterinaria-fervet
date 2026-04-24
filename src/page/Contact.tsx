
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";

import ContactMap from "../components/contact/ContactMap";
import WhatsAppButton from "../components/BtnWtsp";
function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      <ContactHero />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid">
            <ContactInfo />
           
          </div>
        </div>
      </section>

      <ContactMap />
       <WhatsAppButton
        phone="56999250899"
        message="Hola, quiero agendar una consulta para mi mascota."
      />
   
    </div>
  );
}

export default Contact;