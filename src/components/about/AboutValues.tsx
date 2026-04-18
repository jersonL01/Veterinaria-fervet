import { motion } from "framer-motion";

const values = [
  {
    title: "Compromiso",
    description:
      "Trabajamos con responsabilidad y dedicación para cuidar la salud y bienestar de cada mascota.",
  },
  {
    title: "Cercanía",
    description:
      "Entregamos una atención cálida y humana, generando confianza con cada familia.",
  },
  {
    title: "Profesionalismo",
    description:
      "Buscamos brindar una atención clara, responsable y enfocada en soluciones.",
  },
  {
    title: "Bienestar animal",
    description:
      "Nuestro enfoque está en mejorar la calidad de vida de perros y gatos en cada etapa.",
  },
];

function AboutValues() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            Nuestros valores
          </span>

          <h2 className="mt-6 text-3xl font-bold text-purple-900 md:text-4xl">
            Lo que guía nuestro trabajo cada día
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-bold text-purple-900">
                {value.title}
              </h3>
              <p className="mt-4 leading-7 text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutValues;