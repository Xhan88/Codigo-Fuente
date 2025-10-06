import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaReact, FaWordpress } from "react-icons/fa";
import {
  SiMui,
  SiCss3,
  SiElementor,
  SiFirebase,
} from "react-icons/si";

type TechStack = {
  icon: JSX.Element;
  name: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  stack: TechStack[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Carnicería Matamoros",
    description:
      "Sitio web diseñado para una carnicería local. Presenta los cortes más populares, promociones y contacto directo con WhatsApp.",
    image: '/carniceria.png',
    link: "https://carniceriamatamoros.codigomartinez.com/", // Cambia al dominio real
    stack: [
      { icon: <FaWordpress className='text-blue-600' />, name: "WordPress" },
      { icon: <SiElementor className='text-pink-500' />, name: "Elementor" },
    ],
  },
  {
    id: 2,
    title: "Taquería del Abuelo",
    description:
      "Landing page moderna y responsive para una taquería familiar. Muestra menú, ubicación y llamada a la acción para pedidos.",
    image: '/taqueria.png',
    link: "https://delabuelotaqueria.codigomartinez.com/", // Cambia al dominio real
    stack: [
      { icon: <FaWordpress className='text-blue-600' />, name: "WordPress" },
      { icon: <SiElementor className='text-pink-500' />, name: "Elementor" },
    ],
  },
  {
    id: 3,
    title: "Pedicure Susy",
    description:
      "Landing page profesional para Pedicure Clínico. Desarrollada con React, MUI y CSS. Presenta servicios, valores y contacto directo.",
    image:'/pedicure.png',
    link: "https://pedicure-clinico-susy-sanchez.netlify.app/",
    stack: [
      { icon: <FaReact className='text-sky-500' />, name: "React" },
      { icon: <SiMui className='text-blue-700' />, name: "MUI" },
      { icon: <SiCss3 className='text-blue-500' />, name: "CSS" },
      { icon: <SiFirebase className='text-yellow-500' />, name: "Firebase" },
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <section id='projects' className='bg-gray-50 py-20 px-6'>
      <div className='max-w-6xl mx-auto text-center mb-12'>
        <h2 className='text-4xl font-bold text-blue-800 mb-4'>
          Proyectos Realizados
        </h2>
        <p className='text-gray-600'>
          Algunos de los sitios web desarrollados para negocios locales.
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className='bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition flex flex-col justify-between'
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-56 object-cover'
              loading='lazy'
            />

            <div className='p-6 text-left flex flex-col justify-between h-full'>
              <div>
                <h3 className='text-xl font-semibold text-blue-800 mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-600 mb-4 text-sm leading-relaxed'>
                  {project.description}
                </p>
              </div>

              {/* Stack */}
              <div className='flex flex-wrap gap-3 mb-4'>
                {project.stack.map((tech, index) => (
                  <div
                    key={index}
                    className='flex items-center gap-1 text-gray-700 text-sm'
                    title={tech.name}
                  >
                    {tech.icon}
                    <span className='hidden sm:inline'>{tech.name}</span>
                  </div>
                ))}
              </div>

              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center text-blue-600 font-medium hover:underline'
              >
                Ver sitio <FaExternalLinkAlt className='ml-2 text-sm' />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
