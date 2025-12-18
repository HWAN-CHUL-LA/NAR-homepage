import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@assets/generated_images/shipyard_industrial_facility_exterior.png";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center"
      data-testid="hero-section"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
            data-testid="hero-headline"
          >
            조선·철강 제조 혁신을 위한
            <br />
            <span className="text-primary">토탈 자동화 솔루션</span>
          </h1>

          <p
            className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl"
            data-testid="hero-subheadline"
          >
            형강 절단부터 자율 이송, 그리고 차세대 AI 기반 용접 자동화까지.
            HD현대중공업, 한화오션에서 검증된 기술력으로 현장을 혁신합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" data-testid="hero-cta-demo">
              <Button size="lg" className="gap-2">
                데모 요청
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/solutions" data-testid="hero-cta-solutions">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-white/10 border-white/20 text-white backdrop-blur-sm"
              >
                <Play className="w-4 h-4" />
                솔루션 둘러보기
              </Button>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm text-white/60 mb-4">신뢰할 수 있는 파트너</p>
            <div className="flex flex-wrap items-center gap-8">
              <div
                className="text-white/80 font-semibold text-sm lg:text-base"
                data-testid="partner-hd"
              >
                HD현대중공업
              </div>
              <div
                className="text-white/80 font-semibold text-sm lg:text-base"
                data-testid="partner-hanwha"
              >
                한화오션
              </div>
              <div
                className="text-white/80 font-semibold text-sm lg:text-base"
                data-testid="partner-posco"
              >
              
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
