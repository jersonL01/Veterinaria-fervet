import { motion } from "framer-motion";

function AboutCTA() {
  return (
    <section className="bg-gradient-to-r from-purple-950 to-fuchsia-800 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Estamos aquí para cuidar a quienes más quieres
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            En Fervet queremos acompañarte en cada etapa de la vida de tu mascota
            con atención confiable, cercana y profesional.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/servicios"
              className="rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-pink-600"
            >
              Ver servicios
            </a>

            <a
              href="/#contacto"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              Contáctanos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutCTA;