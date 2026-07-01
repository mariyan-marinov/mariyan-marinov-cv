import { HeroSection } from '@/components/sections/HeroSection'
import { ImpactSection } from '@/components/sections/ImpactSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { LeadershipSection } from '@/components/sections/LeadershipSection'
import { CertificationsSection } from '@/components/sections/CertificationsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ExperienceSection />
      <LeadershipSection />
      <CertificationsSection />
      <ContactSection />
    </>
  )
}
