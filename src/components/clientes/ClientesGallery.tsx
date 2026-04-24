import { motion } from "framer-motion";

type PetClient = {
  image: string;
  alt: string;
};

const petClients: PetClient[] = [
  { image: "/clientes/img1.jpeg", alt: "Mascota atendida 1" },
  { image: "/clientes/img2.jpeg", alt: "Mascota atendida 2" },
  { image: "/clientes/img3.jpeg", alt: "Mascota atendida 3" },
  { image: "/clientes/img4.jpeg", alt: "Mascota atendida 4" },
  { image: "/clientes/img5.jpeg", alt: "Mascota atendida 5" },
  { image: "/clientes/img6.jpeg", alt: "Mascota atendida 6" },
  { image: "/clientes/img7.jpeg", alt: "Mascota atendida 7" },
 // { image: "/clientes/cliente-8.jpg", alt: "Mascota atendida 8" },
];

function ClientesGallery() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            Galería de pacientes
          </span>

          <h2 className="mt-6 text-3xl font-bold text-purple-900 md:text-4xl">
            Algunos de nuestros clientes más especiales
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Una muestra de mascotas que han sido atendidas en nuestra clínica.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {petClients.map((pet, index) => (
            <motion.article
              key={pet.image}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="group overflow-hidden rounded-[28px] border border-purple-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={pet.image}
                  alt={pet.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/10 to-transparent" />

                <div className="absolute bottom-4 right-4 rounded-full bg-white/80 p-3 backdrop-blur-sm">
                  <span className="text-xl">🐾</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientesGallery;