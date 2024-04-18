import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  git,
  figma,
  oec,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "work",
    title: "Travail",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ux Ui creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Stagiaire Dev Web",
    company_name: "OEC Paris IdF",
    icon: oec,
    iconBg: "#E6DEDD",
    date: "Mars 2023 - Avril 2023",
    points: [
      "Maintenance des sites Wordpress.",
      "V2 du site allo-impôt.",
      "Chef de projet pour la V2 de BBUYBYE.",
      "Collaboration avec l'équipe de communication, l'équipe IT et l'équipe Juridique.",
    ],
  },
  {
    title: "Apprentie Dev Web",
    company_name: "OEC Paris Île-de-France",
    icon: oec,
    iconBg: "#383E56",
    date: "Septembre 2023 - Août 2025",
    points: [
      "Maintenance des différents site Wordpress.",
      "Collaborer avec l'équipe IT, Communication et Juridique.",
      "Participation à la V2 de PON principalement en front-end et aussi en back-end.",
      "Faire des feedbacks à mon collègue développeur.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Louaison de voiture",
    description:
    "Plate-forme basée sur le Web qui permet aux utilisateurs de rechercher, de réserver et de gérer des locations de voitures auprès de différents fournisseurs, offrant ainsi une solution pratique et efficace pour les besoins en matière de transport",
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Recherche de travail",
    description:
    "Application web qui permet aux utilisateurs de rechercher des offres d'emploi, de visualiser les fourchettes de salaires estimées pour les postes et de localiser les emplois disponibles en fonction de leur localisation actuelle",
      tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Guide de voyage",
    description:
    "Une plateforme complète de réservation de voyages qui permet aux utilisateurs de réserver des vols, des hôtels et des voitures de location, et qui offre des recommandations sur les destinations les plus populaires",    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
