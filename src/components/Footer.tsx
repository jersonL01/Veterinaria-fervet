function Footer() {
  return (
    <footer className="bg-purple-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src="/icon-fervet.png" alt="Fervet" className="h-14 w-17" />
            <span className="text-xl font-bold">Clinica Veterinaria Fervet</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-white/80">
            Atención con Amor y Calidad
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Enlaces</h3>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>
              <a href="/" className="transition hover:text-pink-300">
                Inicio
              </a>
            </li>
            <li>
              <a href="/Service" className="transition hover:text-pink-300">
                Servicios
              </a>
            </li>
            <li>
              <a href="/About" className="transition hover:text-pink-300">
                Nosotros
              </a>
            </li>
            <li>
              <a href="/Contact" className="transition hover:text-pink-300">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contacto</h3>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>Teléfono:+56 2 25595625</li>
            <li>Celular:+56 9 99250899 </li>
            <li>Santiago, Chile</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Redes sociales</h3>
          <ul className="mt-4 space-y-3 text-white/80">
           <li>
            <a
              href="https://www.instagram.com/clinicaveterinaria.fervet?igsh=ZzM5cmEzZ3dhZWNo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-pink-300"
            >
              <img src="/logo-ig.webp" alt="Instagram" className="h-7 w-7 object-contain" />
              <span>Instagram</span>
            </a>
          </li>
           <li>
            <a
              href="https://www.facebook.com/share/1CtgVVNipM/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-pink-300"
            >
              <img src="/logo-face.webp" alt="Facebook" className="h-7 w-7 object-contain" />
              <span>Facebook</span>
            </a>
          </li>


          <li>
            <a
              href="https://wa.me/56999250899"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition hover:text-pink-300"
            >
              <img src="/logo-whatsapp.webp" alt="WhatsApp" className="h-5 w-6 object-contain" />
              <span>WhatsApp</span>
            </a>
          </li>

          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        © 2026{" "}
        <a
          href="https://khido.cl/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-pink-300"
        >
          <strong>KHiDO.CL </strong>
        </a>
        . Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;