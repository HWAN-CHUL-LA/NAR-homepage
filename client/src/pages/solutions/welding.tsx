import Header from "@/components/Header"
import Footer from "@/components/Footer"
import SolutionPageHero from "@/components/SolutionPageHero"
import FeatureGrid from "@/components/FeatureGrid"
import CTASection from "@/components/CTASection"
import { Cog, Shield, Target, Zap, Users, Gauge } from "lucide-react"
import { remoteAiWeldingImage as heroImage } from "@/lib/remoteImageUrls"

const features = [
  {
    icon: Zap,
    title: "정밀 궤적 제어",
    description: "균일한 용접 비드와 반복 가능한 품질을 목표로 한 궤적·속도·전류 연동 제어",
  },
  {
    icon: Users,
    title: "협동 로봇 기반",
    description: "작업자와 동일 공간에서 안전하게 협업하며 좁은 현장에도 도입 가능한 구성",
  },
  {
    icon: Target,
    title: "품질·공정 모니터링",
    description: "용접 조건과 결과 데이터를 수집해 품질 편차를 조기에 파악",
  },
  {
    icon: Cog,
    title: "티칭·공정 전환",
    description: "다품종·소량 생산에 맞춘 티칭 인터페이스와 빠른 레시피 전환",
  },
  {
    icon: Shield,
    title: "안전 설계",
    description: "협동 로봇 안전 기능과 현장 인터락을 반영한 운영 시나리오",
  },
  {
    icon: Gauge,
    title: "복잡 구조물 대응",
    description: "다축 매니퓰레이터로 불균일 형상·자세에서도 접근 가능한 용접 자동화",
  },
]

export default function WeldingSolutionPage() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-welding">
      <Header />
      <main>
        <SolutionPageHero
          title="협동 로봇 기반 수용접 자동화"
          headline="협동 로봇과 정밀 제어로, 복잡한 구조물도 균일한 품질의 자동 용접을."
          subheadline="조선·건설 현장의 수용접 공정에 맞춰 협동 로봇을 활용합니다. 숙련공의 노하우를 티칭·파라미터로 구조화하고, 정밀 궤적 제어와 실시간 모니터링으로 품질 편차를 줄이는 방향으로 구성합니다. 현장 동선·안전 조건에 맞춘 도입 상담이 가능합니다."
          benefits={[
            "고품질 균일 용접: 정밀 궤적 제어와 용접 조건 연동",
            "협동 로봇 활용: 작업자와 안전한 공존, 좁은 공간 대응",
            "빠른 공정 전환: 다품종 작업에 맞춘 티칭·레시피 관리",
            "데이터 기반 운영: 용접 품질·이상 징후를 추적 가능한 구조 지향",
          ]}
          image={heroImage}
          icon={Cog}
          ctaText="용접 공정 적용 상담"
        />
        <FeatureGrid
          title="핵심 기능"
          subtitle="수용접 자동화 솔루션의 기술 포인트"
          features={features}
        />
        <div className="py-8 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto px-4">
            소재·개구부 형상·용접 규격에 따라 로봇 기종·외곽 장비·사이클 타임은 달라질 수 있습니다.
          </p>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
