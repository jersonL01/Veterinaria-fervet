
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative font-medium transition duration-300 after:absolute after:bottom-[-6px] after:left-0 after:h-[2px] after:transition-all after:duration-300 ${
      isActive
        ? "text-pink-300 after:w-full after:bg-pink-300"
        : "text-white/80 hover:text-pink-300 after:w-0 after:bg-pink-300 hover:after:w-full"
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-3 font-medium transition ${
      isActive
        ? "translate-x-1 text-pink-300"
        : "text-white/90 hover:translate-x-1 hover:text-pink-300"
    }`;

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
        <NavLink
          to="/"
          className="flex items-center gap-3 transition-all duration-300 hover:scale-105"
        >
          <img
            src="/icon-fervet.png"
            alt="Fervet"
            className="h-10 w-10  object-cover transition-transform duration-300 hover:rotate-6"
          />
          <span className="text-xl font-bold text-white transition duration-300 hover:text-pink-300">
            Clínica Veterinaria Fervet
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            Inicio
          </NavLink>
           <NavLink to="/clientes" className={navLinkClass}>
            Clientes
          </NavLink>

          <NavLink to="/service" className={navLinkClass}>
            Servicios
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            Nosotros
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contacto
          </NavLink>
        </nav>

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
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            Inicio
          </NavLink>
           <NavLink
            to="/clientes"
            onClick={() => setMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            Clientes
          </NavLink>

          <NavLink
            to="/service"
            onClick={() => setMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            Servicios
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            Nosotros
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={mobileNavLinkClass}
          >
            Contacto
          </NavLink>

        </nav>
      </div>

      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-70"></div>
    </header>
  );
}

export default Navbar;