import FeatureGrid from "../FeatureGrid";
import { Zap, Target, Repeat, Settings, Shield, BarChart } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "One-Stop 자동화",
    description:
      "인입 → 정렬/보정 → 절단 → 배출/잔재 처리까지 무인 흐름 설계",
  },
  {
    icon: Target,
    title: "정밀 보정 절단",
    description: "휨/비틀림 등 비정형 변수를 반영해 기준점을 보정합니다",
  },
  {
    icon: Repeat,
    title: "Auto-Nesting",
    description: "자재 손실을 줄이도록 절단 계획을 자동 최적화합니다",
  },
  {
    icon: Settings,
    title: "Laser / Plasma",
    description: "두 가지 절단 에너지 옵션으로 현장에 맞는 구성 제안",
  },
  {
    icon: Shield,
    title: "안전 설계",
    description: "무인 운영 환경에 맞춘 안전 인터락 시스템 적용",
  },
  {
    icon: BarChart,
    title: "운영 데이터",
    description: "절단 품질/효율 데이터를 실시간으로 모니터링",
  },
];

export default function FeatureGridExample() {
  return (
    <FeatureGrid
      title="핵심 기능"
      subtitle="Smart Cutting System의 차별화된 기술력"
      features={features}
    />
  );
}
