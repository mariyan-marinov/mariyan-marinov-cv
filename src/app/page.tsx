import { HeroSection } from '@/components/sections/HeroSection'
import { ImpactSection } from '@/components/sections/ImpactSection'
import { SummarySection } from '@/components/sections/SummarySection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <SummarySection />
      <ExpertiseSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
    </>
  )
}
