import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionPageHero from "@/components/SolutionPageHero";
import FeatureGrid from "@/components/FeatureGrid";
import CTASection from "@/components/CTASection";
import { Bot, Move, Mountain, Target, Truck, Package } from "lucide-react";

const amrVideo = "https://res.cloudinary.com/dzu2wygbi/video/upload/v1766025867/%EC%9E%90%EA%B8%B0%EC%9C%84%EC%B9%98%EC%B6%94%EC%A0%95_%ED%85%8C%EC%8A%A4%ED%8A%B8_ydk62r.mp4";

const features = [
  {
    icon: Move,
    title: "전방향 주행/제자리 회전",
    description: "조향+주행 일체형 Swerve Drive 기반 구동 모듈",
  },
  {
    icon: Mountain,
    title: "험지 대응 설계",
    description: "고무 휠 + Rocker-Bogie로 비정형 장애물 환경에서도 안정 이동",
  },
  {
    icon: Target,
    title: "자동 도킹",
    description: "거리/비전 센서 기반 정렬로 6mm 이하 정밀 도킹 검증 방향",
  },
  {
    icon: Truck,
    title: "현장 물류 자동화",
    description: "조선소 고철 운반, 절단 형강 운반, 공정 간 이송(WIP) 등",
  },
  {
    icon: Package,
    title: "확장형 상부 모듈",
    description: "운반 대상에 맞춘 탑모듈/지그/거치대 연동 가능",
  },
  {
    icon: Bot,
    title: "Fleet Management",
    description: "다수 AMR 통합 운영을 위한 Fleet 관리 시스템",
  },
];

export default function RuggedAMRPage() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-amr">
      <Header />
      <main>
        <SolutionPageHero
          title="산업현장 특화형 Omnidirectional AMR"
          headline="어떤 바닥 조건에서도 흔들림 없이. 전방향으로 움직이는 산업현장형 AMR 로봇."
          subheadline="Swerve Drive 기반 전방향(Omnidirectional) 이동과 제자리 회전, 그리고 Rocker-Bogie 샤시로 비정형 바닥 환경에서도 안정 주행을 목표로 설계했습니다. 자율주행 이후 정밀 자동 도킹까지 연결해 현장 물류를 자동화합니다."
          benefits={[
            "전방향 주행/제자리 회전: 조향+주행 일체형 구동 모듈 기반",
            "험지 대응 설계: 고무 휠 + Rocker-Bogie로 비정형 장애물 환경에서도 안정 이동",
            "자동 도킹: 거리/비전 센서 기반 정렬로 목표 위치에 정밀 접근",
            "확장형 상부 모듈: 운반 대상에 맞춘 탑모듈/지그/거치대 연동",
          ]}
          video={amrVideo}
          icon={Bot}
          ctaText="현장 바닥/동선 기반 적용 진단 요청"
        />
        <FeatureGrid
          title="핵심 기능"
          subtitle="산업현장 특화형 AMR의 차별화된 기술력"
          features={features}
        />
        <div className="py-8 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto px-4">
            주행 성능·도킹 정밀도는 바닥 조건/적재/속도/센서 구성에 따라 달라질 수 있습니다.
          </p>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
