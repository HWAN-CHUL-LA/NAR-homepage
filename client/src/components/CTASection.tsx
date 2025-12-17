import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24" data-testid="cta-section">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-primary rounded-lg p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            현장에 맞는 자동화 솔루션을 찾고 계신가요?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            전문 엔지니어가 현장 조건을 분석하고 최적의 도입 방안을 제안합니다.
            지금 상담을 신청하세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" data-testid="cta-consultation">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2"
              >
                <Phone className="w-4 h-4" />
                무료 상담 신청
              </Button>
            </Link>
            <Link href="/resources" data-testid="cta-brochure">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground"
              >
                <FileText className="w-4 h-4" />
                브로슈어 다운로드
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
