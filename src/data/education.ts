export interface Education {
  institution: string
  degree: string
  field: string
  period: string
  location: string
  description?: string
}

export const education: Education[] = [
  {
    institution: 'Technical University of Sofia',
    degree: 'Bachelor of Engineering',
    field: 'Computer Systems and Technologies',
    period: '2005 – 2009',
    location: 'Sofia, Bulgaria',
    description:
      'Focused on software engineering fundamentals, algorithms and data structures, computer architecture, and object-oriented programming. Final thesis on distributed database systems.',
  },
]
