import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/CaseStudyCard";
import CTASection from "@/components/CTASection";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { caseStudies } from "@/lib/caseData";

export default function CasesPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredCases =
    filter === "all"
      ? caseStudies
      : caseStudies.filter(
          (c) =>
            c.industry === filter ||
            c.solution.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-background" data-testid="page-cases">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">적용 사례</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            국내 대표 조선·철강 기업에서 실제 운영 중인 자동화 솔루션 사례입니다.
            각 사례에서 도입 과정과 성과를 확인하세요.
          </p>

          <Tabs
            defaultValue="all"
            className="w-full mb-8"
            onValueChange={setFilter}
          >
            <TabsList className="flex-wrap h-auto gap-2 bg-transparent p-0">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-testid="filter-all"
              >
                전체
              </TabsTrigger>
              <TabsTrigger
                value="조선"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-testid="filter-shipyard"
              >
                조선
              </TabsTrigger>
              <TabsTrigger
                value="cutting"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-testid="filter-cutting"
              >
                Cutting
              </TabsTrigger>
              <TabsTrigger
                value="amr"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-testid="filter-amr"
              >
                AMR
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} {...caseStudy} />
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                선택한 필터에 해당하는 사례가 없습니다.
              </p>
            </div>
          )}
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
