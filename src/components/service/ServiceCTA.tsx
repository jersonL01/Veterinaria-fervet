import { motion } from "framer-motion";

function ServiceCTAs() {
  return (
    <section
      id="contacto-servicios"
      className="bg-gradient-to-r from-purple-950 to-fuchsia-800 py-20 text-white"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Agenda una atención para tu mascota
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            Estamos disponibles para orientarte y ayudarte a encontrar la mejor
            atención según lo que tu mascota necesite.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/56999250899"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-pink-600"
            >
              Escribir por WhatsApp
            </a>

           
           <a
            href="https://maps.app.goo.gl/bu5HZwtMmcFEH2uTA"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
          >
            Ver ubicación
          </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceCTAs;