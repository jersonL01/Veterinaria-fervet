import { motion } from "framer-motion";

function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-purple-950 via-purple-900 to-fuchsia-800 py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-pink-200 backdrop-blur">
            Contacto
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Estamos aquí para ayudarte y cuidar a tu mascota
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Escríbenos para agendar una consulta, resolver dudas o recibir más
            información sobre nuestros servicios veterinarios.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactHero;