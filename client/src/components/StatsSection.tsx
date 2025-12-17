import { Card } from "@/components/ui/card";

// todo: remove mock functionality - replace with real stats
const stats = [
  { value: "15+", label: "년간 기술 개발", suffix: "" },
  { value: "50", label: "특허 및 SW 등록", suffix: "+" },
  { value: "99.2", label: "절단 정밀도", suffix: "%" },
  { value: "24/7", label: "무인 운영 실현", suffix: "" },
];

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-20 bg-card" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <Card
              key={idx}
              className="p-6 text-center"
              data-testid={`stat-${idx}`}
            >
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
