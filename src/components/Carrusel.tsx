import { useEffect, useState } from "react";

const images = [
  "/mascota-1.jpg",
  "/mascota-2.jpg",
  "/mascota-3.jpg",
];

function Carrusel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Mascota ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-purple-900/25"></div>
      <div className="absolute inset-0  from-pink-200/90 via-pink-100/75 to-pink-50/50"></div>
    </div>
  );
}

export default Carrusel;