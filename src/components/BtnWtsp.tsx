type WhatsAppButtonProps = {
  phone: string;
  message?: string;
};

function BtnWstp({
  phone,
  message = "Hola, quiero más información sobre sus servicios veterinarios.",
}: WhatsAppButtonProps) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="group fixed bottom-6 right-6 z-50 flex items-center">
      <div className="pointer-events-none mr-3 hidden translate-x-4 rounded-2xl bg-white px-4 py-2 text-sm font-medium text-gray-700 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Hola, escríbenos 👋
      </div>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="flex items-center gap-3 rounded-full bg-green-500 px-4 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-600"
      >
        <img
          src="/logo-whatsapp.webp"
          alt="WhatsApp"
          className="h-6 w-6 object-contain"
        />
        <span className="hidden font-medium sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}

export default BtnWstp;