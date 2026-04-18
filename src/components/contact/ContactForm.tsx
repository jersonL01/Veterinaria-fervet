import { motion } from "framer-motion";

function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65 }}
      className="rounded-3xl border border-purple-100 bg-white p-8 shadow-sm"
    >
      <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
        Formulario de contacto
      </span>

      <h2 className="mt-6 text-3xl font-bold text-purple-900">
        Envíanos un mensaje
      </h2>

      <p className="mt-4 text-lg leading-8 text-gray-700">
        Completa el formulario y nos pondremos en contacto contigo.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label htmlFor="nombre" className="mb-2 block font-medium text-gray-700">
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            className="w-full rounded-2xl border border-purple-100 px-4 py-3 outline-none transition focus:border-pink-400"
          />
        </div>

        <div>
          <label htmlFor="correo" className="mb-2 block font-medium text-gray-700">
            Correo electrónico
          </label>
          <input
            id="correo"
            type="email"
            placeholder="tucorreo@ejemplo.com"
            className="w-full rounded-2xl border border-purple-100 px-4 py-3 outline-none transition focus:border-pink-400"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="mb-2 block font-medium text-gray-700">
            Teléfono
          </label>
          <input
            id="telefono"
            type="text"
            placeholder="+56 9 XXXX XXXX"
            className="w-full rounded-2xl border border-purple-100 px-4 py-3 outline-none transition focus:border-pink-400"
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="mb-2 block font-medium text-gray-700">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            rows={5}
            placeholder="Escribe tu mensaje aquí"
            className="w-full rounded-2xl border border-purple-100 px-4 py-3 outline-none transition focus:border-pink-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="rounded-xl bg-purple-900 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-purple-800"
        >
          Enviar mensaje
        </button>
      </form>
    </motion.div>
  );
}

export default ContactForm;