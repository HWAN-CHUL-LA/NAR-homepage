import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import SolutionGridSection from "@/components/SolutionGridSection"
import ProductSliderSection from "@/components/ProductSliderSection"
import CaseFilterSection from "@/components/CaseFilterSection"
import AboutGridSection from "@/components/AboutGridSection"
import SolutionsGrid from "@/components/SolutionsGrid"
import StatsSection from "@/components/StatsSection"
import CaseStudiesSection from "@/components/CaseStudiesSection"
import WhyUsSection from "@/components/WhyUsSection"
import CTASection from "@/components/CTASection"

export default function Home() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-home">
      <Header />
      <main>
        <HeroSection />
        {/* 새로운 유진로봇 스타일 섹션들 */}
        <SolutionGridSection />
        <ProductSliderSection />
        <CaseFilterSection />
        <AboutGridSection />
        {/* 기존 섹션들 (유지) */}
        <StatsSection />
        <SolutionsGrid />
        <CaseStudiesSection />
        <WhyUsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
