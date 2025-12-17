import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  Ruler,
  Scissors,
  Truck,
  Cog,
  BarChart,
  ArrowRight,
} from "lucide-react";

// todo: remove mock functionality - may be updated
const steps = [
  {
    step: 1,
    icon: Package,
    title: "자재 인입/정렬",
    description: "컨베이어 기반 자재 자동 인입 및 정렬",
    status: "active",
  },
  {
    step: 2,
    icon: Ruler,
    title: "비정형 보정",
    description: "휨/비틀림 변수를 반영한 기준점 보정",
    status: "active",
  },
  {
    step: 3,
    icon: Scissors,
    title: "절단 자동화",
    description: "레이저/플라즈마 기반 무인 절단",
    status: "active",
  },
  {
    step: 4,
    icon: Truck,
    title: "AMR 이송",
    description: "절단품/고철 자동 이송 (험지 대응)",
    status: "active",
  },
  {
    step: 5,
    icon: Cog,
    title: "AI 용접/사상",
    description: "Physical-AI 기반 지능형 가공",
    status: "future",
  },
  {
    step: 6,
    icon: BarChart,
    title: "통합 운영",
    description: "공정 데이터 연결 및 품질 추적",
    status: "future",
  },
];

export default function PipelineSteps() {
  return (
    <section className="py-16" data-testid="pipeline-steps">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            단계별 자동화 파이프라인
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            로봇 '한 대'가 아니라, 현장 전체 흐름이 무인으로 이어지는 파이프라인을 설계합니다
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, idx) => (
            <Card
              key={idx}
              className={`p-6 relative ${
                step.status === "future" ? "border-dashed opacity-80" : ""
              }`}
              data-testid={`step-${step.step}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-md flex items-center justify-center flex-shrink-0 ${
                    step.status === "future"
                      ? "bg-muted"
                      : "bg-primary/10"
                  }`}
                >
                  <step.icon
                    className={`w-6 h-6 ${
                      step.status === "future"
                        ? "text-muted-foreground"
                        : "text-primary"
                    }`}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-muted-foreground">
                      Step {step.step}
                    </span>
                    {step.status === "future" && (
                      <Badge variant="outline" className="text-xs">
                        Future
                      </Badge>
                    )}
                  </div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
              {idx < steps.length - 1 && idx % 3 !== 2 && (
                <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground hidden lg:block" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
