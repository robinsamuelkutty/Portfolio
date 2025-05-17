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
      end: "Aug 2024",
      
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
      title: "SmartLock",
      href: "https://github.com/joswinemmanuel/SmartLock",
      dates: "Oct 2024 - Nov 2024",
      active: true,
      description:
        "SmartLock is an Arduino-based RFID access control system with GPS location tracking, providing secure authentication through RFID cards and real-time validation via a server.",
      technologies: [
        "Arduino",
        "C++",
        "AT Commands",
        "HTML",
        "CSS",
        "Python",
        "Flask",
        "jQuery",
        "SQLite",
        "Shadcn UI",
        "ThinkSpeak",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/SmartLock",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/SmartLockDemo.mp4",
    },
    {
      title: "GitHub Repo Filter",
      href: "https://github-repo-filter.onrender.com",
      dates: "Sep 2023 - Nov 2023",
      active: true,
      description:
        "A GitHub Repository Filter web app built using the Flask framework in Python. It allows users to filter the most starred GitHub repositories by programming language and navigate directly to the repository via a link button.",
      technologies: [
        "Python",
        "Flask",
        "Javascript",
        "HTML",
        "CSS",
        "Github API",
      ],
      links: [
        {
          type: "Website",
          href: "https://github-repo-filter.onrender.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/Github-Repo-Filter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/GitHubRepoFilter.mp4",
    },
    {
      title: "Python Quiz App",
      href: "https://joswinemmanuel.github.io/Python-Quiz-App/",
      dates: "Mar 2023 - May 2023",
      active: true,
      description:
        "Python Quiz App, built with Flutter, offers an interactive and responsive platform to test Python knowledge, featuring engaging quizzes and a user-friendly design for an enjoyable learning experience.",
      technologies: [
        "Dart",
        "Flutter",
        "Android Studio",
        "Visual Studio Code",
        "App Development",
      ],
      links: [
        {
          type: "Website",
          href: "https://joswinemmanuel.github.io/Python-Quiz-App/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/Python-Quiz-App-Code",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "PythonQuizApp.mp4",
    },
    {
      title: "Connect Four",
      href: "https://joswinemmanuel.github.io/Connect-Four-jQuery/",
      dates: "Feb 2023",
      active: true,
      description:
        "The classic two-player game of Connect Four, where players compete to connect four dots in a straight line horizontally, vertically, or diagonally to win. Provided a responsive, interactive interface for an engaging experience.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "jQuery",
      ],
      links: [
        {
          type: "Website",
          href: "https://joswinemmanuel.github.io/Connect-Four-jQuery/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/Python-Quiz-App-Code",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "ConnectFour.mp4",
    },
    {
      title: "Image Target",
      href: "https://github.com/joswinemmanuel/Unity/tree/main/Image_Target",
      dates: "Jun 2022",
      active: true,
      description:
        "Image Target is a project built using Unity and the Vuforia Engine. It detects and tracks images by comparing natural features from the camera feed with a target database. Once the target is identified, an AR object is projected.",
      technologies: [
        "C#",
        "Unity",
        "Vuforia Engine",
        "Augmented Reality",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/Unity/tree/main/Image_Target",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "ImageTargeting.mp4",
    },
  ],

  achievements: [
    {
      title: "Smart India Hackathon prelims",
      href: "https://www.linkedin.com/posts/joswinemmanuel_python-renpy-unity-activity-7242463172366909440-wpiQ?utm_source=share&utm_medium=member_desktop",
      dates: "1st Place",
      active: true,
      description:
        "A visual novel game designed to educate the next generation on the importance of water conservation and the different water conservation techniques in a creative and interactive storytelling approach.",
      technologies: [
        "Python",
        "Ren'Py",
        "Game Development",
        "Visual Novel",
        "Audacity",
        "Photoshop",
      ],
      links: [
        {
          type: "Post",
          href: "https://www.linkedin.com/posts/joswinemmanuel_python-renpy-unity-activity-7242463172366909440-wpiQ?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/AquaQuest",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sih2.jpg",
      video: "",
    },

    {
      title: "Internship at CareStack",
      href: "https://carestack.com/",
      dates: "Product Engineer",
      active: true,
      description:
        "Selected as one of nine interns from over a thousand plus applicants after rigorous interview rounds, this internship was a transformative experience. It provided me with valuable insights into corporate life and equipped me with essential skills to thrive as a software developer, shaping both my technical and professional growth.",
      technologies: [
        "C#",
        ".NET",
        "Angular",
        "Azure",
        "SQL Server",
      ],
      links: [
        {
          type: "Post",
          href: "https://www.linkedin.com/posts/joswinemmanuel_my-internship-at-carestack-as-a-product-engineer-activity-7236327040981819394-iHuf?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/carestack_team.jpg",
      video: "",
    },
    {
      title: "Kaleidoscope IT Talks",
      href: "https://youtu.be/p1e2ErwWjoQ?si=oxE9TsoVrW4gd9dU",
      dates: "Best Performer",
      active: true,
      description:
        "I delivered a talk at Kaleidoscope IT Talks, organized by the Computer Society of India (CSI), earning the Best Performer title. I simplified AR, VR, MR and XR concepts, showcasing how these technologies open doors to new realities beyond the physical world.",
      technologies: [
        "C#",
        "Unity",
        "Vuforia",
        "VR",
        "AR",
        "MR",
        "XR",
        "Game Development",
        "Image Targeting",
      ],
      links: [
        {
          type: "Post",
          href: "https://www.linkedin.com/posts/joswinemmanuel_unity-vuforia-extendedreality-activity-6987336555820445696-ngE_?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
        {
          type: "Youtube",
          href: "https://youtu.be/p1e2ErwWjoQ?si=oxE9TsoVrW4gd9dU",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/Unity",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/XR.jpg",
      video: "",
    },
    {
      title: "Programming, DSA using Python, IIT Madras, NPTEL",
      href: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS70S2397032709014737",
      dates: "Topper",
      active: true,
      description:
        "I ranked in the Top 5% in Programming, Data Structures and Algorithms with Python, gaining deep knowledge of Python and its application in solving DSA problems effectively.",
      technologies: [
        "Python",
        "Programming",
        "Data Structures and Algorithms",
        "Problem Solving",
      ],
      links: [
        {
          type: "Post",
          href: "https://www.linkedin.com/posts/joswinemmanuel_iitmadras-python-dsa-activity-6986696330987393024-lO9i?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/joswinemmanuel/NPTEL-DSA-Python",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/NPTEL.jpg",
      video: "",
    },
    {
      title: "Python 101",
      href: "https://www.linkedin.com/posts/joswinemmanuel_python-activity-6947903018084220928-z7mw?utm_source=share&utm_medium=member_desktop",
      dates: "1st Place",
      active: true,
      description:
        "I won my first competition, Python 101, early in my college journey. It included a three-day workshop followed by a live coding and debugging competition, where I showcased my Python skills and emerged victorious.",
      technologies: [
        "Python",
        "Programming",
        "Data Structures and Algorithms",
        "Problem Solving",
      ],
      links: [
        {
          type: "Post",
          href: "https://www.linkedin.com/posts/joswinemmanuel_python-activity-6947903018084220928-z7mw?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/Python101.jpg",
      video: "",
    },
    {
      title: "ForkIt",
      href: "https://www.linkedin.com/posts/joswinemmanuel_forkit-winner-activity-6947903495559593984--ZpA?utm_source=share&utm_medium=member_desktop",
      dates: "Winner",
      active: true,
      description:
        "ForkIt was a GitHub program featuring a two-day workshop that provided in-depth knowledge of Git and GitHub. The program concluded with a competition where participants have to forke the main repository and make valuable contributions",
      technologies: [
        "GitHub",
        "Git",
        "Open Source Contribution",
        "Programming",
        "Development",
      ],
      links: [
        {
          type: "Post",
          href: "https://www.linkedin.com/posts/joswinemmanuel_forkit-winner-activity-6947903495559593984--ZpA?utm_source=share&utm_medium=member_desktop",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
      image: "/forkit.jpg",
      video: "",
    },
  ],
} as const;
