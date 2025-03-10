"use client";

export const texts = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "Web Developer",
];

export const skills = {
  Language: ["Javascript", "Typescript", "Python", "Go"],
  Frontend: ["React", "NextJS", "Remix", "Flutter"],
  Backend: ["ExpressJS", "gRPC", "Protobuf"],
  Other: ["Kafka", "Odoo", "AWS", "Docker", "Gitlab CI/CD"],
};

export const showcases = [
  {
    link: "https://61130061.github.io/ascom-web/",
    title: "ASCOM Laboratory",
    description:
      "Develop prototype versions of laboratory website for university using ThreeJS, React, and Docusaurus.",
    image: process.env.NEXT_PUBLIC_PAGES_BASE_PATH + "/ascom-showcase.gif",
  },
  {
    link: "https://61130061.github.io/3stap/",
    title: "3STAP",
    description:
      "Realtime 3d Satellite's Trajectory and Position Tracking web application built by ReactJS and ThreeJS",
    image: process.env.NEXT_PUBLIC_PAGES_BASE_PATH + "/3stap-showcase.gif",
  },
  {
    link: "https://61130061.github.io/llam4u-terminal/",
    title: "Terminal Portfolio",
    description:
      "Realistic terminal React portfolio website with standard shell command onboard.",
    image: process.env.NEXT_PUBLIC_PAGES_BASE_PATH + "/terminal-showcase.gif",
  },
  {
    link: "https://61130061.github.io/HTMLCrack/",
    title: "HTML Crack",
    description:
      "React web app that can help your visualize HTML code as tree chart.",
    image: process.env.NEXT_PUBLIC_PAGES_BASE_PATH + "/html-crack-showcase.gif",
  },
];

export const contributions = [
  {
    owner: "tinacms",
    repo: "tinacms",
    content: [
      "Fix list items overflow outside text editor",
      "Improve the indent of list item style",
    ],
    tags: ["fix bug"],
  },
  {
    owner: "carbon-design-system",
    repo: "carbon",
    content: ["Redesign and update new pattern of pagenation bar"],
    tags: ["code", "design"],
  },
];

export const footer = {
  text: "Powered by LLAM4U",
  links: [
    {
      name: "Terminal",
      url: "https://61130061.github.io/llam4u-terminal/",
    },
    {
      name: "GitHub",
      url: "https://github.com/61130061",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/h-warunyu",
    },
    {
      name: "Contact me",
      url: "mailto:h.warunyu@gmail.com",
    },
  ],
};

export const projects = [
  {
    owner: "61130061",
    repo: "NERDTree",
  },
  {
    owner: "61130061",
    repo: "DockBar",
  },
  {
    owner: "61130061",
    repo: "Tailbook",
  },
  {
    owner: "61130061",
    repo: "react-emoji-selectors",
  },
  {
    owner: "61130061",
    repo: "dora",
  },
];

export const timeline = [
  {
    date: "May 2023 - Present",
    title: "Software Engineer",
    company: "Toyota Tsusho Mobility Informatics (Thailand) Co., Ltd.",
    list: [
      "Developed an Interactive Platform using micro-services for scalable with gRPC and Kafka.",
      "Full-stack development with Typescript, Go and Python on the backend and React on the frontend, delivering seamless user experiences.",
      "Designed a Python starter micro-service template to standardize and accelerate service development.",
      "Migrated a Proof of Delivery mobile app from Ionic to Flutter, enhancing UI/UX and performance, and deployed to App Store and Play Store.",
      "Built a fleet management web application using React, Express, AWS Lambda, and DynamoDB, with real-time GPS data.",
      "Refactored applications by migrating MySQL database versions to reduce costs and implemented CI/CD pipelines with tests for AWS Lambda functions.",
      "Developed a customer and supplier registration web app within the Odoo framework, integrating with existing ERP systems.",
    ],
  },
  {
    date: "Jan 2022 - Dec 2023",
    title: "Software Engineer",
    company: "ASCOM Lab [freelance]",
    list: [
      "Developed and trained a vision-based AI Pose Estimation model for spacecraft using Tensorflow, CNN, and ResNet.",
      "Utilized Unreal Engine to generate synthetic datasets, overcoming data scarcity challenges.",
      "Created a prototype AI spacecraft pose estimation web app using NextJS, Python Lambda on Vercel, and Supabase.",
      "Built a 3D globe satellite monitoring web app with React, integrating open-source satellite data APIs.",
    ],
  },
];
