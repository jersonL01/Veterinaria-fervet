import { motion } from "framer-motion";

function ContactMap() {
  return (
    <section className="bg-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            Ubicación
          </span>

          <h2 className="mt-6 text-3xl font-bold text-purple-900 md:text-4xl">
            Visítanos
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Encuentra nuestra clínica y conoce cómo llegar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden rounded-3xl shadow-md"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.702529095142!2d-70.67352052358083!3d-33.56110437334593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662dbcb6acf1b05%3A0x6e2ba413f7afcc6a!2scl%C3%ADnica%20veterinaria%20FER-VET!5e0!3m2!1ses!2scl!4v1776452380580!5m2!1ses!2scl"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Mapa Fervet"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactMap;