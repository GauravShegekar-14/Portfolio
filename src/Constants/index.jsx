import {
    FaXTwitter,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaDiscord,
    FaInstagram,
  } from "react-icons/fa6";
  
  import projectImage1 from "../assets/project1.jpeg";
  import projectImage2 from "../assets/project2.jpeg";
  import projectImage3 from "../assets/project3.jpeg";
  import projectImage4 from "../assets/project4.jpeg";
  import projectImage5 from "../assets/project5.jpeg";
  import projectImage6 from "../assets/project6.jpeg";
  
  import { RiReactjsLine } from "react-icons/ri";
  import { TbBrandNextjs } from "react-icons/tb";
  import { SiMongodb } from "react-icons/si";
  import { DiRedis } from "react-icons/di";
  import { FaNodeJs } from "react-icons/fa";
  import { BiLogoPostgresql } from "react-icons/bi";
  import { RiTailwindCssFill } from "react-icons/ri";
  import { SiMysql } from "react-icons/si";


  
  export const NAVIGATION_LINKS = [
    { label: "Projects", href: "#projects" },
    { label: "Bio", href: "#bio" },
    { label: "Skills", href: "#skills" },
    { label: "Work Experience", href: "#work" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];
  
  export const HERO = {
    name: "Gaurav Shegekar",
    greet: "Hello there! 👋🏻",
    description:
      "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web.",
  };
  
  export const PROJECTS = [
    {
      id: 1,
      name: "Personal Portfolio",
      description:
        "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
      image: projectImage1,
      githubLink: "https://github.com/user/personal-portfolio",
    },
    {
      id: 2,
      name: "E-Commerce Platform",
      description:
        "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
      image: projectImage2,
      githubLink: "https://github.com/user/ecommerce-platform",
    },
   
  ];
  
  export const BIO = [
    "Gaurav Shegekar studied computer science at the Nagpur Univercity,from which he will graduated in 2025. Following his education, he is a fresher",
    ];
  
  export const SKILLS = [
    {
      icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
      name: "React",
      experience: "6 month",
    },
    {
      icon: <RiTailwindCssFill 
      className="text-4xl text-white lg:text-5xl" />,
      name: "Tailwind",
      experience: "6 month",
    },
    {
      icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
      name: "MongoDB",
      experience: "6 month ",
    },
    {
      icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
      name: "Node.js",
      experience: "6 month ",
    },
    {
      icon: <SiMysql className="text-4xl text-sky-700 lg:text-5xl" />,
      name: "MySQL",
      experience: "6 month",
    },
  ];
  
  export const EXPERIENCES = [
   
    {
      title: "Intern",
      company: "Digitron software and technology",
      duration: "October 2024 - March 2024",
      description:
        "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. Creating backend using Nodejs and Mongo Db. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
    },
    
  ];
  
  export const EDUCATION = [
    
    {
      degree: "Bachelor Degree in Computer Science and Engineering",
      institution: "Rashtrasant Tukadoji Maharaj Nagpur Univercity, Nagpur",
      duration: "September 2021 - May 2025",
      description:
        "Focused on web development, programming languages, and database management.I have worked on Node js and Mongo DB to create backend."
    },
  ];
  
  export const SOCIAL_MEDIA_LINKS = [
  {
      href: "https://x.com/",
      icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
    },
   {
      href: "https://x.com/",
      icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
    },
   {
      href: "https://x.com/",
      icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
    },
   {
      href: "https://x.com/",
      icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
    },
 {
      href: "https://github.com/",
      icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
    },
  {
      href: "https://www.linkedin.com/",
      icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
    },
  ];