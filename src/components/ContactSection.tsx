import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!formRef.current || status === "sending") return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="bg-gray-50 px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <span className="font-semibold uppercase tracking-widest text-blue-600">
            Contáctanos
          </span>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            ¡Conectemos!
          </h2>

          <p className="mb-10 mt-5 leading-relaxed text-gray-600">
            En Código Fuente creemos en las conexiones reales. Si tienes un
            proyecto en mente, quieres impulsar tu negocio digital o simplemente
            resolver tus dudas, contáctanos y con gusto te ayudaremos.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <Phone className="mt-1 h-6 w-6 text-blue-600" />

              <div>
                <a
                  href="tel:+523781426360"
                  className="font-semibold text-gray-900 hover:text-blue-600"
                >
                  +52 378 142 6360
                </a>

                <p className="text-gray-600">
                  Atención personalizada de lunes a sábado
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <Mail className="mt-1 h-6 w-6 text-blue-600" />

              <div>
                <a
                  href="mailto:equipo.codigofuente@gmail.com"
                  className="font-semibold text-gray-900 hover:text-blue-600"
                >
                  equipo.codigofuente@gmail.com
                </a>

                <p className="text-gray-600">
                  Respuestas rápidas a tu bandeja de entrada
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <MapPin className="mt-1 h-6 w-6 text-blue-600" />

              <div>
                <p className="font-semibold text-gray-900">
                  Tepatitlán de Morelos, Jalisco
                </p>

                <p className="text-gray-600">Atendemos en todo México 🇲🇽</p>
              </div>
            </li>
          </ul>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl bg-white p-8 shadow-lg"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="from_name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>

              <input
                id="from_name"
                name="from_name"
                type="text"
                placeholder="Tu nombre"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="company_name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Empresa
              </label>

              <input
                id="company_name"
                name="company_name"
                type="text"
                placeholder="Nombre de tu empresa"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="reply_to"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Correo electrónico
              </label>

              <input
                id="reply_to"
                name="reply_to"
                type="email"
                placeholder="correo@ejemplo.com"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Teléfono
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+52 378 000 0000"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Mensaje
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Cuéntanos sobre tu proyecto"
              rows={5}
              required
              className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
          >
            {status === "sending" ? "Enviando..." : "Enviar mensaje"}
          </button>

          <div aria-live="polite">
            {status === "success" && (
              <p className="rounded-lg bg-green-50 p-3 text-center text-sm text-green-700">
                ¡Mensaje enviado correctamente! Nos comunicaremos contigo
                pronto.
              </p>
            )}

            {status === "error" && (
              <p className="rounded-lg bg-red-50 p-3 text-center text-sm text-red-700">
                No pudimos enviar el mensaje. Intenta nuevamente.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;