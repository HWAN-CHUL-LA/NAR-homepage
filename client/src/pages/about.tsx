import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Award,
  Users,
  Building,
  Lightbulb,
  Shield,
} from "lucide-react";

// todo: remove mock functionality - content may be updated
const milestones = [
  { year: "2010", event: "회사 설립, 산업용 로봇 연구 시작" },
  { year: "2015", event: "첫 형강 절단 자동화 시스템 개발" },
  { year: "2018", event: "HD현대중공업 첫 납품" },
  { year: "2020", event: "Rugged AMR 프로토타입 완성" },
  { year: "2022", event: "한화오션 AMR 시스템 납품" },
  { year: "2024", event: "AI Brain Robot 개발 착수" },
  { year: "2025", event: "토탈 무인 파이프라인 통합 솔루션 출시" },
];

const values = [
  {
    icon: Target,
    title: "현장 중심",
    description: "실제 산업 현장의 문제를 해결하는 것에 집중합니다.",
  },
  {
    icon: Lightbulb,
    title: "기술 혁신",
    description: "끊임없는 R&D로 차별화된 기술력을 확보합니다.",
  },
  {
    icon: Users,
    title: "협력 파트너십",
    description: "고객과 함께 성장하는 파트너가 되겠습니다.",
  },
  {
    icon: Shield,
    title: "안전과 품질",
    description: "안전하고 신뢰할 수 있는 솔루션을 제공합니다.",
  },
];

const partners = [
  "HD현대중공업",
  "한화오션",
  "POSCO",
  "현대제철",
  "동국제강",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-about">
      <Header />
      <main className="pt-20">
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-4xl font-bold mb-6">
                조선·철강 산업의
                <br />
                자동화 혁신을 이끕니다
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                ROBOTICS는 2010년 설립 이래 조선·철강 산업에 특화된 자동화 솔루션을
                개발해왔습니다. HD현대중공업, 한화오션 등 국내 대표 중공업 기업에서
                검증된 기술력을 바탕으로, 형강 절단부터 무인 물류, 차세대 AI 기반
                용접 자동화까지 토탈 솔루션을 제공합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <Card className="p-4">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">년간 기술 개발</div>
                </Card>
                <Card className="p-4">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">특허/SW 등록</div>
                </Card>
                <Card className="p-4">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">전문 엔지니어</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card" id="technology">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              핵심 기술 & IP
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-semibold">특허 보유</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    형강 절단 보정 알고리즘, AMR 험지 주행 제어, 자동 도킹 시스템 등
                    핵심 기술에 대한 50건 이상의 국내외 특허를 보유하고 있습니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">형강 절단 보정</Badge>
                    <Badge variant="secondary">Swerve Drive 제어</Badge>
                    <Badge variant="secondary">자동 도킹</Badge>
                    <Badge variant="secondary">네스팅 알고리즘</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-semibold">인증 및 파트너</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    ISO 9001 품질경영시스템 인증, 산업안전 관련 인증을 획득하고,
                    주요 로봇 및 센서 제조사와 기술 파트너십을 맺고 있습니다.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">ISO 9001</Badge>
                    <Badge variant="secondary">CE 인증</Badge>
                    <Badge variant="secondary">FANUC 파트너</Badge>
                    <Badge variant="secondary">KUKA 파트너</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">핵심 가치</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <Card key={idx} className="p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">연혁</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-6">
                {milestones.map((milestone, idx) => (
                  <div key={idx} className="flex items-start gap-6 pl-8 relative">
                    <div className="absolute left-2.5 w-3 h-3 rounded-full bg-primary" />
                    <div className="text-lg font-semibold text-primary min-w-[60px]">
                      {milestone.year}
                    </div>
                    <div className="text-muted-foreground">{milestone.event}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16" id="partners">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">주요 고객사</h2>
            <div className="flex flex-wrap gap-8 items-center">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="text-lg font-semibold text-muted-foreground"
                  data-testid={`partner-${idx}`}
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
