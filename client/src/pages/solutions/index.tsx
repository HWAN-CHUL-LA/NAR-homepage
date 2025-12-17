import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionsGrid from "@/components/SolutionsGrid";
import CTASection from "@/components/CTASection";

export default function SolutionsIndex() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-solutions">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">솔루션</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            조선·철강 현장에 최적화된 4가지 핵심 솔루션으로 생산성을 혁신합니다.
            각 솔루션은 독립적으로 도입하거나 통합 파이프라인으로 연결할 수 있습니다.
          </p>
        </div>
        <SolutionsGrid />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
