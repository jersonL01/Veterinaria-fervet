import { motion } from "framer-motion";

function AboutMission() {
  return (
    <section className="bg-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            Nuestra misión
          </span>

          <h2 className="mt-6 text-3xl font-bold text-purple-900 md:text-4xl">
            Brindar atención veterinaria de calidad con cercanía y compromiso
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-700">
            Nuestra misión es cuidar la salud y bienestar de cada mascota mediante
            una atención responsable, humana y profesional, fortaleciendo la
            confianza con cada familia y promoviendo el cuidado preventivo como
            parte fundamental de una vida sana.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMission;