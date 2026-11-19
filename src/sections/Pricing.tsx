
export function Pricing() {
  const plans = [
    {
      id: 'landing',
      number: '01',
      name: 'Presencia digital',
      subtitle: 'Landing Page',
      price: '$4,500',
      description:
        'Todo lo que necesitas para presentar tu negocio profesionalmente y comenzar a captar clientes.',
      features: [
        'Diseño UI/UX personalizado',
        'Desarrollo web con código a medida',
        'Hasta 5 secciones personalizadas',
        'Diseño adaptable a móviles',
        'Integración con WhatsApp y redes sociales',
        'Dominio y hosting por 1 año',
        'Mantenimiento técnico por 1 año',
        'SEO básico',
      ],
      featured: false,
      button: 'Quiero mi landing page',
    },
    {
      id: 'corporativo',
      number: '02',
      name: 'Negocio digital',
      subtitle: 'Sitio web corporativo',
      price: '$7,500',
      description:
        'Una plataforma digital completa para proyectar profesionalismo, posicionar tu marca y generar oportunidades.',
      features: [
        'Diseño UI/UX exclusivo',
        'Desarrollo con código a medida',
        'Secciones personalizadas según tu negocio',
        'Galería de productos o servicios',
        'Formularios de contacto',
        'Integración con WhatsApp y Google Maps',
        'Dominio y hosting por 1 año',
        'Mantenimiento técnico por 1 año',
        'SEO básico y optimización de rendimiento',
        'Configuración de Google Analytics',
        'Publicidad de lanzamiento en nuestras redes',
      ],
      featured: true,
      button: 'Quiero impulsar mi negocio',
    },
    {
      id: 'ecommerce',
      number: '03',
      name: 'Comercio digital',
      subtitle: 'Tienda en línea',
      price: 'Desde $12,000',
      description:
        'Vende tus productos en internet con una tienda diseñada para ofrecer una experiencia de compra profesional.',
      features: [
        'Diseño UI/UX personalizado',
        'Desarrollo de tienda en línea',
        'Catálogo y gestión de productos',
        'Carrito de compras',
        'Integración de métodos de pago',
        'Gestión de pedidos',
        'Integración con WhatsApp',
        'Correos corporativos según plan contratado',
        'Dominio y hosting por 1 año',
        'Mantenimiento técnico por 1 año',
        'Capacitación para administrar tu tienda',
      ],
      featured: false,
      button: 'Cotizar mi tienda en línea',
    },
  ];

  const whatsappNumber = '523781234567'; // Reemplazar con tu número real

  const contactWhatsApp = (planName: string) => {
    const message = encodeURIComponent(
      `Hola, estoy interesado en el plan ${planName} de Código Fuente. Me gustaría recibir más información.`
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="planes"
      className="py-24 bg-[#C8CACA]/50 border-t border-b border-[#141414]/10"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">

          <span className="inline-block text-xs uppercase tracking-[0.2em] font-extrabold text-[#2BE88E] bg-[#141414] px-4 py-2 rounded mb-6">
            Inversión digital
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-[#141414] tracking-tight leading-tight">
            Tu próximo negocio digital comienza aquí.
          </h2>

          <p className="text-[#4A4D4D] text-sm sm:text-base mt-5 max-w-2xl mx-auto leading-relaxed">
            Soluciones digitales diseñadas a la medida de tus objetivos.
            Desde una landing page hasta una plataforma completa de comercio electrónico.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-2xl p-7 sm:p-8 transition-all duration-300 ${
                plan.featured
  ? 'bg-[#141414] text-white border-2 border-[#2BE88E] shadow-[0_0_15px_rgba(43,232,142,0.15)] hover:shadow-[0_0_20px_rgba(43,232,142,0.35),0_0_45px_rgba(43,232,142,0.15)] hover:border-[#2BE88E] md:scale-[1.03] z-10 transition-all duration-500'
                  : 'bg-[#D8DADA] text-[#141414] border border-[#141414]/15 hover:border-[#2BE88E] hover:-translate-y-1'
              }`}
            >

              {/* Recommended Label */}
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#2BE88E] text-[#141414] text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Más solicitado
                </span>
              )}

              {/* Plan Header */}
              <div className="flex items-center justify-between mb-7">

                <span
                  className={`text-xs font-black tracking-widest ${
                    plan.featured ? 'text-[#2BE88E]' : 'text-[#4A4D4D]'
                  }`}
                >
                  PLAN / {plan.number}
                </span>

                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    plan.featured ? 'text-white/40' : 'text-[#4A4D4D]/60'
                  }`}
                >
                  Código Fuente
                </span>

              </div>

              {/* Title */}
              <div className="mb-5">

                <h3 className="text-2xl font-black tracking-tight">
                  {plan.name}
                </h3>

                <p
                  className={`text-sm mt-1 ${
                    plan.featured ? 'text-white/50' : 'text-[#4A4D4D]'
                  }`}
                >
                  {plan.subtitle}
                </p>

              </div>

              {/* Price */}
              <div className="mb-5">

                <div className="flex items-baseline gap-2 flex-wrap">

                  <span
                    className={`font-black tracking-tight ${
                      plan.id === 'ecommerce'
                        ? 'text-3xl'
                        : 'text-5xl'
                    }`}
                  >
                    {plan.price}
                  </span>

                  <span
                    className={`text-xs font-semibold ${
                      plan.featured ? 'text-white/40' : 'text-[#4A4D4D]'
                    }`}
                  >
                    MXN
                  </span>

                </div>

                {plan.id === 'ecommerce' && (
                  <p className="text-xs text-[#4A4D4D] mt-2">
                    Precio sujeto a valoración del proyecto.
                  </p>
                )}

              </div>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-7 min-h-[72px] ${
                  plan.featured ? 'text-white/60' : 'text-[#4A4D4D]'
                }`}
              >
                {plan.description}
              </p>

              <div
                className={`border-t mb-6 ${
                  plan.featured
                    ? 'border-white/15'
                    : 'border-[#141414]/15'
                }`}
              />

              {/* Features */}
              <div className="flex flex-col gap-4 flex-1">

                <span
                  className={`text-[10px] font-black uppercase tracking-[0.18em] mb-1 ${
                    plan.featured ? 'text-[#2BE88E]' : 'text-[#4A4D4D]'
                  }`}
                >
                  ¿Qué incluye?
                </span>

                {plan.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >

                    <span
                      className={`text-sm font-bold mt-0.5 ${
                        plan.featured ? 'text-[#2BE88E]' : 'text-[#141414]'
                      }`}
                    >
                      ✓
                    </span>

                    <span
                      className={`text-xs leading-relaxed ${
                        plan.featured ? 'text-white/75' : 'text-[#4A4D4D]'
                      }`}
                    >
                      {feature}
                    </span>

                  </div>
                ))}

              </div>

              {/* CTA */}
              <button
                onClick={() => contactWhatsApp(plan.name)}
                className={`w-full mt-10 py-4 px-4 rounded-full text-sm font-bold transition-all duration-300 ${
                  plan.featured
                    ? 'bg-[#2BE88E] text-[#141414] hover:bg-white'
                    : 'bg-[#141414] text-white hover:bg-[#2BE88E] hover:text-[#141414]'
                }`}
              >
                {plan.button} →
              </button>

            </div>
          ))}

        </div>

        {/* Footer Note */}
        <div className="mt-14 text-center max-w-2xl mx-auto">

          <p className="text-[#4A4D4D] text-xs leading-relaxed">
            ¿Necesitas algo diferente? Desarrollamos soluciones completamente
            personalizadas. Cuéntanos tu idea y preparemos una propuesta
            a la medida de tu negocio.
          </p>

          <a
            href="#contacto"
            className="inline-flex items-center gap-2 mt-5 text-[#141414] font-bold text-sm border-b-2 border-[#2BE88E] pb-1 hover:text-[#2BE88E] transition-colors"
          >
            Hablemos de tu proyecto →
          </a>

        </div>

      </div>
    </section>
  );
}
