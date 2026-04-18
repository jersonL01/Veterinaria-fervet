import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Elige una mascota",
    description:
      "Revisa las opciones disponibles y conoce cuál se adapta mejor a tu hogar y estilo de vida.",
  },
  {
    number: "02",
    title: "Contáctanos",
    description:
      "Escríbenos para recibir orientación, resolver dudas y conocer los requisitos de adopción.",
  },
  {
    number: "03",
    title: "Completa el proceso",
    description:
      "Evaluamos la postulación y te acompañamos en el paso final para una adopción segura.",
  },
];

function AdoptionProcess() {
  return (
    <section id="proceso" className="bg-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            Proceso de adopción
          </span>
          <h2 className="mt-6 text-3xl font-bold text-purple-900 md:text-4xl">
            Cómo adoptar de manera responsable
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="rounded-3xl bg-white p-8 shadow-sm"
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

export default AdoptionProcess;