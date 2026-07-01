export interface Certification {
  id: string
  name: string
  issuer: string
  year?: number
  badge: string
  category: 'cloud' | 'methodology' | 'skills'
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    id: 'aws-developer',
    name: 'AWS Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    badge: 'AWS-DEV',
    category: 'cloud',
  },
  {
    id: 'aws-practitioner',
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    badge: 'AWS-CP',
    category: 'cloud',
  },
  {
    id: 'aws-technical',
    name: 'AWS Technical Accreditation',
    issuer: 'Amazon Web Services',
    badge: 'AWS-TA',
    category: 'cloud',
  },
  {
    id: 'scrum-master',
    name: 'Certified Scrum Master',
    issuer: 'Scrum Alliance',
    badge: 'CSM',
    category: 'methodology',
  },
  {
    id: 'hackerrank-sql',
    name: 'SQL (Advanced)',
    issuer: 'HackerRank',
    badge: 'HR-SQL',
    category: 'skills',
  },
  {
    id: 'hackerrank-problem-solving',
    name: 'Problem Solving',
    issuer: 'HackerRank',
    badge: 'HR-PS',
    category: 'skills',
  },
]
