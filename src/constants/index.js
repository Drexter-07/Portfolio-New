import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    documind,
    aifitness,
    tripguide,
    threejs,
    accenture,
    qna,
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: " Gen AI Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Technical Content Writer",
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
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Cloud Training Intern",
      company_name: "Future Ready Talent (Microsoft)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Sep 2021 - Jan 2022",
      points: [
        "Exploring diverse Azure technologies, including:",
        "Azure Bot Service, Web App Bot, QnA Maker, API App Services",
        "Created a Disease Chat Assistant Bot",
        "Organized and integrated Data-sets into a Knowledge Base for QnA Maker training.",
        "Crafted and executed HTTP Requests via Postman",
        "Seamless Deployment of the Chatbot on Telegram using Botfather",
        "Ensured continuous and effective ChatBot operation",
      ],
    },
    {
      title: "SDE Intern",
      company_name: "High Radius",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - April 2022",
      points: [
        "Engineered an AI-powered B2B invoice management solution in the fintech sector.",
        "Using Machine Learning models for accurate payment date prediction upon invoice creation.",
        "Facilitated seamless payment retrieval from clients with overdue invoices.",
        "Orchestrated proactive reminders and follow-ups to ensure timely payments.",
        "Tools Used: Machine Learning, ReactJS, HTML, CSS, JDBC, Java, and Servlets",
      ],
    },
    {
      title: "Application Development Intern",
      company_name: "Futurus",
      icon: shopify,
      iconBg: "#383E56",
      date: "May 2022 - July 2023",
      points: [
        "Played a pivotal role in constructing an innovative interview app that harnessed cutting-edge technologies, including ChatGPT models tailored for IELTS and other significant exams.",
        "Spearheaded the creation of the speech-to-text functionality, enhancing user experience and accessibility.",
        "Integral contribution to seamlessly integrating GPT into the interview bot, amplifying user engagement and interaction.",
        "Utilized an arsenal of tools encompassing Android Studio, Kotlin, and OpenAI's ChatGPT and API.",
      ],
    },
    {
      title: "AI Training Freelancer",
      company_name: "Scale AI",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "June 2023 - Jan 2024",
      points: [
        "Orchestrated comprehensive AI training by formulating intricate problem-solving methodologies and offering elucidative solutions and coding problem editorials.",
        "Diligently reviewed and optimized existing code, elevating its quality and efficiency.",
        "Nurtured AI bot's capabilities by fine-tuning its responses, offering diverse sample prompts, and meticulously crafting solutions across an array of computer science domains.",
        "Contributed to fostering a more proficient and knowledgeable AI model through hands-on training and refining its interactive capabilities.",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Accenture",
      icon: accenture, 
      iconBg: "#1e293b", 
      date: "April 2024 - November 2025", 
      points: [
        "Engineered and optimized Python automation scripts to streamline ETL pipelines, facilitating data synchronization across distributed systems (Workday, Alight, Lincoln).",
        "Developed complex SQL queries and transformation logic within the automation framework (UAC) to improve data accuracy and reduce manual intervention.",
        "Resolved critical system bottlenecks and data anomalies by implementing code-level fixes and performance tuning, significantly improving application stability.",
        "Collaborated in Agile sprints (JIRA) to deliver backend feature enhancements and bug fixes, focusing on pipeline efficiency and scalable data architecture.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Winner (2nd Position) at HACKMOREISH (devfolio) 2022 Hackathon. A National Level Hackathon in India",
      name: "Devfolio",
      
      company: "Hackathon Platform and Community",
      image: "https://media.licdn.com/dms/image/C510BAQGV8mUXTdtlYA/company-logo_200_200/0/1545112612695?e=1699488000&v=beta&t=qleSpj-O84VU9UNEQReFE19MlqobY7vRF8Gj9SCeqPg",
    },
    {
      testimonial:
        "Runner up in IPFS/Filecoin category at the Gitcoin L2 Rollathon 2022 hackathon, competing with teams and professionals across the world.",
      name: "Gitcoin",
      
      company: "Incentivizing Open Innovation",
      image: "https://cryptologos.cc/logos/gitcoin-gtc-logo.png?v=026",
    },
    {
      testimonial:
        "Successfully Completed #30daysofgooglecloud challenge, consisting of various quests and tasks competition.",
      name: "GCP",
      
      company: "Cloud Infrastructure Services",
      image: "https://media.licdn.com/dms/image/C560BAQFIFLR7jxm2lg/company-logo_200_200/0/1600274556510?e=1699488000&v=beta&t=jEVtb3fXicv9lT9ZeRAuPKW9_rN8QrKchAuQJ9wTep4",
    },
    {
      testimonial:
        "Successfully Achieved a Micro Grant of $5000 for our Blockchain Project: SkillBlock from Protocol Labs.",
      name: "Protocol Labs",
      
      company: "Decentralized storage solutions",
      image: "https://media.licdn.com/dms/image/C4D0BAQH2qS_5e-9HPA/company-logo_200_200/0/1590695202006?e=1699488000&v=beta&t=Jv8Yop4nsK1o4fkViJomDvbP_vnGVJwm065frCJZDmE",
    },
    {
      testimonial:
        "Received accolades and prizes from renowned companies such as Devpost, Chainlink Labs, and Microsoft Azure, recognizing my consistent dedication to participating in diverse events, hackathons, and online cohorts.",
      
      name: "Devpost",
      
      company: "Hackathons' premier project portal",
      image: "https://img.icons8.com/?size=512&id=38557&format=png",
    },
  ];
  
  const projects = [
    {
      name: "DocumindRAG",
      description:
        "A sleek knowledge base dashboard for the DocuMind RAG system. Features automatic PDF uploading, chunking, and embedding to manage the documents the AI utilizes for generating accurate context.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "gen ai",
          color: "pink-text-gradient",
        },
      ],
      image: documind,
      source_code_link: "https://github.com/Drexter-07/DocumindRAG",
    },
    {
      name: "AI Fitness Tracker",
      description:
        "A vibrant health and wellness dashboard that tracks sleep patterns, daily steps, calories, and workouts. It provides AI-powered, personalized insights and weight-adjusted progress calculations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "artificial intelligence",
          color: "pink-text-gradient",
        },
      ],
      image: aifitness,
      source_code_link: "https://github.com/Drexter-07/AI-Fitness-Tracker",
    },
    {
      name: "Private RAG Assistant",
      description:
        "A private Retrieval-Augmented Generation (RAG) assistant that allows users to upload documents and ask questions grounded in their personal knowledge base.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind sql",
          color: "green-text-gradient",
        },
        {
          name: "langchain",
          color: "pink-text-gradient",
        },
      ],
      image: qna,
      source_code_link: "https://github.com/Drexter-07/-Private-Knowledge-Q-A-RAG-",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };