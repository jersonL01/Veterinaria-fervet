import { motion } from "framer-motion";

type Pet = {
  id: number;
  name: string;
  age: string;
  type: string;
  description: string;
  image: string;
};

const pets: Pet[] = [
  {
    id: 1,
    name: "Luna",
    age: "2 años",
    type: "Gatita",
    description:
      "Cariñosa, tranquila y perfecta para una familia que busque una compañera dulce.",
    image: "/perro-1.webp",
  },
  {
    id: 2,
    name: "Max",
    age: "1 año",
    type: "Perrito",
    description:
      "Juguetón, sociable y con mucha energía para acompañarte cada día.",
    image: "/perro-1.webp",
  },
  {
    id: 3,
    name: "Milo",
    age: "3 años",
    type: "Gatito",
    description:
      "Muy regalón, limpio y acostumbrado a espacios interiores.",
    image: "/perro-1.webp",
  },
  {
    id: 4,
    name: "Canela",
    age: "8 meses",
    type: "Perrita",
    description:
      "Tierna, curiosa y en búsqueda de un hogar lleno de amor.",
    image: "/perro-1.webp",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function AdoptionPets() {
  return (
    <section id="mascotas" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            Mascotas en adopción
          </span>
          <h2 className="mt-6 text-3xl font-bold text-purple-900 md:text-4xl">
            Conoce a quienes buscan una familia
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Estas mascotas están esperando una oportunidad para comenzar una
            nueva etapa en un hogar lleno de cariño.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {pets.map((pet) => (
            <motion.article
              key={pet.id}
              variants={itemVariants}
              className="group overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-bold text-purple-900">
                    {pet.name}
                  </h3>
                  <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700">
                    {pet.type}
                  </span>
                </div>

                <p className="mt-3 text-sm font-medium text-gray-500">
                  Edad: {pet.age}
                </p>

                <p className="mt-4 leading-7 text-gray-600">
                  {pet.description}
                </p>

                <a
                  href="/contacto"
                  className="mt-6 inline-block rounded-xl bg-purple-900 px-5 py-3 font-semibold text-white transition hover:bg-purple-800"
                >
                  Quiero adoptarlo
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AdoptionPets;