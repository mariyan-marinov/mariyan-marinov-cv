export interface Experience {
  id: string
  company: string
  role: string
  period: string
  startYear: number
  endYear: number | null
  location: string
  type: 'Full-time' | 'Contract' | 'Consulting' | 'Self-employed'
  description: string
  achievements: string[]
  technologies: string[]
}

export const experience: Experience[] = [
  {
    id: 'momentus',
    company: 'Momentus Technologies',
    role: 'Senior .NET Full Stack Engineer / Tech Lead',
    period: '2022 – Present',
    startYear: 2022,
    endYear: null,
    location: 'Remote',
    type: 'Full-time',
    description:
      'Leading full-stack development and technical direction for a global venue and event management SaaS platform used by enterprise clients worldwide. Driving architectural modernisation, AI-assisted engineering adoption, and cross-team technical leadership.',
    achievements: [
      'Led architecture modernisation from legacy Aurelia frontend to Angular, enabling faster feature delivery and better maintainability.',
      'Implemented AI-assisted development workflows using GitHub Copilot, increasing engineering velocity across the team.',
      'Provided technical leadership across multiple feature squads — conducting architecture reviews, solution design sessions, and code quality governance.',
      'Drove CRM and event management feature development serving global enterprise venue operators.',
      'Established engineering standards, mentoring practices, and modernisation roadmap execution.',
    ],
    technologies: ['.NET', 'C#', 'Angular', 'Aurelia', 'Azure', 'SQL Server', 'GitHub Copilot'],
  },
  {
    id: 'sharp-it',
    company: 'Sharp IT Ltd.',
    role: 'Founder & Lead Developer',
    period: '2020 – 2022',
    startYear: 2020,
    endYear: 2022,
    location: 'Sofia, Bulgaria',
    type: 'Self-employed',
    description:
      'Founded and operated an independent software consultancy delivering bespoke enterprise software solutions and architecture consulting for international clients across multiple domains.',
    achievements: [
      'Delivered custom enterprise software projects for clients in the UK, Europe, and globally.',
      'Provided architecture consulting and solution design for cloud migration and modernisation initiatives.',
      'Built and led small delivery teams on contract engagements.',
      'Developed reusable frameworks and accelerators reducing time-to-delivery for client projects.',
    ],
    technologies: ['.NET', 'C#', 'Angular', 'React', 'Azure', 'AWS', 'SQL Server', 'PostgreSQL'],
  },
  {
    id: 'sirma',
    company: 'Sirma Solutions',
    role: '.NET Full Stack Developer',
    period: '2017 – 2020',
    startYear: 2017,
    endYear: 2020,
    location: 'Sofia, Bulgaria',
    type: 'Full-time',
    description:
      'Full-stack engineer at one of Bulgaria\'s leading IT companies, delivering complex enterprise software solutions and integrations for clients across multiple industries.',
    achievements: [
      'Developed enterprise-grade .NET applications serving large-scale business clients.',
      'Built full-stack solutions using ASP.NET Core and Angular for internal and client-facing systems.',
      'Contributed to architecture decisions and technical design across multiple concurrent projects.',
      'Collaborated with international teams on distributed system integrations.',
    ],
    technologies: ['.NET', 'C#', 'ASP.NET Core', 'Angular', 'SQL Server', 'Azure', 'REST APIs'],
  },
  {
    id: 'tarmin',
    company: 'Tarmin',
    role: 'Full Stack Developer',
    period: '2015 – 2017',
    startYear: 2015,
    endYear: 2017,
    location: 'Sofia, Bulgaria',
    type: 'Full-time',
    description:
      'Full-stack developer working on data management and analytics platforms for enterprise clients in the data intelligence space.',
    achievements: [
      'Built data management and analytics features for enterprise clients.',
      'Developed frontend and backend components for large-scale data processing platforms.',
      'Collaborated with cross-functional teams across multiple time zones.',
    ],
    technologies: ['.NET', 'C#', 'JavaScript', 'SQL Server', 'Azure', 'REST APIs'],
  },
  {
    id: 'fitibo',
    company: 'Fitibo',
    role: 'C# Full Stack Developer',
    period: '2012 – 2015',
    startYear: 2012,
    endYear: 2015,
    location: 'Sofia, Bulgaria',
    type: 'Full-time',
    description:
      'Early-career full-stack developer building web applications and backend services, establishing strong foundations in C#, ASP.NET, and modern web development practices.',
    achievements: [
      'Built and maintained multiple web applications using C# and ASP.NET.',
      'Developed database schemas and data access layers using SQL Server.',
      'Contributed to frontend development and UI implementation across various projects.',
    ],
    technologies: ['C#', 'ASP.NET', 'JavaScript', 'SQL Server', 'HTML5', 'CSS3'],
  },
]
