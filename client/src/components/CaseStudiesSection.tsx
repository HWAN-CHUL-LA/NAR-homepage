import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "./CaseStudyCard";
import { ArrowRight } from "lucide-react";
import cuttingImage from "@assets/generated_images/industrial_robotics_steel_cutting.png";

// todo: remove mock functionality - replace with API data
const caseStudies = [
  {
    id: "hd-hyundai-scrap-clamping",
    title: "형강 끝단부 정밀 가공을 위한 스마트 보조 배출 시스템",
    client: "HD현대중공업",
    industry: "조선",
    solution: "Auxiliary Clamping",
    challenge: "인입 푸셔의 고정 한계 구간에서 소재 떨림 발생, 끝단부 가공 정밀도 저하",
    result: "잔재부 가공 오차 0.5mm 이내 달성, 자재 수율 극대화",
    image: cuttingImage,
  },
  {
    id: "hanwha-plasma-50m-install",
    title: "국내 최대 50m 초장축 형강 플라즈마 절단 라인 구축",
    client: "한화오션",
    industry: "조선",
    solution: "Mega-Scale Plasma",
    challenge: "초대형 선박 블록 생산을 위한 50m 장축 자재의 원스톱 가공 인프라 확보",
    result: "국내 최대 길이(50m) 가공 설비 구축 및 대형 자재 양산 체계 완성",
    image: cuttingImage,
  },
  {
    id: "sme-custom-solution",
    title: "중소 제조 현장 맞춤형 형강 절단 장비 및 전용 SW 구축",
    client: "중소 형강 가공 전문기업 B사",
    industry: "철강 가공",
    solution: "Custom Cutting System",
    challenge: "기성품 장비의 높은 도입 장벽과 현장 맞춤형 기능 부재",
    result: "현장 요구사항 100% 반영, 비숙련자 운용 효율 극대화",
    image: cuttingImage,
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
