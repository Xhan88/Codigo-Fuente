
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export function WhatsAppButton() {
  const phone = '523781426360';
  const message = encodeURIComponent(
    '¡Hola! Me interesa conocer más sobre los servicios de Código Fuente.'
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Código Fuente por WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] block w-20 h-20 sm:w-24 sm:h-24 cursor-pointer"
    >
      <DotLottieReact
        src="https://lottie.host/5ec66ffc-c57a-42d2-a8f7-bf12ebbef7cb/62BHXl3eae.lottie"
        loop
        autoplay
      />
    </a>
  );
}
