import BusinessStrategy from '@/components/BusinessStrategy'
import FaqSection from '@/components/FaqSection'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import TopNavBar from '@/components/TopNavBar'
import WhyGlobuy from '@/components/WhyGlobuy'

function WelcomePage() {
  return (
    <>
      <TopNavBar />
      <HeroSection />
      <WhyGlobuy />
      <BusinessStrategy />
      <FaqSection />
      <Footer />
    </>
  )
}

export default WelcomePage