import { motion } from "framer-motion";

const highlights = [
  {
    icon: "🐾",
    title: "Atención con cariño",
    description:
      "Cada mascota recibe una atención cercana, respetuosa y enfocada en su bienestar.",
  },
  {
    icon: "🩺",
    title: "Cuidado profesional",
    description:
      "Trabajamos con compromiso y dedicación para entregar una atención veterinaria de calidad.",
  },
  {
    icon: "💜",
    title: "Confianza de las familias",
    description:
      "Nos alegra ser parte del cuidado de tantas mascotas y sus familias.",
  },
];

function ClientesHighlights() {
  return (
    <section className="bg-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[28px] bg-white p-8 shadow-sm"
            >
              <div className="text-4xl">{item.icon}</div>

              <h3 className="mt-4 text-2xl font-bold text-purple-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientesHighlights;