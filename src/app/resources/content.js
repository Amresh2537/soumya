const person = {
  firstName: "Nitesh",
  lastName: "Kumar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Data Management Executive",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // India timezone
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about data management, Google Sheets automation, and business process optimization.
    </>
  ),
};

const social = [
  {
    name: "Email",
    icon: "email",
    link: "mailto:nit.chandra11@gmail.com",
  },
  {
    name: "Phone",
    icon: "phone",
    link: "tel:9140921513",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Data Management Executive</>,
  subline: (
    <>
      I'm Nitesh, a Data Management Executive with expertise in Google Sheets, 
      <br /> process automation, and business intelligence solutions.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from Faridabad, Haryana`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        To work with an organization which provides me the opportunity to improve my skills 
        and grow along with the organization to become knowledgeable. Experienced in data management,
        process automation, and creating business intelligence solutions using Google Workspace tools.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "OasisStudio",
        timeframe: "03/2023 - Present",
        role: "Data Management Executive",
        achievements: [
          <>
            Base on Interior Designer of Kitchen, Wardrobe, TV unit etc.
          </>,
        ],
        images: [],
      },
      {
        company: "Bizgurukul Pvt. Ltd",
        timeframe: "12/2021 - 02/2023",
        role: "Data Management Executive",
        achievements: [
          <>
            Created IMS (Inventory Management Sheet), PMS for Production Planning, Advanced FMS, and Advanced Checklist.
          </>,
          <>
            Developed WhatsApp Reminder & FMS Push Notification on WhatsApp, Pending Task Notification on WhatsApp & Telegram.
          </>,
          <>
            Created Dashboards on Looker Studio and updated on Google Sites with knowledge of App Site and App Script.
          </>,
          <>
            Managed process sheets & workflow of the company, Performance reports of employees.
          </>,
          <>
            Developed customized Google Sheets for process management with different features: Advanced Checklist, PMS, FMS, Attendance Sheet.
          </>,
          <>
            Oversaw MIS of Staff, Delegation Sheet and Projects.
          </>,
          <>
            Maintained and updated all details in sheets.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "J S University, Shikohabad, Uttar Pradesh",
        description: <>B.Tech in Computer Science & Engineering (08/2021 - Present)</>,
      },
      {
        name: "J S University, Shikohabad, Uttar Pradesh",
        description: <>Diploma in Computer Science & Engineering (06/2018 - 06/2021)</>,
      },
      {
        name: "SK. Public School, Lohri Robertsganj, Sonebhadra (U.P)",
        description: <>Higher Secondary (03/2017 - 03/2018)</>,
      },
      {
        name: "Online Skill Development Courses",
        description: <>Various professional development courses</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Technical Skills",
        description: (
          <>
            Google Workspace (G Suite), Google Sheets Advanced Formulas, JavaScript, Python, 
            Google Sites, PowerPoint, Word, Dashboard creation (Looker Studio), App Script
          </>
        ),
        images: [],
      },
      {
        title: "Soft Skills",
        description: (
          <>
            Independent problem-solving, Teamwork, Eagerness to learn, Process management, 
            Performance reporting, Data management
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about data management...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Data management projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "My work samples",
  description: `Data visualization and dashboard samples by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-06.jpeg",
      alt: "Dashboard sample",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-07.jpeg",
      alt: "Google Sheet automation",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpeg",
      alt: "Looker Studio visualization",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-09.jpeg",
      alt: "Process management",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpeg",
      alt: "App Script automation",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpeg",
      alt: "App Script automation",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "App Script automation",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
