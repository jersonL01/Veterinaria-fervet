import { motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";

type Category = {
  title: string;
  icon: string;
};

type ServiceCategoriesProps = {
  activeCategory: string;
  setActiveCategory: Dispatch<SetStateAction<string>>;
};

const categories: Category[] = [
  {
    title: "Consultas",
    icon: "🩺",
  },
  {
    title: "Vacunas y Prevención",
    icon: "💉",
  },
  {
    title: "Exámenes e Imágenes",
    icon: "🖥️",
  },
  {
    title: "Procedimientos",
    icon: "🏥",
  },
  {
    title: "Hospitalización",
    icon: "🛏️",
  },
];

function ServiceCategories({
  activeCategory,
  setActiveCategory,
}: ServiceCategoriesProps) {
  return (
    <section className="relative z-20 -mt-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-5">
          {categories.map((category, index) => {
            const isActive = activeCategory === category.title;

            return (
              <motion.button
                type="button"
                key={category.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                onClick={() => setActiveCategory(category.title)}
                className={`rounded-[24px] border p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md ${
                  isActive
                    ? "border-purple-700 bg-gradient-to-r from-purple-700 to-purple-600 text-white"
                    : "border-purple-100 bg-white text-purple-900"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${
                      isActive ? "bg-white/15" : "bg-purple-100"
                    }`}
                  >
                    {category.icon}
                  </div>

                  <h3 className="text-lg font-bold leading-tight">
                    {category.title}
                  </h3>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceCategories;