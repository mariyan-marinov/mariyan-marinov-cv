export interface Certification {
  id: string
  name: string
  issuer: string
  year?: number
  badge: string
  imageUrl?: string
  category: 'cloud' | 'methodology' | 'skills'
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    id: 'aws-developer',
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    badge: 'AWS-DEV',
    imageUrl: 'https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png',
    category: 'cloud',
    credentialUrl: 'https://www.credly.com/badges/51739e95-0f43-4bc6-9d81-1e0e293605da',
  },
  {
    id: 'aws-practitioner',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    badge: 'AWS-CP',
    imageUrl: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
    category: 'cloud',
    credentialUrl: 'https://www.credly.com/badges/14fcd514-59fd-4160-b0cc-1dc3de0eacb8',
  },
  {
    id: 'aws-technical',
    name: 'AWS Technical Accreditation',
    issuer: 'Amazon Web Services',
    badge: 'AWS-TA',
    imageUrl: 'https://images.credly.com/size/340x340/images/8f006312-3154-45bf-a845-4a043641e83c/blob',
    category: 'cloud',
    credentialUrl: 'https://www.credly.com/badges/8b3a7e5e-181d-41ad-b081-97f696c80479',
  },
  {
    id: 'scrum-master',
    name: 'Certified Scrum Master',
    issuer: 'Scrum Alliance',
    badge: 'CSM',
    imageUrl: 'https://bcert.me/bc/rest/web/open-badges/assertions/11770341/image',
    category: 'methodology',
    credentialUrl: 'https://bcert.me/sezikxemy',
  },
  {
    id: 'hackerrank-sql',
    name: 'SQL (Advanced)',
    issuer: 'HackerRank',
    badge: 'HR-SQL',
    imageUrl: '/certs/hr-sql-advanced.png',
    category: 'skills',
    credentialUrl: 'https://www.hackerrank.com/certificates/a2d3895fb725',
  },
  {
    id: 'hackerrank-software-engineer',
    name: 'Software Engineer',
    issuer: 'HackerRank',
    badge: 'HR-SE',
    imageUrl: '/certs/hr-software-engineer.png',
    category: 'skills',
    credentialUrl: 'https://www.hackerrank.com/certificates/352fe3640eca',
  },
]
