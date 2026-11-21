
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  Mail,
  MessageCircle,
  LockKeyhole,
} from 'lucide-react';

const sections = [
  { id: 'responsable', number: '01', title: 'Responsable de los datos' },
  { id: 'datos', number: '02', title: 'Datos personales recopilados' },
  { id: 'finalidades', number: '03', title: 'Finalidades del tratamiento' },
  { id: 'whatsapp', number: '04', title: 'Medios de contacto' },
  { id: 'transferencias', number: '05', title: 'Transferencia de datos' },
  { id: 'derechos', number: '06', title: 'Derechos ARCO' },
  { id: 'limitacion', number: '07', title: 'Limitación del uso' },
  { id: 'seguridad', number: '08', title: 'Seguridad y conservación' },
  { id: 'cambios', number: '09', title: 'Cambios al aviso' },
  { id: 'contacto', number: '10', title: 'Contacto' },
];

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-[#141414]/10 py-10 sm:py-12"
    >
      <div className="flex items-start gap-5 sm:gap-8">
        <span className="text-xs font-mono font-bold text-[#269c69] pt-1">
          {number}
        </span>

        <div className="flex-1 min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#141414] mb-5">
            {title}
          </h2>

          <div className="space-y-4 text-sm sm:text-[15px] leading-7 text-[#555858]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#D8DADA] text-[#141414] selection:bg-[#2BE88E] selection:text-[#141414]">

      {/* Background */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none opacity-40 bg-cf-dots"
      />

      <div className="relative z-10">

        {/* Header */}
        <header className="border-b border-[#141414]/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link
              to="/"
              className="text-xl font-black tracking-tight hover:opacity-70 transition-opacity"
            >
              CÓDIGO<span className="text-[#269c69]">FUENTE.</span>
            </Link>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold hover:text-[#269c69] transition-colors"
            >
              <ArrowLeft size={16} />
              Volver al inicio
            </Link>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-14 sm:py-20">

          {/* Hero */}
          <div className="max-w-4xl mb-16 sm:mb-24">

            <div className="flex items-center gap-2 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#269c69]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#555858]">
                Información legal / Privacidad
              </span>
            </div>

            <div className="flex items-start gap-4 mb-7">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#141414] text-[#2BE88E] flex items-center justify-center shrink-0">
                <ShieldCheck size={27} strokeWidth={1.6} />
              </div>

              <div>
                <p className="text-xs font-mono text-[#269c69] font-bold mb-2">
                  DOCUMENTO LEGAL · 001
                </p>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05]">
                  Aviso de
                  <br />
                  privacidad<span className="text-[#269c69]">.</span>
                </h1>
              </div>
            </div>

            <p className="max-w-2xl text-base sm:text-lg text-[#555858] leading-relaxed mt-8">
              En Código Fuente respetamos y protegemos tu información
              personal. Aquí explicamos cómo la recopilamos, utilizamos
              y protegemos cuando te pones en contacto con nosotros.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-9 text-xs text-[#555858]">
              <span className="px-3 py-2 border border-[#141414]/15 rounded-full">
                Última actualización: 21 de noviembre de 2026
              </span>

              <span className="px-3 py-2 bg-[#2BE88E]/20 text-[#185c3c] rounded-full font-semibold">
                Christian Martínez Quezada
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">

            {/* Table of contents */}
            <aside className="lg:sticky lg:top-10 lg:self-start">

              <div className="border border-[#141414]/10 rounded-2xl p-6 bg-white/30">
                <p className="text-[10px] uppercase tracking-[0.2em] font-black text-[#269c69] mb-6">
                  Contenido
                </p>

                <nav className="space-y-4">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-start gap-3 text-xs sm:text-sm text-[#555858] hover:text-[#141414] transition-colors group"
                    >
                      <span className="font-mono text-[10px] text-[#269c69] pt-0.5">
                        {section.number}
                      </span>

                      <span className="group-hover:translate-x-1 transition-transform">
                        {section.title}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="hidden lg:block mt-5 rounded-2xl bg-[#141414] p-6 text-white">
                <LockKeyhole className="text-[#2BE88E] mb-4" size={23} />

                <p className="text-sm font-bold mb-2">
                  Tu información importa.
                </p>

                <p className="text-xs leading-relaxed text-white/55">
                  Tratamos tus datos personales con responsabilidad
                  y únicamente para las finalidades informadas.
                </p>
              </div>
            </aside>

            {/* Content */}
            <article className="max-w-3xl">

              <div className="bg-white/40 border border-[#141414]/10 rounded-2xl p-6 sm:p-8 mb-8">
                <p className="text-sm leading-7 text-[#555858]">
                  Este aviso se emite de conformidad con la Ley Federal
                  de Protección de Datos Personales en Posesión de los
                  Particulares y demás disposiciones aplicables.
                </p>
              </div>

              <Section
                id="responsable"
                number="01"
                title="Responsable de los datos"
              >
                <p>
                  Christian Martínez Quezada, quien opera comercialmente
                  bajo el nombre de Código Fuente, es responsable del
                  tratamiento de los datos personales que recabe en
                  relación con sus actividades comerciales.
                </p>

                <p>
                  Ubicación: Tepatitlán de Morelos, Jalisco, México.
                </p>
              </Section>

              <Section
                id="datos"
                number="02"
                title="Datos personales recopilados"
              >
                <p>
                  A través de los medios de comunicación y atención
                  comercial, principalmente WhatsApp, podemos recibir
                  voluntariamente los siguientes datos:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>Nombre y apellidos.</li>
                  <li>Número telefónico.</li>
                  <li>Dirección de correo electrónico.</li>
                  <li>Información relacionada con el proyecto o servicio solicitado.</li>
                  <li>Información comercial necesaria para elaborar cotizaciones y prestar servicios.</li>
                </ul>

                <p>
                  No solicitamos intencionalmente datos personales
                  sensibles.
                </p>
              </Section>

              <Section
                id="finalidades"
                number="03"
                title="Finalidades del tratamiento"
              >
                <p>
                  Los datos personales podrán utilizarse para las
                  siguientes finalidades primarias:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>Atender consultas y solicitudes de información.</li>
                  <li>Elaborar y enviar cotizaciones.</li>
                  <li>Dar seguimiento a proyectos y propuestas comerciales.</li>
                  <li>Establecer comunicación con clientes y prospectos.</li>
                  <li>Gestionar la contratación y prestación de servicios.</li>
                  <li>Cumplir obligaciones legales y contractuales.</li>
                </ul>

                <p>
                  Cualquier finalidad secundaria deberá informarse
                  previamente y contar con el consentimiento que
                  legalmente corresponda.
                </p>
              </Section>

              <Section
                id="whatsapp"
                number="04"
                title="Medios de contacto"
              >
                <p>
                  Código Fuente utiliza WhatsApp como medio de
                  comunicación comercial. Cuando una persona inicia
                  una conversación, puede proporcionar voluntariamente
                  sus datos personales para recibir información,
                  solicitar cotizaciones o contratar servicios.
                </p>

                <p>
                  El uso de WhatsApp también está sujeto a las condiciones
                  y políticas de privacidad de su proveedor, quien puede
                  realizar tratamientos independientes de información.
                </p>
              </Section>

              <Section
                id="transferencias"
                number="05"
                title="Transferencia de datos"
              >
                <p>
                  Código Fuente no comercializa ni vende datos personales.
                </p>

                <p>
                  Cuando resulte necesario compartir información con
                  terceros para prestar servicios, cumplir obligaciones
                  legales o atender solicitudes, se observarán las
                  condiciones y excepciones previstas en la legislación
                  aplicable y se solicitará el consentimiento cuando
                  corresponda.
                </p>
              </Section>

              <Section
                id="derechos"
                number="06"
                title="Derechos ARCO"
              >
                <p>
                  Como titular de tus datos personales, tienes derecho
                  a solicitar:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Acceso:</strong> conocer qué datos personales
                    tenemos y cómo los tratamos.
                  </li>
                  <li>
                    <strong>Rectificación:</strong> solicitar la corrección
                    de información inexacta o incompleta.
                  </li>
                  <li>
                    <strong>Cancelación:</strong> solicitar la eliminación
                    de tus datos cuando legalmente proceda.
                  </li>
                  <li>
                    <strong>Oposición:</strong> oponerte al tratamiento
                    de tus datos en los supuestos previstos por la ley.
                  </li>
                </ul>

                <p>
                  Para ejercer estos derechos puedes enviar una solicitud
                  a nuestro correo electrónico de contacto.
                </p>

                <p>
                  La solicitud deberá incluir la información necesaria
                  para identificar al titular, acreditar su identidad
                  o representación, describir los datos involucrados
                  y especificar el derecho que desea ejercer.
                </p>

                <p>
                  Las solicitudes serán atendidas conforme a los plazos
                  y procedimientos establecidos en la legislación
                  aplicable.
                </p>
              </Section>

              <Section
                id="limitacion"
                number="07"
                title="Limitación del uso o divulgación"
              >
                <p>
                  Puedes solicitar la limitación del uso o divulgación
                  de tus datos personales mediante una solicitud dirigida
                  al correo electrónico de contacto indicado en este aviso.
                </p>
              </Section>

              <Section
                id="seguridad"
                number="08"
                title="Seguridad y conservación"
              >
                <p>
                  Se adoptarán medidas administrativas, técnicas y físicas
                  razonables para proteger los datos personales contra
                  pérdida, alteración, destrucción, acceso o tratamiento
                  no autorizado.
                </p>

                <p>
                  Los datos serán conservados durante el tiempo necesario
                  para cumplir las finalidades informadas y las
                  obligaciones legales aplicables.
                </p>
              </Section>

              <Section
                id="cambios"
                number="09"
                title="Cambios al aviso de privacidad"
              >
                <p>
                  Este aviso podrá actualizarse cuando existan cambios
                  en nuestras prácticas de tratamiento de datos o en
                  las disposiciones legales aplicables.
                </p>

                <p>
                  Las modificaciones estarán disponibles en esta misma
                  página:
                </p>

                <a
                  href="https://codigofuente.lat/aviso-de-privacidad"
                  className="inline-flex items-center gap-2 text-[#269c69] font-semibold hover:underline break-all"
                >
                  codigofuente.lat/aviso-de-privacidad
                  <ArrowUpRight size={15} />
                </a>
              </Section>

              <Section
                id="contacto"
                number="10"
                title="Contacto"
              >
                <p>
                  Para consultas relacionadas con este aviso o para
                  ejercer tus derechos sobre tus datos personales,
                  puedes comunicarte mediante los siguientes medios:
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-3">

                  <a
                    href="mailto:christianmq888@gmail.com"
                    className="group flex items-center gap-4 p-5 rounded-xl bg-white/40 border border-[#141414]/10 hover:border-[#269c69] transition-colors"
                  >
                    <Mail className="text-[#269c69] shrink-0" size={22} />

                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-[#777] mb-1">
                        Correo electrónico
                      </p>

                      <p className="text-xs sm:text-sm font-semibold break-all">
                        christianmq888@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/523781426360"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 rounded-xl bg-white/40 border border-[#141414]/10 hover:border-[#269c69] transition-colors"
                  >
                    <MessageCircle className="text-[#269c69] shrink-0" size={22} />

                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-[#777] mb-1">
                        WhatsApp
                      </p>

                      <p className="text-sm font-semibold">
                        378 142 6360
                      </p>
                    </div>
                  </a>

                </div>

                <p className="text-xs text-[#777] pt-4">
                  Responsable: Christian Martínez Quezada.
                  Nombre comercial: Código Fuente.
                  Ubicación: Tepatitlán de Morelos, Jalisco, México.
                </p>
              </Section>

              {/* Closing */}
              <div className="mt-14 rounded-2xl bg-[#141414] p-7 sm:p-10 text-white">
                <div className="flex items-center gap-3 mb-5">
                  <ShieldCheck className="text-[#2BE88E]" size={25} />

                  <span className="text-xs font-bold uppercase tracking-widest text-[#2BE88E]">
                    Código Fuente
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">
                  Tu confianza es parte de nuestro trabajo.
                </h3>

                <p className="text-sm text-white/55 leading-relaxed max-w-xl mb-8">
                  Si tienes alguna pregunta sobre el tratamiento de
                  tus datos personales, estamos disponibles para atenderte.
                </p>

                <Link
                  to="/"
                  className="inline-flex items-center gap-3 bg-[#2BE88E] text-[#141414] px-6 py-3 rounded-full text-sm font-bold hover:bg-white transition-colors"
                >
                  Regresar a Código Fuente
                  <ArrowUpRight size={17} />
                </Link>
              </div>

            </article>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#141414]/10">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#555858]">
              © 2026 Código Fuente. Todos los derechos reservados.
            </p>

            <Link
              to="/"
              className="text-xs font-semibold text-[#555858] hover:text-[#269c69] transition-colors"
            >
              Volver al sitio principal
            </Link>
          </div>
        </footer>

      </div>
    </div>
  );
}
