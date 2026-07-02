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
    institution: 'University of Ruse',
    degree: 'Master of Computer Science',
    field: 'Software Development & Distributed Systems',
    period: '2011',
    location: 'Ruse, Bulgaria',
    description:
      'Software development, Distributed Systems, Distributed DBs, Design Patterns.',
  },
  {
    institution: 'Fachhochschule für Technik und Wirtschaft Berlin',
    degree: 'Exchange Program',
    field: 'Diploma Thesis Writing',
    period: '2010',
    location: 'Berlin, Germany',
    description: 'Diploma thesis writing as part of academic exchange.',
  },
  {
    institution: 'University of Ruse',
    degree: 'Bachelor of Computer Science',
    field: 'Computer Science',
    period: '2010',
    location: 'Ruse, Bulgaria',
  },
  {
    institution: "High School of Mathematics 'Baba Tonka'",
    degree: 'High School Diploma',
    field: 'IT, English Language & Mathematics',
    period: '2006',
    location: 'Ruse, Bulgaria',
    description: 'Specialisation in IT and English language, Mathematics.',
  },
]
