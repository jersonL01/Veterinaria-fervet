

import WhatsAppButton from "../components/BtnWtsp";
import Carrusel from "../components/Carrusel";
import Location from "../components/Location";
import Elerginos from "../components/Elerginos";
import Testimonio from "../components/Testimonio";

export function Home() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 flex flex-col">

      <main className="flex-1">
       <section className="relative overflow-hidden bg-gradient-to-br from-pink-100 via-purple-100 to-white">
        <Carrusel />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-pink-200 px-4 py-2 text-sm font-semibold text-pink-700">
                Clínica Veterinaria Fervet
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight text-purple-900 md:text-6xl">
                Cuidamos a tus mascotas con amor y calidad
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white">
                En Fervet nos preocupamos por la salud y bienestar de tus mascotas,
                entregando atención veterinaria cercana, confiable y de calidad.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/service"
                  className="rounded-xl bg-pink-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-pink-600"
                >
                  Ver servicios
                </a>

                <a
                  href="/contact"
                  className="rounded-xl border border-pink-300 bg-white px-6 py-3 font-semibold text-pink-600 transition hover:bg-pink-50"
                >
                  Contáctanos
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <img
                src="/logo-fervet.png"
                alt="Logo Fervet"
                className="w-full max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      
      <Elerginos />
      <Testimonio />
      <Location/>

      </main>


      <WhatsAppButton
        phone="56999250899"
        message="Hola, quiero agendar una consulta para mi mascota."
      />
    </div>
  );
}


export default Home;