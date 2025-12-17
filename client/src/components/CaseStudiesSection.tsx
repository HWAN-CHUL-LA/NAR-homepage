import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "./CaseStudyCard";
import { ArrowRight } from "lucide-react";
import cuttingImage from "@assets/generated_images/industrial_robotics_steel_cutting.png";
import amrImage from "@assets/generated_images/rugged_amr_industrial_transport.png";
import pipelineImage from "@assets/generated_images/automated_steel_production_pipeline.png";

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
];

export default function CaseStudiesSection() {
  return (
    <section className="py-16 lg:py-24" data-testid="case-studies-section">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              현장에서 검증된 적용 사례
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              국내 대표 조선·철강 기업에서 실제 운영 중인 자동화 솔루션 사례를
              확인하세요
            </p>
          </div>
          <Link href="/cases" data-testid="link-all-cases">
            <Button variant="outline" className="gap-2 flex-shrink-0">
              전체 사례 보기
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} {...caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
