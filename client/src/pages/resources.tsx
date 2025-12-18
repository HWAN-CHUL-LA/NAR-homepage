import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourceCard from "@/components/ResourceCard";
import CTASection from "@/components/CTASection";
import cuttingImage from "@assets/generated_images/industrial_robotics_steel_cutting.png";
import amrImage from "@assets/generated_images/rugged_amr_industrial_transport.png";
import aiImage from "@assets/generated_images/ai_robotic_welding_automation.png";

// todo: remove mock functionality - replace with API data
const resources = {
  brochures: [
    {
      title: "Smart Cutting System 브로슈어",
      description:
        "형강 절단 토탈 솔루션의 주요 기능과 적용 사례를 담은 제품 소개서입니다.",
      type: "brochure" as const,
      fileSize: "PDF 4.2MB",
      thumbnail: cuttingImage,
    },
    {
      title: "산업현장 특화형 Omnidirectional AMR 브로슈어",
      description:
        "산업현장 특화형 AMR의 기술 사양과 적용 가능 시나리오를 소개합니다.",
      type: "brochure" as const,
      fileSize: "PDF 3.8MB",
      thumbnail: amrImage,
    },
    {
      title: "AI Brain Robot 기술 소개",
      description:
        "Physical-AI 기반 지능형 자동화 솔루션의 개발 방향과 로드맵을 공유합니다.",
      type: "brochure" as const,
      fileSize: "PDF 2.9MB",
      thumbnail: aiImage,
    },
  ],
  videos: [
    {
      title: "Smart Cutting System 데모 영상",
      description:
        "형강 인입부터 절단, 배출까지 무인 운영 과정을 보여주는 데모 영상입니다.",
      type: "video" as const,
      duration: "3:45",
      videoUrl: "https://res.cloudinary.com/dzu2wygbi/video/upload/형강절단로봇_최종본_zd8na3.mov",
    },
    {
      title: "Rugged AMR 주행 테스트",
      description:
        "비정형 바닥 환경에서의 전방향 주행과 자동 도킹 테스트 영상입니다.",
      type: "video" as const,
      duration: "2:30",
      thumbnail: amrImage,
    },
    {
      title: "현장 적용 사례 인터뷰",
      description:
        "HD현대중공업 담당자가 들려주는 스마트 절단 시스템 도입 후기입니다.",
      type: "video" as const,
      duration: "5:12",
      thumbnail: cuttingImage,
    },
  ],
  specs: [
    {
      title: "Laser Cutting Cell 스펙시트",
      description: "레이저 절단 셀의 상세 기술 사양서입니다.",
      type: "spec" as const,
      fileSize: "PDF 1.2MB",
    },
    {
      title: "Plasma Cutting Cell 스펙시트",
      description: "플라즈마 절단 셀의 상세 기술 사양서입니다.",
      type: "spec" as const,
      fileSize: "PDF 1.1MB",
    },
    {
      title: "Rugged AMR Base 스펙시트",
      description: "AMR 플랫폼의 상세 기술 사양서입니다.",
      type: "spec" as const,
      fileSize: "PDF 980KB",
    },
  ],
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-resources">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">리소스</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            브로슈어, 영상, 기술 사양서 등 솔루션에 대한 상세 자료를 다운로드하세요.
          </p>

          <section className="mb-16" id="brochure">
            <h2 className="text-2xl font-semibold mb-6">브로슈어 / 카탈로그</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resources.brochures.map((resource) => (
                <ResourceCard key={resource.title} {...resource} />
              ))}
            </div>
          </section>

          <section className="mb-16" id="videos">
            <h2 className="text-2xl font-semibold mb-6">영상</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.videos.map((resource) => (
                <ResourceCard key={resource.title} {...resource} />
              ))}
            </div>
          </section>

          <section className="mb-16" id="downloads">
            <h2 className="text-2xl font-semibold mb-6">스펙시트 / 기술 자료</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.specs.map((resource) => (
                <ResourceCard key={resource.title} {...resource} />
              ))}
            </div>
          </section>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
