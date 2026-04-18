import { motion } from "framer-motion";

function AdoptionCommitment() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            Compromiso
          </span>
          <h2 className="mt-6 text-3xl font-bold text-purple-900 md:text-4xl">
            Adoptar también es asumir una responsabilidad
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Antes de adoptar, es importante considerar el tiempo, espacio,
            cuidados veterinarios y dedicación que necesitará tu futura
            mascota. Una adopción responsable cambia dos vidas: la suya y la
            tuya.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-purple-950 to-fuchsia-800 p-8 text-white shadow-xl"
        >
          <h3 className="text-2xl font-bold">¿Listo para adoptar?</h3>
          <p className="mt-4 leading-7 text-white/80">
            Contáctanos para conocer a las mascotas disponibles y comenzar el
            proceso de adopción con apoyo y orientación.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white transition hover:bg-pink-600"
            >
              Hablar por WhatsApp
            </a>

            <a
              href="/contacto"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              Ir a contacto
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AdoptionCommitment;