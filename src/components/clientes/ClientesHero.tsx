import { motion } from "framer-motion";

function ClientesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-950 via-purple-900 to-fuchsia-800 py-24 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-12 top-16 h-40 w-40 rounded-full bg-pink-400 blur-3xl" />
        <div className="absolute right-10 top-10 h-52 w-52 rounded-full bg-purple-400 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-pink-200"
        >
          Nuestros pacientes
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-6 max-w-4xl text-4xl font-bold md:text-5xl"
        >
          Mascotas que han confiado en nosotros
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-6 max-w-3xl text-lg text-purple-100"
        >
          Cada paciente es parte importante de nuestra historia. Aquí puedes ver
          algunas de las mascotas que hemos atendido con dedicación, cuidado y cariño.
        </motion.p>
      </div>
    </section>
  );
}

export default ClientesHero;