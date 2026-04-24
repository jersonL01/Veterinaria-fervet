import { motion, AnimatePresence } from "framer-motion";
import { PawPrint } from "lucide-react";
type ServiceItem = {
  title: string;
  description: string;
  price: string;
  extra: string;
  icon: string;
};

type ServiceGroup = {
  category: string;
  icon: string;
  items: ServiceItem[];
};

type ServiceListProps = {
  activeCategory: string;
};

const serviceGroups: ServiceGroup[] = [
  {
    category: "Consultas",
    icon: "🐾",
    items: [
      {
        title: "Consulta Semana",
        description:
          "Atención médica general para evaluar el estado de salud de tu mascota.",
        price: "$9.000",
        extra: "",
        icon: "🩺",
      },
      {
        title: "Consulta Fin de Semana y Festivo",
        description:
          "Atención médica general en días festivos y fines de semana.",
        price: "$11.000",
        extra: "",
        icon: "📅",
      },
      {
        title: "Consulta Urgencia",
        description:
          "Atención prioritaria para situaciones que requieren evaluación inmediata.",
        price: "$20.000",
        extra: "No incluye tratamientos o manejos adicionales.",
        icon: "🚨",
      },
      {
        title: "Consulta Cardiología",
        description: "Se debe agendar hora al fono +56999250899 y realizar un abono previo de $50.000",
        price: "$85.000",
        extra: "",
        icon: "❤️",
      },
      {
        title: "Consulta Dental",
        description: "Consulta dental veterinaria.",
        price: "$25.000",
        extra: "Disponible solo lunes de 9:00 a 12:00 hrs.",
        icon: "🦷",
      },
    ],
  },
  {
    category: "Vacunas y Prevención",
    icon: "💉",
    items: [
      {
        title: "Vacunación",
        description: "Incluye consulta para evaluación física y clínica.",
        price: "$16.000",
        extra: "",
        icon: "💉",
      },
      {
        title: "2 Vacunas",
        description:
          "Dos vacunas en el mismo paciente. Incluye consulta para evaluación física y clínica.",
        price: "$26.000",
        extra: "",
        icon: "💉",
      },
    ],
  },
  {
    category: "Exámenes e Imágenes",
    icon: "🖥️",
    items: [
      {
        title: "Ecografía",
        description: "Servicio de ecografía veterinaria.",
        price: "$42.000",
        extra: "Domingo y festivo $45.000. Abono previo de $15.000.",
        icon: "🖥️",
      },
      {
        title: "Ecocardiografía",
        description: "Evaluación ecocardiográfica veterinaria.",
        price: "$50.000",
        extra: "Previo abono de $20.000.",
        icon: "🫀",
      },
      {
        title: "Exámenes de Laboratorio",
        description: "Exámenes clínicos veterinarios.",
        price: "Consultar valor",
        extra: "Solicitar valor en recepción.",
        icon: "🔬",
      },
      {
        title: "Radiografía 2 Vistas",
        description: "Radiografía veterinaria de 2 vistas.",
        price: "Desde $50.000",
        extra: "Fuera de horario + $5.000.",
        icon: "🩻",
      },
      {
        title: "Radiografía Estudio",
        description: "Radiografía de estudio.",
        price: "$55.000",
        extra: "Fuera de horario + $5.000.",
        icon: "📷",
      },
    ],
  },
  {
    category: "Procedimientos",
    icon: "🏥",
    items: [
      {
        title: "Cirugías",
        description: "Procedimientos quirúrgicos con evaluación previa.",
        price: "Consultar valor",
        extra: "Se debe agendar consulta para evaluar la cirugía.",
        icon: "🏥",
      },
    ],
  },
  {
    category: "Hospitalización",
    icon: "🛏️",
    items: [
      {
        title: "Hospitalización 24 hrs",
        description: "Servicio de hospitalización veterinaria.",
        price: "Consultar valor",
        extra: "",
        icon: "🛏️",
      },
    ],
  },
];

function ServiceList({ activeCategory }: ServiceListProps) {
  const activeGroup = serviceGroups.find(
    (group) => group.category === activeCategory
  );

  if (!activeGroup) return null;

  return (
    <section id="lista-servicios" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup.category}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="text-3xl">{activeGroup.icon}</span>
              <h2 className="text-3xl font-bold text-purple-900">
                {activeGroup.category}
              </h2>
              <div className="hidden h-px flex-1 bg-purple-200 md:block" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {activeGroup.items.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-[28px] border border-purple-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="absolute bottom-4 right-5 text-4xl   opacity-10">
                     <PawPrint className="h-10 w-10 text-purple-900" />
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-3xl">
                      {service.icon}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold leading-tight text-purple-900">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-[15px] leading-7 text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <span className="inline-flex rounded-2xl bg-pink-50 px-4 py-2 text-xl font-bold text-pink-700">
                      {service.price}
                    </span>
                  </div>

                  {service.extra && (
                    <p className="mt-5 text-sm leading-6 text-gray-500">
                      {service.extra}
                    </p>
                  )}
                </motion.article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ServiceList;