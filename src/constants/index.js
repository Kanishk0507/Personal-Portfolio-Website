import {
  javascript,
  mysql,
  postgresql,
  mssql,
  java,
  springboot,
  flutter,
  firebase,
  liferay,
  azure,
  python,
  c,
  cpp,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ttec,
  bluebox,
  tridhya,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",

  },
  {
    title: "Java Developer",
    
  },

  {
    title: "iOS Developer",
    
  },

  {
    title: "Flutter Developer",
    
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
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring",
    icon: springboot,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Liferay",
    icon: liferay,
  },
  {
    name: "Azure Data Studio",
    icon: azure,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
];


const experiences = [
  {
    title: "Chat & Sales Representative",
    company_name: "TTEC",
    icon: ttec, 
    iconBg: "#E6DEDD",
    date: "April 2024 - July 2024",
    points: [
      "Provided technical and billing support for end users via live chat and voice.",
      "Resolved user issues efficiently, enhancing customer satisfaction.",
      "Collaborated with internal teams to improve support workflows and documentation.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "BlueBox Infosoft Pvt. Ltd.",
    icon: bluebox, 
    iconBg: "#E6DEDD",
    date: "Sept 2023 - March 2024",
    points: [
      "Built and maintained cross-platform mobile applications using Flutter and Dart.",
      "Implemented dynamic UI components and integrated RESTful APIs for real-time data updates.",
      "Optimized app performance and memory usage across Android and iOS devices.",
      "Worked closely with designers and product teams to deliver polished user experiences.",
    ],
  },
  {
    title: "Java Developer Intern",
    company_name: "Tridhya Tech Ltd.",
    icon: tridhya, 
    iconBg: "#E6DEDD",
    date: "Dec 2022 - May 2023",
    points: [
      "Developed backend modules using Java and Spring Boot frameworks.",
      "Integrated MySQL databases and implemented secure RESTful APIs.",
      "Participated in Agile ceremonies and collaborated on daily development tasks.",
      "Performed unit testing and code debugging to ensure robust backend functionality.",
    ],
  },
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
    name: "Personal Portfolio Website",
    description:
      "A modern, responsive, and animated portfolio website built with React, Tailwind CSS, and Framer Motion. It showcases my professional experience, technical skills, and featured projects, with interactive UI elements and smooth transitions. The site includes a fully functional contact form powered by EmailJS",
    source_code_link: "https://github.com/Kanishk0507/Personal-Portfolio-Website",
  },
  {
    name: "Personal Finance Management System",
    description:
      "A full-stack application designed to help users efficiently track and manage their income, expenses, and savings goals. The system allows users to categorize transactions, visualize spending patterns through dynamic charts, and generate monthly financial summaries.",
    source_code_link: "https://github.com/Kanishk0507/Personal-Finance-Management-System",
  },
  {
    name: "Easy Stay - Hotel Management System",
    description:
      "Easy Stay is a hotel service management system designed to streamline hotel operations and enhance guest experiences. The system allows customers to book various services while enabling managers to handle, approve, or reject requests efficiently. Integrations like Google Maps for vehicle location selection and an email notification system for communication improve functionality and user satisfaction.",
    source_code_link: "https://github.com/Kanishk0507/Easy-Stay-Hotel-Management-System",
  },
  {
    name: "Stock Portfolio Anaylser",
    description:
      "An AI-powered iOS application that helps users manage their stock investments with real-time data, intelligent insights, and a clean, responsive interface. Users can track their portfolio, buy and sell stocks, monitor market trends, and receive personalized recommendations based on historical performance and market analysis.",
    source_code_link: "https://github.com/Kanishk0507/Stock-Portfolio-Analyzer",
  },
  {
    name: "ScanMate",
    description:
      "A SwiftUI-based iOS application that enables users to scan, save, organize, and manage documents efficiently. Designed for productivity, ScanMate supports OCR, PDF generation, folder-based organization, and local file storage.",
    source_code_link: "https://github.com/Kanishk0507/ScanMate",
  },
  {
    name: "Chatapp",
    description:
      "A full-featured, cross-platform chat application enabling real-time communication with secure user authentication and responsive UI. Built to deliver a seamless messaging experience with support for media sharing, presence indicators, and message history.",
    source_code_link: "https://github.com/Kanishk0507/chatapp-master",
  },
  {
    name: "Music Player Application",
    description:
      "A music player application developed with Flutter is a versatile and interactive mobile app that allows users to manage, organize, and play their music collection. Leveraging Flutter's capabilities, the app boasts a visually appealing user interface with smooth transitions and animations. Users can browse their music library and view playlist. The app often integrates with audio libraries to fetch and display songs, images and artists. It may offer features like shuffle, repeat. Flutter's flexibility enables seamless cross-platform functionality, allowing the app to operate smoothly on both Android and iOS devices, providing a cohesive and enjoyable music playback experience.",
    source_code_link: "https://github.com/Kanishk0507/flutter_music_player",
  },
  {
    name: "My dictionary",
    description:
      "The powerful and elegant dictionary application built with Flutter! Explore a world of words and language in a beautifully designed, cross-platform app that puts a comprehensive dictionary right at your fingertips.",
    source_code_link: "https://github.com/Kanishk0507/my_dictionary",
  },
  {
    name: "My dictionary",
    description:
      "The powerful and elegant dictionary application built with Flutter! Explore a world of words and language in a beautifully designed, cross-platform app that puts a comprehensive dictionary right at your fingertips.",
    source_code_link: "https://github.com/Kanishk0507/my_dictionary",
  },
  {
    name: "ToDo Application",
    description:
      "A to-do application created with Flutter is a cross-platform mobile app that helps users organize and manage their tasks and activities. It typically features a clean and intuitive user interface, allowing users to create, edit and delete tasks easily. The app includes ability to mark tasks as completed.",
    source_code_link: "https://github.com/Kanishk0507/todo_application",
  },
];

export { services, technologies, experiences, testimonials, projects };
