export interface Project {
  id: string
  client: string
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
    name: 'Audit Engagement Management Platform',
    description:
      'Enterprise-grade platform for managing the full lifecycle of audit engagements — from planning and fieldwork through to reporting and sign-off — for one of the Big Four professional services firms.',
    highlights: [
      'Workflow orchestration for complex audit lifecycles',
      'Compliance tracking and regulatory reporting',
      'Enterprise-scale reporting systems',
      'Distributed microservices architecture',
    ],
    technologies: ['.NET', 'React', 'MS Graph', 'RabbitMQ', 'MassTransit', 'Azure'],
    category: 'enterprise',
  },
  {
    id: 'fugro',
    client: 'Fugro',
    name: 'Road Intelligence Platform',
    description:
      'Geospatial analytics platform processing road surface data collected from survey vehicles to deliver infrastructure intelligence and asset management insights for governments and infrastructure operators.',
    highlights: [
      'GIS analytics and geospatial data processing',
      'Geo processing pipelines at scale',
      'Infrastructure intelligence reporting',
      'Road condition and asset management',
    ],
    technologies: ['Angular', '.NET', 'AWS', 'PostgreSQL', 'PostGIS', 'ArcGIS'],
    category: 'infrastructure',
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
