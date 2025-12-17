import CaseStudyCard from "../CaseStudyCard";
import cuttingImage from "@assets/generated_images/industrial_robotics_steel_cutting.png";

export default function CaseStudyCardExample() {
  return (
    <div className="max-w-md">
      <CaseStudyCard
        id="hd-hyundai-cutting"
        title="형강 절단 라인 무인화 구축"
        client="HD현대중공업"
        industry="조선"
        solution="Smart Cutting"
        challenge="기존 수동 절단 공정의 생산성 한계와 안전 위험 요소 존재"
        result="절단 생산성 40% 향상, 품질 불량률 85% 감소"
        image={cuttingImage}
      />
    </div>
  );
}
