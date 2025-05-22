import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Robin Samuelkutty",
  initials: "RS",
  url: "https://github.com/robinsamuelkutty",
  location: "Pathanamthitta, Kerala",

  description:
    "Passionate programmer with a strong drive to become a skilled Software Developer. Always eager to learn, build, and make a meaningful impact.",
  summary:
    "I started my journey in computer science through my degree in [Computer Science and Engineering](/#education), where I developed a solid foundation in programming and problem-solving. My passion for development has driven me to [achieve milestones such as winning hackathons and excelling in various competitions](/#achievements). Although I’m still strengthening my [Data Structures and Algorithms](/) skills, my [consistent practice and determination](/) keep me improving every day. In my free time, I channel my creativity into [side projects](/#projects) that fuel my enthusiasm for technology and growth as a developer.",
  avatarUrl: "/Robin.png ",
  skills: [
    "Python",
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "ReactJS",
    "Node.js",
    "MySQL",
    "MongoDB",
    "PHP",
    "Docker",
    "C",
    "C++",
    "Java",
    "Spring Boot",
    "Git",
    "GitHub",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "robinsamuelkutty77@gmail.com",
    tel: "+91 8157047903",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/robinsamuelkutty",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/robinsamuelkutty/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/RobinSamuel2004",
        icon: Icons.x,

        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:robinsamuelkutty77@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "IEEE SB CE Poonjar",
      badges: [],
      href: "https://ieee.cep.ac.in/",
      location: "Remote",
      title: "Web Master",
      logoUrl: "/ieee.png",
      start: "Jan 2024",
      end: "Present ",
      
    },
    {
      company: "College of Engineering, Poonjar",
      badges: [],
      href: "https://cep.ac.in/",
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/cep.png",
      start: "Jun 2024",
      end: "Present",
      
    },
    
  ],
  education: [
    {
      school: "College of Engineering and Technology, Poonjar",
      href: "https://cep.ac.in/",
      degree: "Bachelor of Technology in Computer Science Engineering",
      logoUrl: "/cep.png",
      start: "2022",
      end: "2026",
    },
  
  
    {
      school: "Govt. HSS, Konni",
      degree: "Secondary School, Computer Science - Grade: 95%",
      logoUrl: "/govtkonni.png",
      start: "2020",
      end: "2022",
    },
  
  ],
  projects: [
    {
      title: "Bello",
      href: "https://bello-ob8m.onrender.com",
      dates: "Jan 2025 - March 2025",
      active: true,
      description:
        "Bello is a real-time messaging and video conferencing platform that combines seamless messaging, high-quality video conferencing, and productivity-enhancing tools. It includes AI-powered features such as MultiLanguage translation, message summarization, text-to-speech, and AI-Personal Assistant And BlockChain-IPFS Message Backup and Restore.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "ZegoCloud SDK",
        "Pinata",
        "Ganache",
        "Solidity",
      ],
      links: [
        {
          type: "Website",
          href: "https://bello-ob8m.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/robinsamuelkutty/Bello",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Bello.png",
      
    },
    {
      title: "Rasengana",
      href: "https://github.com/robinsamuelkutty/Rasengana",
      dates: "Jan 2025 - Feb 2025",
      active: true,
      description:
        "Rasengana is a user-interactive ASL (American Sign Language) learning platform designed for children who are challenged, mute, or beginners in ASL. It helps users learn ASL alphabets by analyzing their gestures using AI and providing real-time feedback. To enhance proficiency, Rasangane also includes interactive games.",
      technologies: [
        "Typescript",
        "React",
        "FastAPI",
        "YOLOv8",
        "AWS Sagemaker",
        "Python",
      ],
      links: [
       
        {
          type: "Source",
          href: "https://github.com/robinsamuelkutty/Rasengana",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Rasengana.png",
      
    },
    {
      title: "UnityMeet",
      href: "https://unitymeet.vercel.app/",
      dates: "Dec 2024 -  Present",
      active: true,
      description:
        "UnityMeet is a modern video conferencing and collaboration platform designed for seamless real-time communication. It offers features like high-quality video calls, instant messaging, screen sharing, and secure meeting rooms—all within a user-friendly interface. Built to enhance virtual interactions, UnityMeet focuses on performance, reliability, and a smooth user experience.",
      technologies: [
        "NextJS",
        "Typescript",
        "Stream SDK",
        "Clerk",
        "Tailwind CSS",
    
      ],
      links: [
        {
          type: "Website",
          href: "https://unitymeet.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/robinsamuelkutty/unitymeet",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/unitymeet.png",
    },
    {
      title: "ECap CEPoonjar",
      href: "https://github.com/robinsamuelkutty/CollegeAdmManage",
      dates: "Jun 2024 - Aug 2024",
      active: true,
      description:
        "Developed a comprehensive College Administration System for my institution using the MERN stack (MongoDB, Express.js, React, Node.js). This system streamlines administrative, academic, and student-related tasks through separate modules for faculty, students, and administrators, ensuring seamless operation across all roles.",
      technologies: [
        "MongoDB",
        "Express.js",
        "ReactJS",
        "NodeJS",
      
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/robinsamuelkutty/CollegeAdmManage",
          icon: <Icons.github className="size-3" />,
        },
      ], 
      image: "/ecap.png",

    },
    {
      title: "React Netflix Clone",
      href: "netflix-clone-cyan-eta.vercel.app",
      dates: "Jun 2023 - Jul 2023",
      active: true,
      description:
        "This is a Netflix-inspired web application built using React.js as my first React project, created for learning and practicing modern frontend development. The clone replicates the basic layout and functionality of Netflix",
      technologies: [
       "ReactJs",
       "CSS",
        "HTML",
        "Firebase",
        "TMDB API",
      ],
      links: [
        {
          type: "Website",
          href: "netflix-clone-cyan-eta.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/robinsamuelkutty/netflix_clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/netflix.png",
      
    },
    {
      title: "React Olx Clone",
      href: "https://github.com/robinsamuelkutty/Olx-clone--React",
      dates: "Jul 2023 - Aug 2023",
      active: true,
      description:
        "This is a clone of the popular online marketplace OLX, built using React.js as part of my hands-on learning journey in frontend development.",
      technologies: [
        "ReactJs",
        "CSS",
        "HTML",
        "Firebase",
      ],
      links: [
        
        {
          type: "Source",
          href: "https://github.com/robinsamuelkutty/Olx-clone--React",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/olx.png",

    },
    
  ],

  achievements: [
    {
      title: "IHRD THARANG 2025 Project Expo",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7299475433371115520/",
      dates: "1st Runner Up",
      active: true,
      description:
        "Our project, Rasengana, is an AI-powered, user-interactive ASL (American Sign Language) learning platform designed to help children who are challenged, mute, or beginners in ASL. Rasengana enhances learning by recognizing gestures using YOLO-based AI models, providing real-time feedback, and incorporating interactive games to make the experience more engaging.",
      technologies: [
        "Typescript",
        "React",
        "FastAPI",
        "YOLOv8",
        "AWS Sagemaker",
        "Python",
      ],
      links: [
        {
          type: "Post",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7299475433371115520/",
          icon: <Icons.linkedin className="size-3" />,
        },
       
      ],
      image: "/tharang.png",
      video: "",
    },

    {
      title: "Gen AI Hackathon - PromptCraft",
      href: "https://www.linkedin.com/feed/update/urn:li:activity:7307788096094253056/",
      dates: "2nd Place",
      active: true,
      description:
        "My team and I are proud to have secured 2nd place in the Gen AI Hackathon – Intra College - PromptCraft! With over 60 participants, this 8-hour coding marathon pushed us to innovate, collaborate, and bring AI-driven solutions to life Our project, AI-Driven Smart Wardrobe Stylist, is a cutting-edge fashion assistant that:Recommends outfits based on weather, personal style",
      technologies: [
        "MongoDB",
        "Express.js",
        "ReactJS",
        "NodeJS",
        "Tailwind CSS",
        "OpenAI API",
        "WeatherAPI",
      ],
      links: [
        {
          type: "Post",
          href: "https://www.linkedin.com/feed/update/urn:li:activity:7307788096094253056/",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/hackthon.png",
      video: "",
    },
    
  ],
} as const;
