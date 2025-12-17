import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionPageHero from "@/components/SolutionPageHero";
import PipelineSteps from "@/components/PipelineSteps";
import PackageOptions from "@/components/PackageOptions";
import CTASection from "@/components/CTASection";
import { GitBranch } from "lucide-react";
import pipelineImage from "@assets/generated_images/automated_steel_production_pipeline.png";

export default function PipelinePage() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-pipeline">
      <Header />
      <main>
        <SolutionPageHero
          title="Unmanned Steel Pipeline"
          headline="절단부터 이송, 그리고 차세대 용접 자동화까지. 공정을 하나로 연결합니다."
          subheadline="우리는 로봇 '한 대'가 아니라, 현장 전체 흐름이 무인으로 이어지는 파이프라인을 설계합니다. Smart Cutting System + Rugged AMR + AI Brain Robot을 단계적으로 연결해 토탈 자동화 로드맵을 제공합니다."
          benefits={[
            "단계별 자동화: 자재 인입부터 배출, 이송까지 무인화",
            "통합 운영: 라인/물류/품질 추적 관리 시스템",
            "확장 로드맵: AI 기반 용접/사상 자동화까지",
            "맞춤형 패키지: 현장 상황에 맞는 단계별 도입",
          ]}
          image={pipelineImage}
          icon={GitBranch}
          ctaText="우리 공정 기준 자동화 로드맵 받기"
        />
        <PipelineSteps />
        <PackageOptions />
        <div className="py-8 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto px-4">
            도입 범위는 라인 구성·안전 요구사항·현장 운영 조건에 따라 단계적으로 설계합니다.
          </p>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
