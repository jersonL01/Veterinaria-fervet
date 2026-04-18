import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Agenda tu visita",
    description:
      "Contáctanos por WhatsApp, teléfono o redes sociales para coordinar la atención.",
  },
  {
    number: "02",
    title: "Evaluación médica",
    description:
      "Realizamos una revisión completa para conocer el estado de salud de tu mascota.",
  },
  {
    number: "03",
    title: "Tratamiento y seguimiento",
    description:
      "Te orientamos con indicaciones claras y acompañamos el proceso de recuperación o control.",
  },
];

function ServiceProcess() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            Cómo trabajamos
          </span>

          <h2 className="mt-6 text-3xl font-bold text-purple-900 md:text-4xl">
            Un proceso simple y claro para ti y tu mascota
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm"
            >
              <span className="text-sm font-bold tracking-[0.2em] text-pink-500">
                {step.number}
              </span>
              <h3 className="mt-4 text-2xl font-bold text-purple-900">
                {step.title}
              </h3>
              <p className="mt-4 leading-7 text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceProcess;