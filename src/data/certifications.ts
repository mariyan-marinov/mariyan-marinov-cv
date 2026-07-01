export interface Certification {
  id: string
  name: string
  issuer: string
  year: number
  badge?: string
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    id: 'az-305',
    name: 'Microsoft Certified: Azure Solutions Architect Expert',
    issuer: 'Microsoft',
    year: 2023,
    badge: 'AZ-305',
  },
  {
    id: 'az-204',
    name: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    year: 2022,
    badge: 'AZ-204',
  },
  {
    id: 'az-400',
    name: 'Microsoft Certified: DevOps Engineer Expert',
    issuer: 'Microsoft',
    year: 2022,
    badge: 'AZ-400',
  },
  {
    id: 'aws-saa',
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    year: 2021,
    badge: 'SAA-C03',
  },
  {
    id: 'ckad',
    name: 'Certified Kubernetes Application Developer',
    issuer: 'CNCF / Linux Foundation',
    year: 2021,
    badge: 'CKAD',
  },
]
