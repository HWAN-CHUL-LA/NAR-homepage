import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTASection from "@/components/CTASection";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import cuttingImage from "@assets/generated_images/industrial_robotics_steel_cutting.png";
import amrImage from "@assets/generated_images/rugged_amr_industrial_transport.png";
import pipelineImage from "@assets/generated_images/automated_steel_production_pipeline.png";
import aiImage from "@assets/generated_images/ai_robotic_welding_automation.png";

// todo: remove mock functionality - replace with API data
const caseStudies = [
  {
    id: "hd-hyundai-cutting",
    title: "형강 절단 라인 무인화 구축",
    client: "HD현대중공업",
    industry: "조선",
    solution: "Smart Cutting",
    challenge: "기존 수동 절단 공정의 생산성 한계와 안전 위험 요소 존재",
    result: "절단 생산성 40% 향상, 품질 불량률 85% 감소",
    image: cuttingImage,
  },
  {
    id: "hanwha-amr",
    title: "조선소 고철 운반 자동화",
    client: "한화오션",
    industry: "조선",
    solution: "Rugged AMR",
    challenge: "비정형 바닥 환경에서의 중량물 이송 자동화 필요",
    result: "이송 인력 60% 절감, 24시간 무인 운영 실현",
    image: amrImage,
  },
  {
    id: "posco-pipeline",
    title: "철강 가공 라인 통합 자동화",
    client: "POSCO 계열사",
    industry: "철강",
    solution: "Unmanned Pipeline",
    challenge: "공정 간 단절로 인한 물류 병목 및 품질 추적 어려움",
    result: "전체 라인 택트타임 30% 단축, 실시간 품질 추적 구현",
    image: pipelineImage,
  },
  {
    id: "shipyard-cutting-2",
    title: "H빔 절단 자동화 시스템",
    client: "국내 조선사 A",
    industry: "조선",
    solution: "Smart Cutting",
    challenge: "H빔 형강의 복잡한 형상 절단 시 정밀도 확보 어려움",
    result: "절단 정밀도 99.5% 달성, 작업 시간 50% 단축",
    image: cuttingImage,
  },
  {
    id: "steel-amr",
    title: "철강 공장 물류 자동화",
    client: "국내 철강사 B",
    industry: "철강",
    solution: "Rugged AMR",
    challenge: "고온/분진 환경에서 안정적인 무인 물류 시스템 필요",
    result: "물류 효율 45% 개선, 안전사고 제로 달성",
    image: amrImage,
  },
  {
    id: "welding-poc",
    title: "AI 용접 자동화 PoC",
    client: "중공업사 C",
    industry: "중공업",
    solution: "AI Brain Robot",
    challenge: "숙련 용접공 부족 및 품질 편차 문제",
    result: "PoC 단계 성공적 완료, 본 도입 협의 중",
    image: aiImage,
  },
];

export default function CasesPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredCases =
    filter === "all"
      ? caseStudies
      : caseStudies.filter(
          (c) =>
            c.industry === filter ||
            c.solution.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-background" data-testid="page-cases">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">적용 사례</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            국내 대표 조선·철강 기업에서 실제 운영 중인 자동화 솔루션 사례입니다.
            각 사례에서 도입 과정과 성과를 확인하세요.
          </p>

          <Tabs
            defaultValue="all"
            className="w-full mb-8"
            onValueChange={setFilter}
          >
            <TabsList className="flex-wrap h-auto gap-2 bg-transparent p-0">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-testid="filter-all"
              >
                전체
              </TabsTrigger>
              <TabsTrigger
                value="조선"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-testid="filter-shipyard"
              >
                조선
              </TabsTrigger>
              <TabsTrigger
                value="철강"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-testid="filter-steel"
              >
                철강
              </TabsTrigger>
              <TabsTrigger
                value="cutting"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-testid="filter-cutting"
              >
                Cutting
              </TabsTrigger>
              <TabsTrigger
                value="amr"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-testid="filter-amr"
              >
                AMR
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} {...caseStudy} />
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                선택한 필터에 해당하는 사례가 없습니다.
              </p>
            </div>
          )}
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
