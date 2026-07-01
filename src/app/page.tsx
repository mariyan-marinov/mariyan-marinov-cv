import { HeroSection } from '@/components/sections/HeroSection'
import { SummarySection } from '@/components/sections/SummarySection'
import { CompetenciesSection } from '@/components/sections/CompetenciesSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { LanguagesSection } from '@/components/sections/LanguagesSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SummarySection />
      <CompetenciesSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <LanguagesSection />
      <ContactSection />
    </>
  )
}
