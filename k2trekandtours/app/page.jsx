import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import DestinationsGrid from '@/components/home/DestinationsGrid'
import PackagesPreview from '@/components/home/PackagesPreview'
import Testimonials from '@/components/home/Testimonials'
import CtaSection from '@/components/home/CtaSection'


export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <DestinationsGrid />
      <PackagesPreview />
      <Testimonials />
      <CtaSection />
    </>
  )
}
