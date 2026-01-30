import { useState } from "react"
import { Link } from "wouter"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { ChevronRight, Download, MessageSquare, Cpu, Bot, Cog, Zap, Shield, Target, Settings } from "lucide-react"
import cuttingImage from "@assets/generated_images/industrial_robotics_steel_cutting.png"
import amrImage from "@assets/generated_images/rugged_amr_industrial_transport.png"
import aiImage from "@assets/generated_images/ai_robotic_welding_automation.png"

// 제품 데이터
const productGroups = {
  cutting: [
    { name: "Operating SW", productId: "operating-sw", description: "네스팅/보정/운영을 위한 통합 소프트웨어 패키지" },
    { name: "Sensing Package", productId: "sensing-package", description: "거리/비전 센서 기반 형상 인식 및 보정 시스템" },
    { name: "Infeed Module", productId: "infeed-module", description: "컨베이어/푸셔/트래커 기반 자재 인입 시스템" },
    { name: "Laser Cutting Cell", productId: "laser-cutting-cell", description: "고정밀 파이버 레이저 기반 형강 절단 셀" },
    { name: "Plasma Cutting Cell", productId: "plasma-cutting-cell", description: "고속 플라즈마 기반 중후판 형강 절단 셀" },
  ],
  amr: [
    { name: "Rugged AMR Base", productId: "rugged-amr-base", description: "Swerve Drive + Rocker-Bogie 기반 험지 대응 AMR 플랫폼" },
    { name: "Auto Docking Module", productId: "auto-docking-module", description: "정밀 자동 도킹을 위한 센서 및 제어 모듈" },
    { name: "Payload Modules", productId: "payload-modules", description: "스크랩/팔레트/랙/컨베이어 등 맞춤형 상부 모듈" },
    { name: "Fleet Management", productId: "fleet-management", description: "다수 AMR 통합 운영을 위한 Fleet 관리 시스템" },
  ],
  ai: [
    { name: "Smart Teaching Tool", productId: "smart-teaching-tool", description: "숙련공의 작업 감각을 데이터화하는 스마트 티칭 도구" },
    { name: "3D Vision Package", productId: "3d-vision-package", description: "고정밀 3D 형상 인식을 위한 비전 시스템" },
    { name: "AI Control Module", productId: "ai-control-module", description: "Physical-AI 기반 적응형 로봇 제어 모듈" },
  ],
}

// 카테고리별 공통 정보
const categoryInfo = {
  cutting: {
    title: "Cutting System",
    subtitle: "플라즈마 / 레이저 형강 절단 토탈 시스템",
    description: "소재 투입부터 배출까지, 형강 가공의 완전 자동화(Full Automation)를 실현합니다. 2D부터 3D까지 원스톱 형강 절단 자동화를 제공하며, 조선·건설 현장에 최적화된 토탈 솔루션입니다.",
    image: cuttingImage,
    features: [
      { icon: Cpu, title: "One-Stop 자동화", desc: "인입→절단→배출까지 무인 흐름" },
      { icon: Zap, title: "2D+3D 통합 대응", desc: "다양한 형강 소재/형상 적용" },
      { icon: Target, title: "정밀 보정 기반 절단", desc: "휨/비틀림 변수 반영" },
      { icon: Settings, title: "통합 운영 SW", desc: "실시간 모니터링 대시보드" },
    ],
    highlights: [
      { title: "광범위한 범용성", desc: "다양한 형강 규격(H형강, 채널, 앵글 등)과 두께에 대응 가능한 유연한 시스템" },
      { title: "검증된 안정성", desc: "HD현대중공업, 한화오션 등 국내 대표 조선소에서 검증된 기술력" },
      { title: "간편한 설치", desc: "기존 설비와의 인터페이스를 고려한 모듈화 설계로 빠른 도입 가능" },
    ],
  },
  amr: {
    title: "Rugged AMR",
    subtitle: "산업현장 특화형 Omnidirectional AMR",
    description: "어떤 바닥 조건에서도 흔들림 없이. 전방향으로 움직이는 산업현장형 AMR 로봇입니다. Swerve Drive 기반 전방향 주행과 Rocker-Bogie 샤시로 험지 대응 설계를 갖추고 있습니다.",
    image: amrImage,
    features: [
      { icon: Bot, title: "전방향 주행", desc: "Swerve Drive 기반 제자리 회전" },
      { icon: Shield, title: "험지 대응 설계", desc: "Rocker-Bogie 샤시 탑재" },
      { icon: Target, title: "자동 도킹", desc: "6mm 이하 정밀 도킹 검증" },
      { icon: Cpu, title: "Fleet 관리", desc: "다수 로봇 통합 운영" },
    ],
    highlights: [
      { title: "산업현장 특화", desc: "먼지, 철분, 요철 바닥 등 열악한 환경에서도 안정적인 주행 성능" },
      { title: "모듈식 상부 장치", desc: "스크랩 박스, 팔레트, 컨베이어 등 용도별 맞춤 페이로드 모듈" },
      { title: "자율주행 기술", desc: "LiDAR SLAM 기반 자율주행과 충돌 회피 시스템" },
    ],
  },
  ai: {
    title: "AI Brain Robot",
    subtitle: "AI 용접 자동화 솔루션",
    description: "숙련공의 감각을 데이터로, 로봇의 실력으로. 3D 비전과 스마트 티칭을 결합한 지능형 자동화 솔루션입니다. Physical-AI 기반으로 현장 변동에 적응하는 차세대 용접 자동화를 구현합니다.",
    image: aiImage,
    features: [
      { icon: Cog, title: "멀티모달 융합", desc: "3D Vision + Smart Teaching" },
      { icon: Cpu, title: "숙련 행동 복제", desc: "안정적인 품질 목표 제어" },
      { icon: Zap, title: "현장 변동 대응", desc: "비정형 변수 적응" },
      { icon: Shield, title: "Physical-AI", desc: "실시간 학습 기반 제어" },
    ],
    highlights: [
      { title: "숙련공 노하우 디지털화", desc: "베테랑 용접사의 작업 패턴을 데이터화하여 로봇에 이식" },
      { title: "적응형 제어", desc: "용접 중 발생하는 변수(갭, 변형 등)에 실시간으로 대응" },
      { title: "품질 일관성", desc: "AI 기반 품질 모니터링으로 균일한 용접 품질 확보" },
    ],
  },
}

const categories = [
  { id: "cutting", label: "Cutting System", icon: Cpu },
  { id: "amr", label: "Rugged AMR", icon: Bot },
  { id: "ai", label: "AI Brain Robot", icon: Cog },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<"cutting" | "amr" | "ai">("cutting")
  const currentInfo = categoryInfo[activeCategory]
  const currentProducts = productGroups[activeCategory]

  return (
    <div className="min-h-screen bg-background" data-testid="page-products">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Column - Sticky Sidebar */}
            <div className="w-full lg:w-[280px] lg:sticky lg:top-24 lg:self-start flex-shrink-0">
              {/* Category Tabs */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">제품</h1>
                <p className="text-sm text-gray-600">카테고리를 선택하세요</p>
              </div>

              <div className="space-y-1 mb-6">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as "cutting" | "amr" | "ai")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                      activeCategory === cat.id
                        ? "bg-primary text-white"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <cat.icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{cat.label}</span>
                  </button>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6" />

              {/* Product List */}
              <div className="mb-6">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  제품 목록
                </h3>
                <div className="space-y-1">
                  {currentProducts.map((product) => (
                    <Link key={product.productId} href={`/products/${product.productId}`}>
                      <div className="group flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-50 cursor-pointer transition-colors">
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                        <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                          {product.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6" />

              {/* CTA Buttons */}
              <div className="space-y-2">
                <Link href="/contact">
                  <Button className="w-full gap-2" size="sm">
                    <MessageSquare className="w-4 h-4" />
                    솔루션 문의하기
                  </Button>
                </Link>
                <Button variant="outline" className="w-full gap-2" size="sm">
                  <Download className="w-4 h-4" />
                  브로슈어 다운로드
                </Button>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 min-w-0">
              {/* Hero Image */}
              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-8">
                <img
                  src={currentInfo.image}
                  alt={currentInfo.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overview */}
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-primary">{currentInfo.title}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {currentInfo.subtitle}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {currentInfo.description}
                </p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-8" />

              {/* Features */}
              <div className="mb-12">
                <h3 className="text-lg font-bold text-gray-900 mb-6">주요 기능</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {currentInfo.features.map((feature, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-sm text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-500">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-8" />

              {/* Highlights */}
              <div className="mb-12">
                <h3 className="text-lg font-bold text-gray-900 mb-6">특장점</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentInfo.highlights.map((highlight, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5">
                      <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{highlight.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-8" />

              {/* Bottom CTA */}
              <div className="bg-gray-50 rounded-xl p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {currentInfo.title} 도입 문의
                    </h3>
                    <p className="text-sm text-gray-600">
                      전문 컨설턴트가 현장에 맞는 최적의 솔루션을 제안해 드립니다.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Link href="/contact">
                      <Button className="gap-2">
                        <MessageSquare className="w-4 h-4" />
                        문의하기
                      </Button>
                    </Link>
                    <Button variant="outline" className="gap-2">
                      <Download className="w-4 h-4" />
                      브로슈어
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
