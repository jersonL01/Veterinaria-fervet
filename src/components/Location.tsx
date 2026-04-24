import { motion } from "framer-motion";

function Location() {
  return (
    <section id="ubicacion" className="bg-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-purple-900 md:text-4xl">
            Cómo llegar
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Encuéntranos fácilmente y visita nuestra clínica veterinaria.
          </p>
        </motion.div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="rounded-3xl bg-white p-8 shadow-md"
          >
            <h3 className="text-2xl font-bold text-purple-900">
              Nuestra ubicación
            </h3>

            <p className="mt-4 leading-7 text-gray-700">
              Estamos ubicados en un lugar accesible para que puedas llegar de
              forma rápida y cómoda junto a tu mascota.
            </p>

            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                <span className="font-semibold text-purple-900">Dirección:</span>{" "}
                Av. Padre Hurtado 11379, Región Metropolitana
              </p>
              <p>
                <span className="font-semibold text-purple-900">Referencia:</span>{" "}
                Cerca de la estación del metro Observatorio y con acceso a locomoción.
              </p>
              <p>
                <span className="font-semibold text-purple-900">Horario:</span>{" "}
                Lunes a Sábado, 09:00 a 20:00 hrs Continuado.
              </p>
               <p>
                <span className="font-semibold text-purple-900">Horario:</span>{" "}
                Domingo y Festivos, 10:00 a 20:00 hrs Continuado.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/place/cl%C3%ADnica+veterinaria+FER-VET/@-33.5611044,-70.6735205,17z/data=!4m16!1m9!3m8!1s0x9662dbcb6acf1b05:0x6e2ba413f7afcc6a!2scl%C3%ADnica+veterinaria+FER-VET!8m2!3d-33.5611044!4d-70.6709456!9m1!1b1!16s%2Fg%2F11fy4lxc3x!3m5!1s0x9662dbcb6acf1b05:0x6e2ba413f7afcc6a!8m2!3d-33.5611044!4d-70.6709456!16s%2Fg%2F11fy4lxc3x?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white shadow-md transition hover:scale-[1.02] hover:bg-pink-600"
            >
              Ver ruta en Google Maps
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
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
              title="Mapa clínica veterinaria FER-VET"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Location;