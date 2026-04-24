import { motion } from "framer-motion";

function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-950 via-purple-900 to-fuchsia-800 pt-24 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-20 top-24 h-40 w-40 rounded-full bg-pink-400 blur-3xl" />
        <div className="absolute right-20 top-20 h-52 w-52 rounded-full bg-purple-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-16">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex rounded-full bg-pink-100/15 px-4 py-2 text-sm font-semibold text-pink-200 backdrop-blur">
              Qué ofrecemos
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
              Servicios <span className="text-pink-300">veterinarios</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-purple-100">
              Contamos con atención profesional, exámenes, procedimientos y
              acompañamiento para el cuidado integral de tu mascota.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/56999250899"
                className="rounded-full bg-pink-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:bg-pink-600"
              >
                Agendar hora
              </a>

              <a
                href="#lista-servicios"
                className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Ver servicios
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[520px] rounded-[34px] bg-white/10 p-3 backdrop-blur-md">
              <div className="relative overflow-hidden rounded-[28px] bg-[#f7efff] shadow-2xl">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-purple-200/50" />
                <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-pink-200/40" />

                <div className="relative z-10 flex h-[360px] items-end justify-center px-2 pt-4">
                  <img
                    src="/foto2.png"
                    alt="Veterinaria con mascotas"
                    className="h-[340px] w-auto object-contain object-bottom md:h-[360px]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="h-10 rounded-t-[40px] bg-[#fcf9ff]" />
    </section>
  );
}

export default ServiceHero;