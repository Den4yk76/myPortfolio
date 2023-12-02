/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
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
  resumeLink:
    "https://drive.google.com/file/d/1FpgbaEnU8qb440gZL-948qQFUDOj341N/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/den4yk76",
  linkedin: "https://www.linkedin.com/in/den4yk76/",
  gmail: "denysnazarenko23@gmail.com",
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
      "⚡ Crafting high-performance front-end experiences with expertise in JavaScript, TypeScript, React, Redux, and Firebase/MongoDB to optimize user engagement."
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
      role: "Full Stack Software Developer",
      company: "Benchmark Automotive Group Inc",
      companylogo: require("./assets/images/benchmarkLogo2.png"),
      date: "November 2022 – Present",
      desc: "",
      descBullets: [
        "Resolved a critical bug in a website's online financing application [Javascript, Wordpress], preventing a loss of CAD$25,000/month in sales.",
        "Collaborated with the marketing team to develop and execute a successful social media campaign, boosting brand visibility and engagement.",
        "Actively crafting a website with React, employing a component-based structure, and integrating cutting-edge libraries such as Redux for state management."
      ]
    },
    {
      role: "Software Developer",
      company: "SE Ukrmetrteststandart",
      companylogo: require("./assets/images/ukrmetrLogo.jpeg"),
      date: "Nov 2020 – Sept 2022",
      desc: "",
      descBullets: [
        "Constructed a WordPress-based website from the ground up, while addressing front-end bugs [Javascript, HTML, CSS] across the company's websites. Contributed to a ~10% uptick in user engagement and a 15% surge in site traffic.",
        "Created scripts [Bash] to automate data backup for company servers and Windows-based computers, achieving an 80% automation rate, and effectively mitigating the risk of data loss."
      ]
    },
    {
      role: "Software Developer",
      company: "Luxoft",
      companylogo: require("./assets/images/luxoftLogo.jpeg"),
      date: "April 2020 – October 2020",
      desc: "",
      descBullets: [
        "Boosted the application's performance by 12%, assessed through Google Lighthouse, through the implementation of caching and lazy loading.",
        "Streamlined application navigation by configuring lazy-loaded routes, implementing route guards, and ensuring clean, SEO-friendly URLs.",
        "Attained a 16% reduction in bug reports in Jira through the introduction of unit testing."
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
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

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
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1(647)-988-8103",
  email_address: "denysnazarenko23@gmail.com"
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
