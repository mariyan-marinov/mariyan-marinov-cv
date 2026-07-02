export interface Project {
  id: string
  client: string
  clientUrl?: string
  clientLogo?: string
  name: string
  description: string
  highlights: string[]
  technologies: string[]
  category: 'enterprise' | 'infrastructure' | 'platform' | 'analytics'
}

export const projects: Project[] = [
  {
    id: 'kpmg',
    client: 'KPMG',
    clientUrl: 'https://kpmg.com/',
    clientLogo: '/logos/kpmg.png',
    name: 'Audit Engagement Management Platform',
    description:
      'Enterprise platform used to support and streamline the full audit lifecycle, including workflow orchestration, approval processes, compliance tracking, reporting, role-based access control, audit traceability, and business process management in a highly regulated environment.',
    highlights: [
      'Workflow orchestration for complex audit lifecycles',
      'Compliance tracking and regulatory reporting',
      'Role-based access control and audit traceability',
      'Modernisation of large-scale distributed platform',
    ],
    technologies: ['.NET', 'Azure', 'MS Graph', 'RabbitMQ', 'MassTransit'],
    category: 'enterprise',
  },
  {
    id: 'fugro',
    client: 'Fugro',
    clientUrl: 'https://www.fugro.com/',
    clientLogo: '/logos/fugro.png',
    name: 'Road Intelligence Platform',
    description:
      'Analysis and reporting of road condition based on processed images of road pavement and road-surrounding objects. E2E development focused on architecture and AI-assisted delivery, including working with geo data.',
    highlights: [
      'E2E development with architecture ownership and AI-assisted delivery',
      'Geospatial data processing with PostGIS, GeoJSON, ArcGIS, and shapefiles',
      'Supervised and mentored engineers; led feature ownership and code reviews',
      'Deployed on AWS (S3, ECR, ECS, API Gateway, Route53) with auth0 and GitHub Actions',
    ],
    technologies: ['Angular', '.NET Core', 'Dapper', 'PostgreSQL', 'PostGIS', 'AWS', 'Auth0', 'ArcGIS', 'GeoJSON', 'GitHub Copilot Agents'],
    category: 'infrastructure',
  },
  {
    id: 'fugro-pit',
    client: 'Fugro / RWE',
    clientUrl: 'https://www.fugro.com/',
    clientLogo: '/logos/fugro.png',
    name: 'Pile Installation Tracking (Offshore Wind)',
    description:
      'Real-time offshore monopile driving monitoring platform for offshore wind turbine installation. Fuses multi-sensor data streams to track pile kinematics, detect safety events, and deliver live dashboards to both vessel and shore operators.',
    highlights: [
      'Event-driven architecture distributed across vessel and onshore environments',
      'Multi-sensor data fusion with standalone dockerized calculators subscribing to MQTT broker',
      'Vessel-to-shore replication via Mosquitto broker bridge over Starlink',
      'PIT application layer handling persistence, visualisation, and configuration',
    ],
    technologies: ['.NET 10', 'MQTT v5', 'Mosquitto', 'TimescaleDB', 'Docker'],
    category: 'infrastructure',
  },
  {
    id: 'pcg-cookie',
    client: 'pcg.io',
    name: 'Cookie Consent Manager',
    description:
      'Application to configure cookie preferences and design cookie consent popups for websites. Includes a popup designer and consent management features.',
    highlights: [
      'Cookie consent popup designer with configurable options',
      'Serverless architecture with AWS Lambda',
      'Cassandra Keyspaces for scalable consent storage',
    ],
    technologies: ['React', 'NodeJS', 'AWS Lambda', 'Cassandra Keyspaces', 'AWS S3'],
    category: 'platform',
  },
  {
    id: 'microsoft',
    client: 'Microsoft',
    name: 'Machine Learning Reporting Platform',
    description:
      'Enterprise reporting and analytics platform surfacing machine learning model performance, data analysis, and business intelligence dashboards for internal Microsoft engineering and business teams.',
    highlights: [
      'Enterprise-scale ML model reporting',
      'Data analysis and visualisation pipelines',
      'Performance dashboards for engineering teams',
      'Azure-native architecture',
    ],
    technologies: ['Angular', '.NET Core', 'Azure', 'SQL Server', 'Power BI'],
    category: 'analytics',
  },
  {
    id: 'momentus-platform',
    client: 'Momentus Technologies',
    clientUrl: 'https://gomomentus.com/',
    clientLogo: '/logos/momentus.png',
    name: 'Venue and Event Management Platform',
    description:
      'Global SaaS platform for venue and event management used by enterprise clients worldwide — managing bookings, CRM, event operations, and financial workflows across complex multi-venue organisations.',
    highlights: [
      'CRM and customer lifecycle management',
      'End-to-end event management workflows',
      'Architecture leadership and modernisation',
      'AI-assisted engineering implementation',
    ],
    technologies: ['.NET', 'Angular', 'Aurelia', 'Azure', 'SQL Server'],
    category: 'platform',
  },
]
