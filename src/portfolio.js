/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import lightLoader from "./assets/lottie/lightLoader"; // Rename to your file name for custom animation
import darkLoader from "./assets/lottie/darkLoader"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: {dark: darkLoader, light: lightLoader},
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Denys Nazarenko",
  title: "Hi all, I'm Denys",
  subTitle: emoji(
    "Full Stack Software Developer with 3+ years of experience in development of complex web services. Successfully applied solid knowledge of programming fundamentals and data structures to real-world projects on daily basis to achieve the highest quality of delivered product."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/den4yk76",
  linkedin: "https://www.linkedin.com/in/den4yk76/",
  gmail: "denysnazarenkoca@gmail.com",
  facebook: "https://www.facebook.com/den4yk76",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My expertise",
  subTitle: "",
  // subTitle: "Technologies I'm professional in",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications."
    ),
    emoji(
      "⚡ Crafting high-performance front-end experiences with expertise in JavaScript, TypeScript, React, Redux, Firebase/MongoDB and various other technologies, to optimize user engagement."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "National Technical University of Ukraine 'Igor Sikorsky Kyiv Polytechnic Institute'",
      logo: require("./assets/images/kpi.jpeg"),
      subHeader: "Master of Automation and Computer-Integrated Technologies",
      duration: "September 2019 - January 2024",
      desc: "",
      descBullets: [
        "Applying theoretical knowledge to real-world scenarios, gaining hands-on experience through practical projects and industry collaborations.",
        "Embracing a holistic approach, studied a diverse array of subjects, fostering a well-rounded understanding of mathematical, physical, and computational principles.",
        "Proficient in seamlessly integrating theoretical insights from physics, mathematics, and programming to deliver innovative and practical solutions to real-world challenges."
      ]
    },
    {
      schoolName: "IT School GoIT",
      logo: require("./assets/images/goit.jpeg"),
      subHeader: "Full Stack Development Program",
      duration: "February 2021 - February 2022",
      desc: "",
      descBullets: [
        "Proficient in Agile and Scrum methodologies, I adeptly guide teams through iterative cycles, ensuring dynamic project adaptation and maintaining clear communication channels for successful delivery.",
        "Evidenced by the successful execution of diverse web applications, I adeptly applied my skills in JavaScript, React, and NodeJS to real-world projects."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Full Stack Developer",
      company: "Smart Moose Canada Inc.",
      companylogo: require("./assets/images/smartmooseLogo.png"),
      date: "Jun 2024 – Present",
      desc: "",
      descBullets: [
        "Own the technical direction and architecture of SubSweeper (frontend, backend, AI pipeline, and platform concerns).",
        "Built the initial TypeScript full-stack foundation for SubSweeper: React frontend, Node/Express backend, and MongoDB/Redis.",
        "Implemented Google OAuth 2.0 and Gmail API integration to ingest and process inbox data safely.",
        "Developed core UI flows (onboarding, dashboards, subscription views) using React and Redux Toolkit.",
        "Implemented secure auth/token handling, API structure, and a production-ready middleware/security baseline.",
        "Designed and shipped a multi-stage email classification workflow using Azure OpenAI, optimized for accuracy and reduced repeated work through caching/pattern reuse.",
        "Built real-time scan progress updates using WebSockets/Socket.IO, with background processing via BullMQ and Redis.",
        "Improved reliability and throughput with token-aware batching, rate limiting, retries/backoff, and safe incremental processing.",
        "Delivered product features end-to-end: permissions handling, onboarding flows, subscription management, and operational tooling.",
        "Set up delivery workflows and deployment practices to support frequent releases.",
        "Tech: TypeScript, React, Redux Toolkit, Node.js/Express, MongoDB, Redis, Azure OpenAI, BullMQ, Socket.IO, Google OAuth, Gmail API, CI/CD, Microsoft Azure Cloud Services."
      ]
    },
    {
      role: "Software Developer",
      company: "SE Ukrmetrteststandart",
      companylogo: require("./assets/images/ukrmetrLogo.jpeg"),
      date: "Nov 2020 – Sep 2022",
      desc: "",
      descBullets: [
        "Built WordPress-based websites from scratch, contributing to ~10% higher user engagement and a ~15% increase in site traffic.",
        "Automated data backup processes for servers and Windows-based computers, achieving ~80% automation and reducing operational risk.",
        "Improved production stability by fixing critical bugs and supporting ~99% uptime for a production system.",
        "Tech: JavaScript, PHP, MySQL, WordPress, HTML/CSS, Bash."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  // subtitle:
  //   "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "IT School GoIT Certificate",
      title2: "Full Stack Development Program",
      subtitle:
        "Graduate of the 1 year FullStack Developer program at the GoIT School of Programming.",
      image: require("./assets/images/goit.jpeg"),
      imageAlt: "GoIT Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/11F6OZ6d_vD9op8kqXEwE5cCQgRcPFjNi/view?usp=sharing"
        },
        {
          name: "Final Project",
          url: "https://d76-kapusta.netlify.app/"
        }
      ]
    },
    {
      title: "Johns Hopkins University Certificate",
      title2: "HTML, CSS, and Javascript for Web Developers Course",
      subtitle:
        "Completed the Web Development course certified by Johns Hopkins University on Coursera with GPA 99.",
      image: require("./assets/images/jhuLogo.jpeg"),
      imageAlt: "Johns Hopcins University Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/W6BMTU9BSZCQ"
        },
        {
          name: "Final Project",
          url: "https://den4yk76.github.io/Module5-Solution/"
        }
      ]
    },

    {
      title: "Google Certificate",
      title2: "Crash Course on Python",
      subtitle:
        "Completed Python Development course certified by Google on Coursera with GPA 91.",
      image: require("./assets/images/googleLogo.jpeg"),
      imageAlt: "Google Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/RAAEY3GR6YU5"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "",

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1(647)-988-8103",
  email_address: "denysnazarenkoca@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
