import { motion } from "framer-motion";

function ServiceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-fuchsia-800 text-white">
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="max-w-3xl"
        >
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-pink-200 backdrop-blur">
            Servicios Veterinarios
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Cuidado veterinario profesional para cada etapa de tu mascota
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            En Fervet entregamos atención cercana, responsable y enfocada en
            el bienestar de perros y gatos, con servicios pensados para su
            salud, prevención y cuidado diario.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#lista-servicios"
              className="rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-pink-600"
            >
              Ver servicios
            </a>

            <a
              href="#contacto-servicios"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              Solicitar información
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceHero;