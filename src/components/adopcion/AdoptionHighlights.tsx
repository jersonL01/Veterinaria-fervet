import { motion } from "framer-motion";

function AdoptionHighlights() {
  return (
    <section className="bg-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 md:grid-cols-3"
        >
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-purple-900">
              Adopción responsable
            </h3>
            <p className="mt-3 leading-7 text-gray-600">
              Buscamos hogares comprometidos con el cuidado, tiempo y bienestar
              de cada mascota.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-purple-900">
              Evaluación y orientación
            </h3>
            <p className="mt-3 leading-7 text-gray-600">
              Te acompañamos durante el proceso para ayudarte a tomar una
              decisión adecuada.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-purple-900">
              Amor y segunda oportunidad
            </h3>
            <p className="mt-3 leading-7 text-gray-600">
              Cada adopción es una nueva historia para una mascota que merece
              un hogar seguro.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AdoptionHighlights;