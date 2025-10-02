import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16" id="contact">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start"  data-aos="fade-up">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let’s connect!
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            En <span className="font-semibold text-blue-600">Código Fuente</span> creemos en las conexiones reales. 
            Si tienes un proyecto en mente, quieres impulsar tu negocio digital o simplemente resolver tus dudas, 
            contáctanos y con gusto te ayudaremos.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">+52 378 142 6360</p>
                <p className="text-gray-600">Atención personalizada de lunes a sábado</p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">equipo.codigofuente@gmail.com</p>
                <p className="text-gray-600">Respuestas rápidas a tu bandeja de entrada</p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Tepatitlán de Morelos, Jalisco</p>
                <p className="text-gray-600">Atendemos en todo México 🇲🇽</p>
              </div>
            </li>
          </ul>
        </div>

        <form className="bg-white shadow-lg rounded-2xl p-8 space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <textarea
            placeholder="Message"
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
