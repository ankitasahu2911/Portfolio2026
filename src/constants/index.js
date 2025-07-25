import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate front-end developer with a flair for creating seamless and interactive user experiences. With hands-on experience in technologies like React, Vite, and Node.js, I’ve contributed to impactful projects like technical fest websites and social good platforms. I thrive on building user-centric applications and constantly seek opportunities to grow and apply my skills in innovative ways.`;

export const ABOUT_TEXT = `I'm Ankita Sahu, a third-year Computer Science Engineering student with a keen interest in frontend development and data analytics. My journey began with a love for crafting clean, responsive, and engaging web applications using tools like React and Node.js. I've had the opportunity to work on projects like Perception, my university's technical fest website, and a Zero Hunger initiative that involved real-time donation tracking.

Beyond the tech world, I enjoy expressing my creativity through poetry and storytelling, often performing at open mics. Whether I’m solving complex problems or writing verses, I strive to make an impact. I’m always eager to collaborate, learn, and contribute to meaningful projects. Let’s connect and create something remarkable!`;


export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "AllyNet - Student-Alumni Portal",
    image: project1,
    description:
      "A MERN stack-based web portal to connect students and alumni, featuring real-time event updates, club information, alumni interaction, and selection results to foster a strong campus network.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Zero Hunger Platform ",
    image: project2,
    description:
      "A frontend React application developed during IBM's virtual internship, focusing on the Zero Hunger mission. It includes a chatbot, food quality interface, and donation flow UI to streamline food distribution.",
    technologies: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
  title: "Vintage PhotoBooth App",
  image: project3,
  description:
    "A retro-themed PhotoBooth web app with live camera access, real-time filters, and photo strip generation. Built for capturing and saving moments with a nostalgic touch.",
  technologies: ["React", "WebRTC", "HTML5 Canvas", "CSS"],
  link:"https://photo-booth-rosy.vercel.app/"
}

];


export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "ankitasahu.200129@gmail.com",
};
