
export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "carniceria",
    title: "Carnicería Matamoros",
    category: "E-commerce & Branding",
    image: "/carniceria.png",
    description: "Plataforma de pedidos locales y catálogo digital de cortes premium.",
  },
  {
    id: "pizzeria",
    title: "Pizzería Bel-Ana",
    category: "Web App & Pedidos Online",
    image: "/pizzeria.png",
    description: "Sistema web interactivo con menú dinámico y conversión directa a WhatsApp.",
  },
  {
    id: "adopcion-mascotas",
    title: "Diseño y Refujio",
    category: "Identidad & Sitio Corporativo",
    image: "/patas-pirque.png",
    description: "Rediseño integral de marca y sistema de agendamiento de citas.",
  },
  {
    id: "fiber-gomser",
    title: "Soluciones textiles",
    category: "Identidad & Sitio Corporativo",
    image: "/fiber-gomser.png",
    description: "Rediseño integral de marca y sistema de agendamiento de citas.",
  },
  {
    id: "taqueria-del-abuelo",
    title: "Taquería del Abuelo",
    category: "E-commerce & Branding",
    image: "/taqueria.png",
    description: "Plataforma de pedidos locales y catálogo digital de tacos tradicionales.",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  { number: "01", title: "Conocemos tu negocio" },
  { number: "02", title: "Diseñamos la estrategia" },
  { number: "03", title: "Desarrollamos tu proyecto" },
  { number: "04", title: "Lanzamos y optimizamos" },
];

export interface MetricItem {
  value: string;
  label: string;
}

export const METRICS: MetricItem[] = [
  { value: "01", label: "Estrategia digital" },
  { value: "02", label: "Diseño creativo" },
  { value: "03", label: "Desarrollo web" },
  { value: "04", label: "Optimización" },
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "desarrollo-web",
    title: "Desarrollo web",
    description: "Sitios web modernos, rápidos y adaptados a cualquier dispositivo.",
  },
  {
    id: "tiendas-online",
    title: "Tiendas online",
    description: "E-commerce para vender tus productos y gestionar tus pedidos.",
  },
  {
    id: "marketing-digital",
    title: "Marketing digital",
    description: "Estrategias digitales para atraer clientes y aumentar tus ventas.",
  },
  {
    id: "diseno-web",
    title: "Diseño UI/UX",
    description: "Experiencias visuales atractivas, intuitivas y enfocadas en el usuario.",
  },
  {
    id: "branding",
    title: "Identidad de marca",
    description: "Construimos una imagen profesional y consistente para tu negocio.",
  },
  {
    id: "soluciones-digitales",
    title: "Soluciones digitales",
    description: "Herramientas y automatizaciones para mejorar tus procesos comerciales.",
  },
];

export interface TestimonialItem {
  quote: string;
  author: string;
  company: string;
  avatar: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Aquí irá la opinión real de tu cliente sobre su experiencia.",
    author: "Cliente de demostración",
    company: "Carnicería Matamoros",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    quote: "Aquí irá otro comentario real sobre el proyecto y sus resultados.",
    author: "Cliente de demostración",
    company: "Pizzería Belana",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    quote: "Aquí irá una experiencia real de trabajo con Código Fuente.",
    author: "Cliente de demostración",
    company: "Proyecto de diseño web",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
];

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];
