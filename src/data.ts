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
    image: process.env.PAGES_BASE_PATH + "/ascom-showcase.gif",
  },
  {
    link: "https://61130061.github.io/3stap/",
    title: "3STAP",
    description:
      "Realtime 3d Satellite's Trajectory and Position Tracking web application built by ReactJS and ThreeJS",
    image: process.env.PAGES_BASE_PATH + "/3stap-showcase.gif",
  },
  {
    link: "https://61130061.github.io/llam4u-terminal/",
    title: "Terminal Portfolio",
    description:
      "Realistic terminal React portfolio website with standard shell command onboard.",
    image: process.env.PAGES_BASE_PATH + "/terminal-showcase.gif",
  },
  {
    link: "https://61130061.github.io/HTMLCrack/",
    title: "HTML Crack",
    description:
      "React web app that can help your visualize HTML code as tree chart.",
    image: process.env.PAGES_BASE_PATH + "/html-crack-showcase.gif",
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
