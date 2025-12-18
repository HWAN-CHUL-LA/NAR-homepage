import SolutionCard from "./SolutionCard";
import { Cpu, Bot, Cog, GitBranch } from "lucide-react";
import cuttingImage from "@assets/generated_images/industrial_robotics_steel_cutting.png";
import aiImage from "@assets/generated_images/ai_robotic_welding_automation.png";
import pipelineImage from "@assets/generated_images/automated_steel_production_pipeline.png";

const amrImage = "https://res.cloudinary.com/dzu2wygbi/image/upload/v1766024118/mainAMR.jpg";

// todo: remove mock functionality - replace with API data
const solutions = [
  {
    title: "Smart Cutting System",
    description:
      "형강을 올려놓기만 하면, 절단부터 배출까지 한 번에. 2D부터 3D까지 원스톱 절단 자동화를 제공합니다.",
    features: [
      "One-Stop 자동화: 인입→절단→배출까지 무인 흐름",
      "2D+3D 통합 대응: 다양한 형강 소재/형상 적용",
      "정밀 보정 기반 절단: 휨/비틀림 변수 반영",
    ],
    icon: Cpu,
    href: "/solutions/cutting",
    image: cuttingImage,
  },
  {
    title: "Rugged Omni AMR",
    description:
      "울퉁불퉁한 산업 바닥에서도, 전방향으로 정확하게 움직이는 AMR. 험지 대응 설계와 자동 도킹 기능을 제공합니다.",
    features: [
      "전방향 주행/제자리 회전: Swerve Drive 기반",
      "험지 대응 설계: Rocker-Bogie 샤시 탑재",
      "자동 도킹: 6mm 이하 정밀 도킹 검증",
    ],
    icon: Bot,
    href: "/solutions/amr",
    image: amrImage,
  },
  {
    title: "AI Brain Robot",
    description:
      "숙련공의 감각을 데이터로, 로봇의 실력으로. 3D 비전과 스마트 티칭을 결합한 지능형 자동화 솔루션입니다.",
    features: [
      "멀티모달 융합: 3D Vision + Smart Teaching",
      "숙련 행동 복제: 안정적인 품질 목표 제어",
      "현장 변동 대응: 비정형 변수 적응",
    ],
    icon: Cog,
    href: "/solutions/ai-brain",
    image: aiImage,
  },
  {
    title: "Unmanned Pipeline",
    description:
      "절단부터 이송, 그리고 차세대 용접 자동화까지. 공정을 하나로 연결하는 토탈 무인 자동화 파이프라인입니다.",
    features: [
      "단계별 자동화: 인입→절단→배출→이송",
      "통합 운영: 라인/물류/품질 추적 관리",
      "확장 로드맵: AI 기반 용접 자동화",
    ],
    icon: GitBranch,
    href: "/solutions/pipeline",
    image: pipelineImage,
  },
];

export default function SolutionsGrid() {
  return (
    <section className="py-16 lg:py-24" data-testid="solutions-grid">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            검증된 자동화 솔루션
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            조선·철강 현장에 최적화된 4가지 핵심 솔루션으로 생산성을 혁신합니다
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <SolutionCard key={solution.href} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
