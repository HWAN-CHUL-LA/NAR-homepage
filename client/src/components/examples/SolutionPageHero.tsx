import SolutionPageHero from "../SolutionPageHero";
import { Cpu } from "lucide-react";
import cuttingImage from "@assets/generated_images/industrial_robotics_steel_cutting.png";

export default function SolutionPageHeroExample() {
  return (
    <SolutionPageHero
      title="Smart Cutting System"
      headline="형강을 올려놓기만 하면, 절단부터 배출까지 한 번에."
      subheadline="2D(Flat Bar)부터 3D(H-Beam·파이프·앵글)까지, 설계 도면 기준으로 원스톱 절단 자동화를 제공합니다. Laser / Plasma 두 가지 절단 에너지 옵션을 보유하고, 현장에 맞는 최적 구성을 제안합니다."
      benefits={[
        "One-Stop 자동화: 인입 → 정렬/보정 → 절단 → 배출/잔재 처리까지 무인 흐름 설계",
        "2D+3D 통합 대응: 다양한 형강 소재/형상에 대한 적용 범위 확장",
        "정밀 보정 기반 절단: 휨/비틀림 등 비정형 변수를 반영해 기준점을 보정",
        "현장 검증 레퍼런스: HD현대중공업, 한화오션 납품 및 운용 경험 기반",
      ]}
      image={cuttingImage}
      icon={Cpu}
    />
  );
}
