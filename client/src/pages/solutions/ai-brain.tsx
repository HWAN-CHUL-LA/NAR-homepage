import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionPageHero from "@/components/SolutionPageHero";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { Cog, Eye, Hand, Brain, RefreshCw, Rocket } from "lucide-react";
import aiImage from "@assets/generated_images/ai_robotic_welding_automation.png";

const features = [
  {
    icon: Eye,
    title: "멀티모달 융합",
    description: "3D Vision(형상) + Smart Teaching Tool(작업 감각) 결합",
  },
  {
    icon: Hand,
    title: "숙련 행동 복제",
    description: '"사람처럼" 안정적인 품질을 목표로 하는 제어 접근',
  },
  {
    icon: RefreshCw,
    title: "현장 변동 대응",
    description: "틈/변형 등 비정형 변수에 적응하는 자동화 지향",
  },
  {
    icon: Brain,
    title: "Physical-AI 기반",
    description: "숙련공의 미세 손놀림·속도 완급·힘 제어 감각을 학습",
  },
  {
    icon: Cog,
    title: "다공정 확장",
    description: "용접 뿐 아니라 비드 사상(Grinding), 절단 등으로 확장",
  },
  {
    icon: Rocket,
    title: "Mobile Manipulator",
    description: "AMR 플랫폼과 결합해 모바일 매니퓰레이터로 고도화",
  },
];

export default function AIBrainPage() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-ai-brain">
      <Header />
      <main>
        <SolutionPageHero
          title="AI Brain Robot"
          headline="숙련공의 감각을 데이터로, 로봇의 실력으로."
          subheadline="3D 비전과 스마트 티칭을 결합해, 숙련 용접공의 미세 손놀림·속도 완급·힘 제어 감각을 학습하고 재현하는 지능형 자동화 솔루션을 준비 중입니다. 단순 좌표 추종을 넘어, 작업 중 발생하는 형상/간격 변화에도 유연하게 대응하는 방향으로 개발합니다."
          benefits={[
            "멀티모달 융합: 3D Vision(형상) + Smart Teaching Tool(작업 감각) 결합",
            "숙련 행동 복제: '사람처럼' 안정적인 품질을 목표로 하는 제어 접근",
            "현장 변동 대응: 틈/변형 등 비정형 변수에 적응하는 자동화 지향",
            "적용 확장: 용접 뿐 아니라 비드 사상, 절단 등 고위험 공정 자동화로 확장",
          ]}
          image={aiImage}
          icon={Cog}
          ctaText="공정 적용 가능성 상담"
          badge="개발 중"
        />
        <FeatureGrid
          title="핵심 기능"
          subtitle="Physical-AI 기반 지능형 자동화의 핵심 기술"
          features={features}
        />
        <div className="py-8 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto px-4">
            본 솔루션은 개발 단계이며, 기능 구성과 적용 범위는 개발 진행에 따라 변경될 수 있습니다.
          </p>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
