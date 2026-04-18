import { motion } from "framer-motion";

function AboutStory() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/logo-fervet.png"
            alt="Fervet"
            className="mx-auto w-full max-w-md drop-shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            Quiénes somos
          </span>

          <h2 className="mt-6 text-3xl font-bold text-purple-900 md:text-4xl">
            Una clínica veterinaria enfocada en la confianza y el bienestar
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Somos una clínica veterinaria comprometida con la salud y cuidado
            de las mascotas, entregando una atención profesional y cercana para
            acompañar a cada paciente en sus controles, tratamientos y cuidados
            preventivos.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-700">
            Queremos que cada familia se sienta tranquila y bien acompañada,
            entregando orientación clara y una atención responsable en cada
            visita.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutStory;