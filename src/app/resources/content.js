import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Saumya",
  lastName: "Gupta",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Human Resources Professional",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
  contact: "6393148008 | saumyag532@gmail.com"
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about human resources, recruitment strategies, and share thoughts on the 
      intersection of people management and organizational development.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "linkedin.com/in/saumya-gupta-3b1309243",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:saumyag532@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Human Resources Professional</>,
  subline: (
    <>
      I'm Saumya, a Human Resources professional with experience in 
      <br /> recruitment, employee management, and HR operations.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
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
        Saumya is a Human Resources professional with a passion for recruitment, employee management, 
        and organizational development. Her work spans talent acquisition, HR operations, and 
        implementing effective HR policies.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "GAO Tek.inc",
        timeframe: "27 May 2024 - 30 August 2024",
        role: "Human Resources Intern",
        achievements: [
          <>
            Recruited and sourced candidates through job boards, social media, and headhunting.
          </>,
          <>
            Posted job openings on various recruitment platforms and university portals.
          </>,
          <>
            Screened resumes and applications, scheduled interviews for senior HR staff.
          </>,
          <>
            Managed communication through emails and LinkedIn with applicants and followed up with candidates.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "HR Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "MARS EXPLORATION PVT. LTD",
        timeframe: "1 July - 7 August 2022",
        role: "Human Resource Intern",
        achievements: [
          <>
            Updated internal employee databases, performed data entry, and filed HR documents.
          </>,
          <>
            Screened resumes, initiated background checks on shortlisted candidates.
          </>,
          <>
            Provided recommendations to improve HR policies and completed tasks assigned by senior HR.
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
        name: "United Institute of Management",
        description: <>BBA (2022-2025)</>,
      },
      {
        name: "Kaushambi Public School",
        description: <>12th Grade (70%)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Hard Skills",
        description: (
          <>
            Knowledge about Adult Learning Principles, ADDIE Model, Basic SQL, HTML, Research skills, 
            MS-Excel, MS-Office, PowerPoint, Market Research
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Skills image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Soft Skills",
        description: (
          <>
            Communication skills, Teamwork, Leadership skills, Adaptability, Positive attitude
          </>
        ),
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Skills image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about HR and recruitment...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
};

const work = {
  label: "Work",
  title: "My projects",
  description: `HR projects and achievements by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
};

const gallery = {
  label: "Achievements",
  title: "Certifications & Awards",
  description: `Achievements and certifications earned by ${person.name}`,
  achievements: [
    "MS-Office course certificate",
    "Media planning and advertising",
    "Digital Marketing course",
    "Currently pursuing Excel certification course",
    "Market Research"
  ],
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "certificate",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "certificate",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "certificate",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "certificate",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
