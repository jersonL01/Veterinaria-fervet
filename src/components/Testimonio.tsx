import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

function Testimonio() {
  const testimonials = [
    {
      name: "María González",
      pet: "Luna",
      text: "La atención fue excelente. Me explicaron todo con mucha claridad y trataron a mi gatita con mucho cariño.",
    },
    {
      name: "Carlos Rojas",
      pet: "Rocky",
      text: "Muy buena experiencia. Se nota la dedicación y preocupación real por las mascotas.",
    },
    {
      name: "Fernanda Silva",
      pet: "Milo",
      text: "Desde el primer momento nos dieron confianza. El lugar es acogedor y la atención fue muy profesional.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            Testimonios
          </span>

          <h2 className="mt-6 text-3xl font-bold text-purple-900 md:text-4xl">
            Lo que dicen nuestros clientes
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            La confianza de cada familia es parte fundamental de nuestro trabajo.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="rounded-3xl border border-purple-100 bg-purple-50 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl text-pink-500">“</div>
              <p className="mt-4 leading-7 text-gray-700">{testimonial.text}</p>

              <div className="mt-6">
                <h3 className="font-bold text-purple-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">Mascota: {testimonial.pet}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonio;