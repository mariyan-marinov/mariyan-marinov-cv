import { HeroSection } from '@/components/sections/HeroSection'
import { ImpactSection } from '@/components/sections/ImpactSection'
import { SummarySection } from '@/components/sections/SummarySection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { LeadershipSection } from '@/components/sections/LeadershipSection'
import { EducationSection } from '@/components/sections/EducationSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { LanguagesSection } from '@/components/sections/LanguagesSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <SummarySection />
      <ExpertiseSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <LeadershipSection />
      <EducationSection />
      <CertificationsSection />
      <LanguagesSection />
      <ContactSection />
    </>
  )
}
