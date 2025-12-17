import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Wrench, Users } from "lucide-react";

// todo: remove mock functionality - content may be updated
const reasons = [
  {
    icon: Shield,
    title: "현장 검증 레퍼런스",
    description:
      "HD현대중공업, 한화오션 등 국내 대표 조선·철강 기업에서 실제 운영 중인 솔루션입니다.",
  },
  {
    icon: Award,
    title: "기술 특허 보유",
    description:
      "50건 이상의 특허 및 소프트웨어 등록으로 차별화된 핵심 기술력을 보유하고 있습니다.",
  },
  {
    icon: Wrench,
    title: "맞춤형 설계",
    description:
      "현장 조건과 자재 스펙에 맞는 최적의 시스템 구성을 제안하고 설치합니다.",
  },
  {
    icon: Users,
    title: "전담 지원 체계",
    description:
      "설치부터 운영, 유지보수까지 전문 엔지니어의 체계적인 지원을 제공합니다.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-16 lg:py-24 bg-card" data-testid="why-us-section">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            왜 ROBOTICS인가?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            15년 이상의 기술 개발과 현장 적용 경험을 바탕으로
            신뢰할 수 있는 자동화 파트너십을 제공합니다
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <Card key={idx} className="p-6" data-testid={`reason-${idx}`}>
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
