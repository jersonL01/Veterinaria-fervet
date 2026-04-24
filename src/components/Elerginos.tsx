import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

function Elerginos() {
  const items = [
    {
      title: "Atención cercana",
      description:
        "Nos preocupamos por entregar un trato amable y humano a cada mascota y su familia.",
    },
    {
      title: "Profesionales comprometidos",
      description:
        "Atención de calidad y empática hacia nuestros pacientes.",
    },
    {
      title: "Prevención y seguimiento",
      description:
        "Acompañamos la salud de tu mascota con controles y recomendaciones oportunas.",
    },
    {
      title: "Ubicación accesible",
      description:
        "Estamos a pasos del metro Observatorio Linea 2.",
    },
  ];

  return (
    <section className="bg-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
              ¿Por qué elegirnos?
            </span>

            <h2 className="mt-6 text-3xl font-bold text-purple-900 md:text-4xl">
              Cuidamos a tu mascota con dedicación, cariño y profesionalismo
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700">
              En Fervet buscamos entregar tranquilidad a cada familia, ofreciendo
              atención responsable, cercana y enfocada en el bienestar de sus
              mascotas.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {items.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-purple-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-7">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Elerginos;