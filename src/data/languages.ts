export interface Language {
  name: string
  level: string
  proficiency: number
}

export const languages: Language[] = [
  {
    name: 'Bulgarian',
    level: 'Native',
    proficiency: 100,
  },
  {
    name: 'English',
    level: 'Professional Proficiency (C1)',
    proficiency: 85,
  },
]
