export interface SkillCategory {
  id: string
  label: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    label: 'Backend',
    icon: '⚙️',
    skills: [
      'C# / .NET',
      'ASP.NET Core',
      'WebApi / REST APIs',
      'Entity Framework Core',
      'Dapper / ADO.NET',
      'LINQ',
      'Web Services / Windows Services',
      'Microservices',
      'RabbitMQ / MassTransit',
      'MQTT v5',
      'OAuth2 / Auth0',
      'SOLID Principles',
      'Design Patterns',
      'Dependency Injection',
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: '⚛️',
    skills: [
      'Angular (2+)',
      'React',
      'Aurelia',
      'TypeScript',
      'JavaScript',
      'HTML5 / CSS3',
      'Bootstrap',
      'KnockoutJS',
      'jQuery',
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      'Microsoft Azure',
      'Azure Functions / App Service',
      'Azure Service Bus',
      'MS Graph',
      'AWS (S3, Lambda, ECR, ECS)',
      'AWS API Gateway / Route53',
      'AWS CDK / DMS',
      'AWS Cassandra Keyspaces',
      'Docker',
      'GitHub Actions / CI/CD',
      'GitHub Copilot Agents',
    ],
  },
  {
    id: 'data',
    label: 'Data',
    icon: '🗄️',
    skills: [
      'SQL Server / T-SQL',
      'PostgreSQL',
      'PostGIS / GeoJSON',
      'ArcGIS',
      'TimescaleDB',
      'Cassandra',
      'Data Modelling',
      'Query Optimisation',
      'Event-Driven Architecture',
    ],
  },
]
