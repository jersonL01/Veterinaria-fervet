import { motion } from "framer-motion";

function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-fuchsia-800 text-white">
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-pink-200 backdrop-blur">
            Sobre nosotros
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Cuidamos a tus mascotas con atención cercana y profesional
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            En Fervet creemos que cada mascota merece una atención responsable,
            cálida y enfocada en su bienestar. Nuestro objetivo es acompañar a
            cada familia con confianza, orientación y cuidado de calidad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutHero;