export interface Experience {
  id: string
  company: string
  role: string
  period: string
  startYear: number
  endYear: number | null
  location: string
  type: 'Full-time' | 'Contract' | 'Consulting'
  description: string
  achievements: string[]
  technologies: string[]
}

export const experience: Experience[] = [
  {
    id: 'scalevision',
    company: 'ScaleVision Ltd.',
    role: 'Principal Engineer & Technical Lead',
    period: 'Jan 2021 – Present',
    startYear: 2021,
    endYear: null,
    location: 'Sofia, Bulgaria (Remote / Hybrid)',
    type: 'Full-time',
    description:
      'Leading a cross-functional engineering team of 12 to build a B2B SaaS platform for supply-chain analytics and warehouse automation serving clients across Europe.',
    achievements: [
      'Architected a cloud-native microservices platform on Azure (AKS, Service Bus, Cosmos DB, API Management), reducing time-to-deploy from 2 weeks to under 2 hours via full CI/CD automation.',
      'Led the migration of a monolithic ASP.NET Web Forms application to a clean-architecture ASP.NET Core 8 / React stack, cutting infrastructure costs by 40%.',
      'Introduced AI-assisted development practices (GitHub Copilot, GPT-4 integration for data classification), increasing team velocity by 30%.',
      'Designed and delivered a real-time IoT telemetry pipeline processing 1M+ events/day using Azure Event Hubs, Stream Analytics, and SignalR.',
      'Grew engineering team from 4 to 12 engineers through structured hiring, onboarding, and mentorship programmes.',
    ],
    technologies: [
      '.NET 8', 'C#', 'ASP.NET Core', 'React', 'TypeScript', 'Azure AKS',
      'Azure Service Bus', 'Cosmos DB', 'SignalR', 'GitHub Actions', 'Terraform',
    ],
  },
  {
    id: 'nexabank',
    company: 'NexaBank Digital (UK)',
    role: 'Senior Software Engineer',
    period: 'Mar 2018 – Dec 2020',
    startYear: 2018,
    endYear: 2020,
    location: 'London, UK (Remote)',
    type: 'Contract',
    description:
      'Contract engineer on a UK digital banking startup, responsible for the core banking API platform and payment integrations serving 200k+ retail customers.',
    achievements: [
      'Built and launched an open banking API gateway (OAuth2 / OpenID Connect) compliant with PSD2/FCA requirements, enabling third-party fintech integrations.',
      'Designed a CQRS / Event Sourcing architecture for the transaction ledger, achieving sub-50ms query latency at peak load.',
      'Implemented end-to-end encryption and tokenisation for card payment flows (PCI DSS Level 1 compliance), passing external security audit with zero findings.',
      'Reduced payment processing error rate from 3.2% to 0.4% through systematic retry logic, dead-letter queues, and comprehensive distributed tracing.',
      'Mentored 3 mid-level engineers, establishing code-review standards and an internal tech-talk programme.',
    ],
    technologies: [
      '.NET Core 3.1', 'C#', 'ASP.NET Core', 'Azure', 'Azure SQL', 'Redis',
      'RabbitMQ', 'OAuth2', 'OpenID Connect', 'Docker', 'Kubernetes', 'ELK Stack',
    ],
  },
  {
    id: 'logisphere',
    company: 'LogiSphere Systems',
    role: 'Software Engineer → Senior Software Engineer',
    period: 'Jun 2015 – Feb 2018',
    startYear: 2015,
    endYear: 2018,
    location: 'Sofia, Bulgaria',
    type: 'Full-time',
    description:
      'Full-stack engineer at a logistics technology company building route-optimisation and fleet-management SaaS products used by 300+ logistics operators in 12 countries.',
    achievements: [
      'Re-engineered the legacy VB.NET route-optimisation engine in C# / .NET Core, achieving 5× throughput improvement and enabling real-time recalculation for live shipments.',
      'Built a React/TypeScript driver-facing PWA used daily by 8,000+ drivers, replacing paper-based workflows and reducing dispatch time by 60%.',
      'Integrated AWS services (EC2, S3, Lambda, RDS, CloudFront) for the customer portal, cutting hosting costs by 35% versus on-premise infrastructure.',
      'Designed a multi-tenant SaaS architecture supporting white-label deployments for 3 major logistics network operators.',
      'Championed adoption of Entity Framework Core migrations and automated schema versioning, eliminating manual database deployment risk.',
    ],
    technologies: [
      '.NET Core', 'C#', 'React', 'TypeScript', 'AWS', 'PostgreSQL',
      'Redis', 'Entity Framework Core', 'Docker', 'REST APIs',
    ],
  },
  {
    id: 'intertech',
    company: 'InterTech Consulting',
    role: 'Software Developer → Software Engineer',
    period: 'Aug 2012 – May 2015',
    startYear: 2012,
    endYear: 2015,
    location: 'Sofia, Bulgaria',
    type: 'Full-time',
    description:
      'Developer at a Bulgarian IT consultancy delivering bespoke software solutions for clients in insurance, healthcare, and retail.',
    achievements: [
      'Delivered 8 end-to-end custom software projects for enterprise clients, working from requirements through to production deployment.',
      'Built a claims-management portal for a Bulgarian insurance company (ASP.NET MVC, SQL Server) handling 50k+ claims/month.',
      'Developed a FHIR-compatible patient record integration layer connecting a regional hospital network to the national eHealth platform.',
      'Led the front-end modernisation initiative, introducing jQuery → AngularJS migration patterns adopted across 4 active projects.',
      'Established automated unit testing culture (NUnit, Moq), increasing code coverage from <10% to 70% on all new projects.',
    ],
    technologies: [
      'ASP.NET MVC', 'C#', '.NET Framework', 'SQL Server', 'AngularJS',
      'jQuery', 'WCF', 'Entity Framework', 'NUnit', 'Azure',
    ],
  },
  {
    id: 'softline',
    company: 'Softline Technologies',
    role: 'Junior Developer',
    period: 'Sep 2010 – Jul 2012',
    startYear: 2010,
    endYear: 2012,
    location: 'Sofia, Bulgaria',
    type: 'Full-time',
    description:
      'Entry-level developer building desktop and web applications for small and medium-sized Bulgarian businesses.',
    achievements: [
      'Developed a WinForms inventory management system for a manufacturing client, reducing manual stock-reconciliation time by 70%.',
      'Built ASP.NET WebForms customer portals for 4 SME clients, gaining foundational experience in full software development lifecycle.',
      'Created automated SQL Server reporting jobs and SSRS reports for financial reconciliation workflows.',
      'Contributed to team code-quality improvements by introducing code-review guidelines and shared coding standards documentation.',
    ],
    technologies: [
      'C#', '.NET Framework', 'ASP.NET WebForms', 'WinForms', 'SQL Server',
      'SSRS', 'JavaScript', 'jQuery',
    ],
  },
]
