import SolutionCard from "../SolutionCard";
import { Cpu } from "lucide-react";
import cuttingImage from "@assets/generated_images/industrial_robotics_steel_cutting.png";

export default function SolutionCardExample() {
  return (
    <div className="max-w-md">
      <SolutionCard
        title="Smart Cutting System"
        description="형강을 올려놓기만 하면, 절단부터 배출까지 한 번에. 2D부터 3D까지 원스톱 절단 자동화를 제공합니다."
        features={[
          "One-Stop 자동화: 인입→절단→배출까지 무인 흐름",
          "2D+3D 통합 대응: 다양한 형강 소재/형상 적용",
          "정밀 보정 기반 절단: 휨/비틀림 변수 반영",
        ]}
        icon={Cpu}
        href="/solutions/cutting"
        image={cuttingImage}
      />
    </div>
  );
}
