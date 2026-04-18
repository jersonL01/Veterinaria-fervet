import { motion } from "framer-motion";

function AdoptionHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-fuchsia-800 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-pink-200 backdrop-blur">
            Adopción responsable
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Dales una nueva oportunidad de encontrar un hogar
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            En Fervet apoyamos la adopción responsable de perros y gatos,
            conectando a cada mascota con familias comprometidas con su
            bienestar, cuidado y compañía.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#mascotas"
              className="rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-pink-600"
            >
              Ver mascotas
            </a>

            <a
              href="#proceso"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              Cómo adoptar
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="overflow-hidden rounded-[2rem] bg-white/10 p-3 shadow-2xl backdrop-blur">
            <img
              src="/logo-fervet.png"
              alt="Fervet adopción"
              className="w-full max-w-md rounded-[1.5rem] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AdoptionHero;