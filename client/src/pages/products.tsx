import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import cuttingImage from "@assets/generated_images/industrial_robotics_steel_cutting.png";
import amrImage from "@assets/generated_images/rugged_amr_industrial_transport.png";
import aiImage from "@assets/generated_images/ai_robotic_welding_automation.png";

// todo: remove mock functionality - replace with API data
const productGroups = {
  cutting: [
    {
      name: "Operating SW",
      category: "Cutting System Products",
      description: "네스팅/보정/운영을 위한 통합 소프트웨어 패키지",
      specs: ["자동 네스팅 알고리즘", "실시간 보정 기능", "운영 모니터링 대시보드"],
      image: cuttingImage,
    },
    {
      name: "Sensing Package",
      category: "Cutting System Products",
      description: "거리/비전 센서 기반 형상 인식 및 보정 시스템",
      specs: ["3D 비전 카메라", "레이저 거리 센서", "형상 자동 인식"],
      image: cuttingImage,
    },
    {
      name: "Infeed Module",
      category: "Cutting System Products",
      description: "컨베이어/푸셔/트래커 기반 자재 인입 시스템",
      specs: ["롤러 컨베이어", "자동 정렬 푸셔", "위치 트래킹"],
      image: cuttingImage,
    },
    {
      name: "Laser Cutting Cell",
      category: "Cutting System Products",
      description: "고정밀 파이버 레이저 기반 형강 절단 셀",
      specs: ["출력: 6kW~12kW", "절단 두께: ~25mm", "위치 정밀도: ±0.1mm"],
      image: cuttingImage,
    },
    {
      name: "Plasma Cutting Cell",
      category: "Cutting System Products",
      description: "고속 플라즈마 기반 중후판 형강 절단 셀",
      specs: ["출력: 최대 400A", "절단 두께: ~50mm", "고속 절단 지원"],
      image: cuttingImage,
    },
    {
      name: "Outfeed & Scrap",
      category: "Cutting System Products",
      description: "절단품 배출 및 잔재 자동 처리 시스템",
      specs: ["자동 분류 시스템", "스크랩 수거함", "배출 컨베이어"],
      image: cuttingImage,
    },
  ],
  amr: [
    {
      name: "Rugged AMR Base",
      category: "Rugged AMR Products",
      description: "Swerve Drive + Rocker-Bogie 기반 험지 대응 AMR 플랫폼",
      specs: ["최대 적재: 1,000kg", "전방향 이동", "경사면 주행 가능"],
      image: amrImage,
    },
    {
      name: "Auto Docking Module",
      category: "Rugged AMR Products",
      description: "정밀 자동 도킹을 위한 센서 및 제어 모듈",
      specs: ["도킹 정밀도: ±6mm", "비전/거리 센서", "자동 정렬"],
      image: amrImage,
    },
    {
      name: "Payload Modules",
      category: "Rugged AMR Products",
      description: "스크랩/팔레트/랙/컨베이어 등 맞춤형 상부 모듈",
      specs: ["모듈식 설계", "다양한 적재 옵션", "빠른 교체 가능"],
      image: amrImage,
    },
    {
      name: "Fleet Management",
      category: "Rugged AMR Products",
      description: "다수 AMR 통합 운영을 위한 Fleet 관리 시스템",
      specs: ["실시간 위치 추적", "작업 할당 최적화", "충돌 회피"],
      image: amrImage,
    },
  ],
  ai: [
    {
      name: "Smart Teaching Tool",
      category: "AI Brain Robot Products",
      description: "숙련공의 작업 감각을 데이터화하는 스마트 티칭 도구",
      specs: ["동작 캡처", "힘/속도 감지", "학습 데이터 생성"],
      image: aiImage,
      isComingSoon: true,
    },
    {
      name: "3D Vision Package",
      category: "AI Brain Robot Products",
      description: "고정밀 3D 형상 인식을 위한 비전 시스템",
      specs: ["고해상도 스캔", "실시간 처리", "형상 분석"],
      image: aiImage,
      isComingSoon: true,
    },
    {
      name: "AI Control Module",
      category: "AI Brain Robot Products",
      description: "Physical-AI 기반 적응형 로봇 제어 모듈",
      specs: ["실시간 학습", "변동 대응", "품질 최적화"],
      image: aiImage,
      isComingSoon: true,
    },
  ],
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-products">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">제품</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            각 솔루션을 구성하는 개별 제품군입니다. 현장 조건에 맞게 모듈별로 선택하거나
            통합 패키지로 도입할 수 있습니다.
          </p>

          <Tabs defaultValue="cutting" className="w-full">
            <TabsList className="w-full justify-start mb-8 flex-wrap h-auto gap-2 bg-transparent p-0">
              <TabsTrigger
                value="cutting"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-testid="tab-cutting"
              >
                Cutting System
              </TabsTrigger>
              <TabsTrigger
                value="amr"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-testid="tab-amr"
              >
                Rugged AMR
              </TabsTrigger>
              <TabsTrigger
                value="ai"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                data-testid="tab-ai"
              >
                AI Brain Robot
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cutting">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productGroups.cutting.map((product) => (
                  <ProductCard key={product.name} {...product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="amr">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productGroups.amr.map((product) => (
                  <ProductCard key={product.name} {...product} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ai">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productGroups.ai.map((product) => (
                  <ProductCard key={product.name} {...product} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
