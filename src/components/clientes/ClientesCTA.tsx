import { motion } from "framer-motion";

function ClientesCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="rounded-[32px] bg-gradient-to-r from-purple-900 to-fuchsia-700 px-8 py-14 text-center text-white shadow-xl"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            ¿Quieres que tu mascota también sea parte de nuestra familia?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-purple-100">
            Agenda una atención y recibe el acompañamiento que tu mascota necesita.
          </p>

          <a
            href="https://wa.me/56999250899"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-3 font-semibold text-purple-900 transition hover:scale-[1.02]"
          >
            Agendar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ClientesCTA;