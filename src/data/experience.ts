export interface Experience {
  id: string
  company: string
  url?: string
  logo?: string
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
    url: 'https://gomomentus.com/',
    logo: '/logos/momentus.png',
    role: 'Senior .NET Full Stack Engineer / Tech Lead',
    period: 'Nov 2024 – Apr 2026',
    startYear: 2024,
    endYear: 2026,
    location: 'Remote',
    type: 'Full-time',
    description:
      'Cloud-based event and venue management platform (Aurelia) with integrated CRM, event management, reporting, and web portals (Angular) for space booking, event planning, and more.',
    achievements: [
      'Development focused on architecture, scalability, and AI-assisted delivery.',
      'Led architecture modernisation from legacy Aurelia frontend to Angular, enabling faster feature delivery and better maintainability.',
      'Implemented AI-assisted development workflows using GitHub Copilot Agents, increasing engineering velocity across the team.',
      'Supervised and mentored engineers, participated in architecture and development strategy for key features.',
      'Conducted code reviews and drove engineering standards across the team.',
    ],
    technologies: ['.NET Framework', '.NET Core', 'C#', 'Angular', 'Aurelia', 'Azure', 'SQL Server', 'Distributed Systems', 'GitHub Copilot Agents'],
  },
  {
    id: 'sharp-it',
    company: 'Sharp IT Ltd.',
    url: 'https://sharp-it.bg/',
    logo: '/logos/sharp-it.jpg',
    role: 'Founder & Lead Developer',
    period: 'Dec 2019 – Nov 2024',
    startYear: 2019,
    endYear: 2024,
    location: 'Remote',
    type: 'Self-employed',
    description:
      'Providing comprehensive B2B development services including code reviews and active participation in implementation strategy decisions. Focused on delivering high-quality, scalable solutions while ensuring best practices and efficient development processes.',
    achievements: [
      'Delivered enterprise platform for KPMG: Audit Engagement Management with workflow orchestration, compliance tracking, approval processes, and role-based access control.',
      'Built road data and pavement evaluation platform for Fugro with GIS analytics, PostGIS, GeoJSON, ArcGIS, and AI-assisted delivery.',
      'Developed real-time offshore pile installation tracking system for Fugro(RWE) — event-driven, distributed vessel + onshore architecture with MQTT, TimescaleDB, and Docker.',
      'Implemented continuous data migration for PCG.io from MSSQL on-premise servers to AWS S3 using CDK and DMS.',
      'Built cookie manager app for PCG.io: consent popup designer using React, NodeJS, Lambda, Cassandra Keyspaces, and S3.',
      'Developed internal ML reporting app for Microsoft using Angular, .NET Core, EF Core, MSSQL, and Azure.',
    ],
    technologies: ['.NET Core', 'C#', 'Angular', 'React', 'NodeJS', 'Azure', 'AWS', 'SQL Server', 'PostgreSQL', 'Bootstrap', 'GitHub Actions', 'Microservices', 'CI/CD'],
  },
  {
    id: 'sirma',
    company: 'Sirma Solutions',
    url: 'https://sirma.com/',
    logo: '/logos/sirma.png',
    role: '.NET Full Stack Developer',
    period: 'Aug 2018 – May 2021',
    startYear: 2018,
    endYear: 2021,
    location: 'Sofia, Bulgaria',
    type: 'Full-time',
    description:
      'C# backend and UI web development at one of Bulgaria\'s leading IT companies. Focused on full project lifecycle, SOLID principles, and dependency injection in enterprise solutions.',
    achievements: [
      'Worked on Grants Management System for the Financial Mechanism Office (FMO) — the Brussels-based secretariat managing the EEA and Norway Grants for donor and beneficiary countries.',
      'Built full-stack features using C# .NET 4.6, .NET Core, WebApi, Angular 2+, KnockoutJS, and Bootstrap.',
      'Implemented data access with Entity Framework, EF Core, and MSSQL.',
      'Followed SOLID principles and contributed to architecture decisions across multiple concurrent projects.',
    ],
    technologies: ['C#', '.NET 4.6', '.NET Core', 'WebApi', 'Angular 2+', 'KnockoutJS', 'Bootstrap', 'EF Core', 'SQL Server', 'REST APIs'],
  },
  {
    id: 'tarmin',
    company: 'Tarmin',
    url: 'https://www.tarmin.com/',
    logo: 'https://www.google.com/s2/favicons?domain=tarmin.com&sz=128',
    role: '.NET Full Stack Developer',
    period: 'Jun 2014 – Jan 2020',
    startYear: 2014,
    endYear: 2020,
    location: 'Ruse, Bulgaria',
    type: 'Contract',
    description:
      'C# desktop and web UI development on GridBank — a product for object storage, file system virtualization, archiving, ingestion, replication, search, and big data analytics.',
    achievements: [
      'Built and maintained desktop application (WinForms) for GridBank platform management.',
      'Developed web manager application — a user-friendly lightweight MSSQL Management Studio equivalent.',
      'Implemented Web Services and ASP.NET Core MVC features for the platform.',
      'Worked with Azure cloud services and jQuery/Bootstrap for frontend components.',
    ],
    technologies: ['C#', 'WinForms', 'ASP.NET Core MVC', 'Web Services', 'jQuery', 'Bootstrap', 'SQL Server', 'Azure'],
  },
  {
    id: 'fitibo',
    company: 'Fitibo',
    url: 'https://www.fitibo.com/',
    logo: '/logos/fitibo.ico',
    role: 'C# Full Stack Developer',
    period: '2012 – 2015',
    startYear: 2012,
    endYear: 2015,
    location: 'Ruse, Bulgaria',
    type: 'Full-time',
    description:
      'Full-stack developer building CRM, ERP systems, and web applications using C#.NET, MSSQL, and ASP.NET with DevExpress controls and CSLA.NET framework.',
    achievements: [
      'Built thermal insulation calculator web app showing evaporation graphs and thermal efficiency improvements based on location, materials, and window parameters.',
      'Developed and maintained ERP system handling production availability, import/export, warehouse management, client/vendor communication, and report generation.',
      'Participated in development and synchronization of smaller software apps used across the production process.',
      'Worked with CSLA.NET and DevExpress controls for desktop application development.',
    ],
    technologies: ['C#.NET 3.5', 'ASP.NET', 'MSSQL 2012', 'jQuery', 'CSLA.NET', 'DevExpress', 'Desktop Apps', 'CRM', 'ERP'],
  },
]
