import { motion } from "framer-motion";

const benefits = [
  "Atención cercana y profesional",
  "Seguimiento responsable de cada paciente",
  "Orientación clara para cada familia",
  "Enfoque preventivo y de bienestar",
];

function ServiceBenefits() {
  return (
    <section className="bg-purple-50 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            Por qué elegir Fervet
          </span>

          <h2 className="mt-6 text-3xl font-bold text-purple-900 md:text-4xl">
            Atención confiable, cercana y enfocada en la salud de tu mascota
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Nuestro enfoque combina atención profesional, orientación clara y
            acompañamiento responsable para que cada familia se sienta segura
            durante todo el proceso de atención.
          </p>

          <div className="mt-8 grid gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm"
              >
                <span className="text-lg text-pink-500">✓</span>
                <p className="font-medium text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="rounded-3xl bg-white p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-purple-900">
            Comprometidos con una atención de calidad
          </h3>

          <p className="mt-4 leading-7 text-gray-600">
            En Fervet entendemos que cada mascota es parte de una familia.
            Por eso entregamos una atención cálida, profesional y orientada a
            resolver dudas, prevenir enfermedades y acompañar cada etapa de su
            vida.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-purple-50 p-5">
              <p className="text-sm font-semibold text-pink-600">
                Atención personalizada
              </p>
              <p className="mt-2 text-gray-600">
                Cada paciente recibe una evaluación enfocada en sus
                necesidades.
              </p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-5">
              <p className="text-sm font-semibold text-pink-600">
                Prevención y seguimiento
              </p>
              <p className="mt-2 text-gray-600">
                Promovemos controles y cuidados continuos para su bienestar.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceBenefits;