import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";

// todo: remove mock functionality
const packages = [
  {
    name: "Package A",
    title: "Cutting Cell Only",
    description: "절단 셀 무인화",
    features: [
      "형강 인입/정렬 자동화",
      "레이저 또는 플라즈마 절단",
      "배출/잔재 처리",
      "운영 SW 포함",
    ],
    recommended: false,
  },
  {
    name: "Package B",
    title: "Cutting + AMR Logistics",
    description: "절단 + 공정 간 이송 무인화",
    features: [
      "Package A 전체 포함",
      "Rugged AMR 도입",
      "자동 도킹 시스템",
      "물류 최적화 SW",
    ],
    recommended: true,
  },
  {
    name: "Package C",
    title: "Full Pipeline",
    description: "절단 + 이송 + 차세대 가공까지",
    features: [
      "Package B 전체 포함",
      "AI Brain Robot 연계",
      "통합 운영 시스템",
      "확장 로드맵 컨설팅",
    ],
    recommended: false,
  },
];

export default function PackageOptions() {
  return (
    <section className="py-16 bg-card" data-testid="package-options">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">도입 패키지</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            현장 상황과 목표에 맞는 단계별 도입 패키지를 제안합니다
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <Card
              key={idx}
              className={`relative ${
                pkg.recommended ? "border-primary" : ""
              }`}
              data-testid={`package-${pkg.name.toLowerCase().replace(/\s/g, "-")}`}
            >
              {pkg.recommended && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  추천
                </Badge>
              )}
              <CardHeader className="pb-4">
                <div className="text-sm text-muted-foreground">{pkg.name}</div>
                <h3 className="text-xl font-semibold">{pkg.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {pkg.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button
                    className="w-full gap-2"
                    variant={pkg.recommended ? "default" : "outline"}
                  >
                    상담 신청
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-8">
          도입 범위는 라인 구성·안전 요구사항·현장 운영 조건에 따라 단계적으로 설계합니다.
        </p>
      </div>
    </section>
  );
}
