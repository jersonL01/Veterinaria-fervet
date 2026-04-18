import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setShowNavbar(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 backdrop-blur-md transition-all duration-500 ${
        showNavbar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        scrolled
          ? "bg-purple-950/95 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "bg-purple-950/80"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center gap-3 transition-all duration-300 hover:scale-105"
        >
          <img
            src="/icon-fervet.png"
            alt="Fervet"
            className="h-10 w-10 rounded-full object-cover shadow-md transition-transform duration-300 hover:rotate-6"
          />
          <span className="text-xl font-bold text-white transition duration-300 hover:text-pink-300">
            Clinica Veterinaria Fervet
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="relative font-medium text-white/80 transition duration-300 hover:text-pink-300 after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-pink-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Inicio
          </a>
          <a
            href="/Service"
            className="relative font-medium text-white/80 transition duration-300 hover:text-pink-300 after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-pink-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Servicios
          </a>
          <a
            href="/Adopcion"
            className="relative font-medium text-white/80 transition duration-300 hover:text-pink-300 after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-pink-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Adopción
          </a>
          <a
            href="/about"
            className="relative font-medium text-white/80 transition duration-300 hover:text-pink-300 after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-pink-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Nosotros
          </a>
          <a
            href="/contact"
            className="relative font-medium text-white/80 transition duration-300 hover:text-pink-300 after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:w-0 after:bg-pink-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contacto
          </a>
        </nav>

     
        <div className="hidden md:block">
          
          <a
            href="#contacto"
            className="rounded-xl bg-pink-500 px-5 py-2.5 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-pink-600 hover:shadow-pink-500/30"
          >
            Reservar
          </a>

        </div> 
       

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Abrir menú"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 bg-purple-900/95 transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="py-3 font-medium text-white/90 transition hover:translate-x-1 hover:text-pink-300"
          >
            Inicio
          </a>
          <a
            href="/Service"
            onClick={() => setMenuOpen(false)}
            className="py-3 font-medium text-white/90 transition hover:translate-x-1 hover:text-pink-300"
          >
            Servicios
          </a>
          <a
            href="/About"
            onClick={() => setMenuOpen(false)}
            className="py-3 font-medium text-white/90 transition hover:translate-x-1 hover:text-pink-300"
          >
            Nosotros
          </a>
          <a
            href="/Contact"
            onClick={() => setMenuOpen(false)}
            className="py-3 font-medium text-white/90 transition hover:translate-x-1 hover:text-pink-300"
          >
            Contacto
          </a>

          
        </nav>
      </div>

      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-70"></div>
    </header>
  );
}

export default Navbar;