import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionPageHero from "@/components/SolutionPageHero";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { Cpu, Zap, Target, Repeat, Settings, Shield, BarChart } from "lucide-react";
import cuttingImage from "@assets/generated_images/industrial_robotics_steel_cutting.png";

const features = [
  {
    icon: Zap,
    title: "One-Stop 자동화",
    description:
      "인입 → 정렬/보정 → 절단 → 배출/잔재 처리까지 무인 흐름 설계",
  },
  {
    icon: Target,
    title: "정밀 보정 절단",
    description: "휨/비틀림 등 비정형 변수를 반영해 기준점을 보정합니다",
  },
  {
    icon: Repeat,
    title: "Auto-Nesting",
    description: "자재 손실을 줄이도록 절단 계획을 자동 최적화합니다",
  },
  {
    icon: Settings,
    title: "Laser / Plasma",
    description: "두 가지 절단 에너지 옵션으로 현장에 맞는 구성 제안",
  },
  {
    icon: Shield,
    title: "안전 설계",
    description: "무인 운영 환경에 맞춘 안전 인터락 시스템 적용",
  },
  {
    icon: BarChart,
    title: "운영 데이터",
    description: "절단 품질/효율 데이터를 실시간으로 모니터링",
  },
];

export default function SmartCuttingPage() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-cutting">
      <Header />
      <main>
        <SolutionPageHero
          title="Smart Cutting System"
          headline="형강을 올려놓기만 하면, 절단부터 배출까지 한 번에."
          subheadline="2D(Flat Bar)부터 3D(H-Beam·파이프·앵글·부등변앵글)까지, 설계 도면 기준으로 원스톱 절단 자동화를 제공합니다. Laser / Plasma 두 가지 절단 에너지 옵션을 보유하고, 현장에 맞는 최적 구성을 제안합니다."
          benefits={[
            "One-Stop 자동화: 인입 → 정렬/보정 → 절단 → 배출/잔재 처리까지 무인 흐름 설계",
            "2D+3D 통합 대응: 다양한 형강 소재/형상에 대한 적용 범위 확장",
            "정밀 보정 기반 절단: 휨/비틀림 등 비정형 변수를 반영해 기준점을 보정",
            "현장 검증 레퍼런스: HD현대중공업, 한화오션 납품 및 운용 경험 기반",
          ]}
          image={cuttingImage}
          icon={Cpu}
          ctaText="현장 적용 상담 받기"
        />
        <FeatureGrid
          title="핵심 기능"
          subtitle="Smart Cutting System의 차별화된 기술력"
          features={features}
        />
        <div className="py-8 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto px-4">
            현장 조건 및 자재 스펙에 따라 구성과 성능 지표는 달라질 수 있습니다.
          </p>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
