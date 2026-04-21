import { motion } from "framer-motion";

function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
      className="rounded-3xl bg-purple-50 p-8 shadow-sm"
    >
      <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
        Información de contacto
      </span>

      <h2 className="mt-6 text-3xl font-bold text-purple-900">
        Conversemos
      </h2>

      <p className="mt-4 text-lg leading-8 text-gray-700">
        Puedes comunicarte con nosotros por distintos medios. Te responderemos
        con la mayor rapidez posible.
      </p>

      <div className="mt-8 space-y-5">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-pink-600">Teléfono</p>
          <p className="mt-1 text-lg text-gray-700">+56 2 25595625</p>
          
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-pink-600">Dirección</p>
          <p className="mt-1 text-lg text-gray-700">
           Avenida Padre Hurtado 11379, El Bosque, Santiago, Chile
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-pink-600">Horario</p>
          <p className="mt-1 text-lg text-gray-700">
            Lunes a Sábado, 09:00 a 20:00 hrs
           
          </p>
           <p className="mt-1 text-lg text-gray-700">
             Domingos y Festivos, 10:00 a 20:00hrs.
           </p>
        </div>
      </div>

      <a
        href="https://wa.me/56912345678"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-pink-600"
      >
        Escribir por WhatsApp
      </a>
    </motion.div>
  );
}

export default ContactInfo;