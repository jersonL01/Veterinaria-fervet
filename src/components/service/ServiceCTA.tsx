import { motion } from "framer-motion";

function ServiceCTA() {
  return (
    <section className="pb-20 pt-8">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-[32px] border border-purple-100 bg-[#f5edf9] px-8 py-10 shadow-sm"
        >
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-200 text-3xl">
                📅
              </div>

              <div>
                <h3 className="text-3xl font-bold text-purple-900">
                  ¿Necesitas agendar una consulta?
                </h3>
                <p className="mt-2 text-lg text-gray-600">
                  Estamos aquí para ayudarte. Agenda fácil por WhatsApp.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/56999250899"
              className="rounded-full bg-pink-500 px-8 py-4 text-lg font-semibold text-white transition hover:scale-[1.02] hover:bg-pink-600"
            >
              Agendar por WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceCTA;