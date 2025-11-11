import { Github, Linkedin, Mail } from 'lucide-react';
import {
  IconReact,
  IconNodeJs,
  IconMongoDB,
  IconTailwind,
  IconPython,
  IconNextJs,
  IconFirebase,
  IconGit,
  IconExpress,
  IconStreamlit,
  IconPostman,
  IconVSCode
} from '@/components/icons';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export const SOCIALS = [
    { name: 'GitHub', url: 'https://github.com', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in', icon: Linkedin },
    { name: 'Email', url: 'mailto:your.email@example.com', icon: Mail },
];

export const PROJECTS = [
  {
    slug: 'task-manager-app',
    title: 'Task Manager App',
    summary: 'A full-stack MERN application for managing daily tasks with user authentication and CRUD functionality.',
    imagePlaceholderId: 'project-task-manager',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveDemoUrl: '#',
    githubUrl: '#',
    problem: 'Users need a simple and intuitive way to track their daily tasks, organize their to-do lists, and manage their productivity online.',
    features: [
      'Secure user registration and login with JWT.',
      'Create, read, update, and delete tasks.',
      'Filter tasks by status (pending, completed).',
      'Responsive design for seamless use on any device.',
    ],
    learnings: 'This project was a deep dive into the MERN stack. I learned how to build a RESTful API with Node.js and Express, manage data with MongoDB, and implement secure token-based authentication. On the frontend, I honed my React skills by managing component state and interacting with a backend service.'
  },
  {
    slug: 'weather-forecast-dashboard',
    title: 'Weather Forecast Dashboard',
    summary: 'A React-based dashboard that provides real-time weather forecasts using a third-party weather API.',
    imagePlaceholderId: 'project-weather-dashboard',
    techStack: ['React', 'Tailwind CSS', 'Weather API'],
    liveDemoUrl: '#',
    githubUrl: '#',
    problem: 'Accessing quick and accurate weather information often requires navigating complex websites. This project aimed to create a clean, single-page interface for immediate weather data.',
    features: [
      'Search for weather by city name.',
      'Display current temperature, humidity, and wind speed.',
      'Show a 5-day weather forecast.',
      'Dynamic icons that change based on the weather conditions.',
    ],
    learnings: 'The main challenge was integrating a third-party REST API, handling asynchronous data fetching with `useEffect`, and managing API keys securely. I also gained experience in conditional rendering to display different UI elements based on the fetched data.'
  },
  {
    slug: 'movie-recommender-system',
    title: 'Movie Recommender',
    summary: 'A data science project using Python and Streamlit to recommend movies based on user preferences.',
    imagePlaceholderId: 'project-movie-recommender',
    techStack: ['Python', 'Pandas', 'Streamlit'],
    liveDemoUrl: '#',
    githubUrl: '#',
    problem: 'With thousands of movies available, choosing what to watch can be overwhelming. This system helps users discover movies they might like based on collaborative filtering.',
    features: [
      'Select a movie from a dropdown list.',
      'Receive a list of 5 similar movie recommendations.',
      'Displays movie posters for a visually engaging experience.',
      'Built with a content-based filtering algorithm.',
    ],
    learnings: 'This project introduced me to the fundamentals of data science and machine learning. I learned how to process and clean a dataset using Pandas, implement a recommendation algorithm, and build an interactive web interface for a data model using Streamlit.'
  },
  {
    slug: 'personal-portfolio-website',
    title: 'Portfolio Website',
    summary: 'The very website you are browsing now, designed to showcase my skills and projects to potential employers.',
    imagePlaceholderId: 'project-portfolio',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Firebase'],
    liveDemoUrl: '/',
    githubUrl: '#',
    problem: 'As a student applying for internships, I needed a central, professional platform to present my resume, projects, and skills in a clean, recruiter-friendly format.',
    features: [
      'Multi-page layout with smooth routing.',
      'Responsive design for desktop, tablet, and mobile.',
      'Projects gallery with detailed subpages.',
      'Integrated contact form and downloadable resume.',
    ],
    learnings: 'Building my own portfolio taught me the importance of UI/UX design, mobile-first development, and SEO. I leveraged Next.js for its performance benefits and server-side rendering capabilities, and used Tailwind CSS for rapid, maintainable styling.'
  },
];

export type SkillCategory = {
  name: string;
  skills: {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    description: string;
  }[];
};


export const SKILLS: SkillCategory[] = [
    {
        name: "Frontend",
        skills: [
            { name: "React", icon: IconReact, description: "Building dynamic UIs with component-based architecture." },
            { name: "Next.js", icon: IconNextJs, description: "Server-side rendering and static site generation for performance." },
            { name: "Tailwind CSS", icon: IconTailwind, description: "Rapidly building custom designs with utility-first CSS." },
        ],
    },
    {
        name: "Backend",
        skills: [
            { name: "Node.js", icon: IconNodeJs, description: "Running JavaScript on the server for fast and scalable applications." },
            { name: "Express", icon: IconExpress, description: "Creating robust RESTful APIs and web servers." },
            { name: "MongoDB", icon: IconMongoDB, description: "Using NoSQL databases for flexible data storage." },
        ],
    },
    {
        name: "Data Science",
        skills: [
            { name: "Python", icon: IconPython, description: "For data analysis, scripting, and machine learning." },
            { name: "Streamlit", icon: IconStreamlit, description: "Building interactive web apps for data science projects." },
        ],
    },
    {
        name: "Tools",
        skills: [
            { name: "Git", icon: IconGit, description: "Version control and collaborative development." },
            { name: "Firebase", icon: IconFirebase, description: "Hosting web applications and managing backend services." },
            { name: "Postman", icon: IconPostman, description: "Testing and documenting APIs." },
            { name: "VS Code", icon: IconVSCode, description: "My code editor of choice for its power and extensibility." },
        ],
    },
];
