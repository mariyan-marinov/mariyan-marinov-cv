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
    level: 'Working Proficiency',
    proficiency: 85,
  },
  {
    name: 'German',
    level: 'Entry Level',
    proficiency: 20,
  },
]
