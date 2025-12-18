import SolutionCard from "./SolutionCard";
import { Cpu, Bot, Cog } from "lucide-react";
import aiImage from "@assets/generated_images/ai_robotic_welding_automation.png";

const cuttingImage = "https://res.cloudinary.com/dzu2wygbi/image/upload/v1766044887/%ED%98%95%EA%B0%95%EC%A0%88%EB%8B%A8%EC%9E%A5%EB%B9%84%EC%82%AC%EC%A7%841_mvj532.jpg";
const amrImage = "https://res.cloudinary.com/dzu2wygbi/image/upload/v1766024118/mainAMR.jpg";

// todo: remove mock functionality - replace with API data
const solutions = [
  {
    title: "플라즈마 / 레이저 형강 절단 토탈 시스템",
    description:
      "소재 투입부터 배출까지, 형강 가공의 완전 자동화(Full Automation)를 실현하다. 2D부터 3D까지 원스톱 형강 절단 자동화를 제공합니다.",
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
    title: "산업현장 특화형 Omnidirectional AMR",
    description:
      "어떤 바닥 조건에서도 흔들림 없이. 전방향으로 움직이는 산업현장형 AMR 로봇. 험지 대응 설계와 자동 도킹 기능을 제공합니다.",
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
    title: "AI 용접 자동화 솔루션",
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
