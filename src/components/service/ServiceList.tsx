import { motion } from "framer-motion";

const services = [
  {
    title: "Consulta General",
    description:
      "Evaluación médica integral para diagnosticar, prevenir y tratar problemas de salud en tu mascota.",
    icon: "🩺",
  },
  {
    title: "Vacunación",
    description:
      "Planes de vacunación para perros y gatos, enfocados en la prevención y protección de enfermedades.",
    icon: "💉",
  },
  {
    title: "Desparasitación",
    description:
      "Control interno y externo para proteger a tu mascota durante todas las etapas de su vida.",
    icon: "🐾",
  },
  {
    title: "Urgencias",
    description:
      "Atención prioritaria para situaciones que requieren rapidez, cuidado y evaluación inmediata.",
    icon: "🚨",
  },
  {
    title: "Controles Preventivos",
    description:
      "Seguimiento periódico del estado de salud, peso, alimentación y bienestar general de tu mascota.",
    icon: "📋",
  },
  {
    title: "Orientación y Cuidados",
    description:
      "Acompañamiento para resolver dudas sobre alimentación, hábitos, prevención y cuidados diarios.",
    icon: "❤️",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

function ServiceList() {
  return (
    <section id="lista-servicios" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            Qué ofrecemos
          </span>

          <h2 className="mt-6 text-3xl font-bold text-purple-900 md:text-4xl">
            Servicios pensados para el bienestar de tu mascota
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Trabajamos con atención dedicada y un enfoque preventivo para
            ayudar a mantener la salud y calidad de vida de cada paciente.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              className="group rounded-3xl border border-purple-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-3xl transition duration-300 group-hover:bg-pink-100">
                {service.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-purple-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceList;