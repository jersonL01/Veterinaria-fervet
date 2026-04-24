import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Wallet } from "lucide-react";

function MetodoPago() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fcf9ff] via-[#f8f2fc] to-white" />
      <div className="absolute left-10 top-16 h-40 w-40 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="absolute right-10 top-24 h-52 w-52 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-700">
            Métodos de pago
          </span>

          <h2 className="mt-6 text-3xl font-bold text-purple-900 md:text-5xl">
            Paga de forma fácil y segura
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">
            Aceptamos distintos medios de pago para entregarte una atención más
            cómoda, rápida y segura.
          </p>
        </motion.div>

        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="mt-16 grid items-center gap-10 rounded-[36px] border border-purple-100 bg-white/90 p-8 shadow-xl backdrop-blur-sm lg:grid-cols-2 lg:p-12"
        >
          {/* Lado izquierdo */}
          <div>
            <h3 className="text-2xl font-bold text-purple-900 md:text-3xl">
              Distintas opciones para tu comodidad
            </h3>

            <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">
                 Puedes pagar con efectivo, débito o crédito.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl bg-purple-50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-purple-700 shadow-sm">
                  <CreditCard className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900">
                    Pago con tarjetas
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Aceptamos distintos medios asociados a Webpay Plus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-pink-50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-pink-600 shadow-sm">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900">
                    Pago seguro
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Tus pagos se realizan mediante plataformas confiables y
                    seguras.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-purple-50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-purple-700 shadow-sm">
                  <Wallet className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900">
                    Mayor comodidad
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Más opciones para que elijas la forma de pago que mejor se
                    adapte a ti.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado derecho */}
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-pink-200/40 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-purple-200/40 blur-2xl" />

            <div className="relative rounded-[32px] border border-purple-100 bg-gradient-to-br from-white to-purple-50 p-8 shadow-lg">
              <div className="flex min-h-[300px] items-center justify-center rounded-[24px] border border-dashed border-purple-200 bg-white">
                <img
                  src="/logo-metodopago.webp"
                  alt="Métodos de pago disponibles"
                  className="max-h-[220px] w-full max-w-[420px] object-contain"
                />
              </div>

              <p className="mt-6 text-center text-sm leading-6 text-gray-500">
                Webpay Plus y otros medios de pago disponibles para una atención
                más cómoda.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MetodoPago;