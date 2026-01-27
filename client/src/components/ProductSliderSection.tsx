import { useState, useRef, useEffect } from "react"
import { Link } from "wouter"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Controller } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import { ChevronLeft, ChevronRight, Plus, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

import "swiper/css"
import "swiper/css/navigation"

import cuttingImage from "@assets/generated_images/industrial_robotics_steel_cutting.png"
import amrImage from "@assets/generated_images/rugged_amr_industrial_transport.png"
import aiImage from "@assets/generated_images/ai_robotic_welding_automation.png"

interface Product {
  name: string
  productId: string
  category: string
  description: string
  specs: string[]
  image?: string
  videoUrl?: string
  isComingSoon?: boolean
}

const productGroups: Record<string, Product[]> = {
  cutting: [
    {
      name: "Operating SW",
      productId: "operating-sw",
      category: "Cutting System Products",
      description: "네스팅/보정/운영을 위한 통합 소프트웨어 패키지",
      specs: ["자동 네스팅 알고리즘", "실시간 보정 기능", "운영 모니터링 대시보드"],
      image: cuttingImage,
    },
    {
      name: "Sensing Package",
      productId: "sensing-package",
      category: "Cutting System Products",
      description: "거리/비전 센서 기반 형상 인식 및 보정 시스템",
      specs: ["3D 비전 카메라", "레이저 거리 센서", "형상 자동 인식"],
      image: cuttingImage,
    },
    {
      name: "Infeed Module",
      productId: "infeed-module",
      category: "Cutting System Products",
      description: "컨베이어/푸셔/트래커 기반 자재 인입 시스템",
      specs: ["롤러 컨베이어", "자동 정렬 푸셔", "위치 트래킹"],
      image: cuttingImage,
    },
    {
      name: "Laser Cutting Cell",
      productId: "laser-cutting-cell",
      category: "Cutting System Products",
      description: "고정밀 파이버 레이저 기반 형강 절단 셀",
      specs: ["출력: 6kW~12kW", "절단 두께: ~25mm", "위치 정밀도: ±0.1mm"],
      image: cuttingImage,
    },
    {
      name: "Plasma Cutting Cell",
      productId: "plasma-cutting-cell",
      category: "Cutting System Products",
      description: "고속 플라즈마 기반 중후판 형강 절단 셀",
      specs: ["출력: 최대 400A", "절단 두께: ~50mm", "고속 절단 지원"],
      image: cuttingImage,
    },
  ],
  amr: [
    {
      name: "Rugged AMR Base",
      productId: "rugged-amr-base",
      category: "Rugged AMR Products",
      description: "Swerve Drive + Rocker-Bogie 기반 험지 대응 AMR 플랫폼",
      specs: ["최대 적재: 1,000kg", "전방향 이동", "경사면 주행 가능"],
      image: amrImage,
    },
    {
      name: "Auto Docking Module",
      productId: "auto-docking-module",
      category: "Rugged AMR Products",
      description: "정밀 자동 도킹을 위한 센서 및 제어 모듈",
      specs: ["도킹 정밀도: ±6mm", "비전/거리 센서", "자동 정렬"],
      image: amrImage,
    },
    {
      name: "Payload Modules",
      productId: "payload-modules",
      category: "Rugged AMR Products",
      description: "스크랩/팔레트/랙/컨베이어 등 맞춤형 상부 모듈",
      specs: ["모듈식 설계", "다양한 적재 옵션", "빠른 교체 가능"],
      image: amrImage,
      isComingSoon: true,
    },
    {
      name: "Fleet Management",
      productId: "fleet-management",
      category: "Rugged AMR Products",
      description: "다수 AMR 통합 운영을 위한 Fleet 관리 시스템",
      specs: ["실시간 위치 추적", "작업 할당 최적화", "충돌 회피"],
      image: amrImage,
      isComingSoon: true,
    },
  ],
  ai: [
    {
      name: "Smart Teaching Tool",
      productId: "smart-teaching-tool",
      category: "AI Brain Robot Products",
      description: "숙련공의 작업 감각을 데이터화하는 스마트 티칭 도구",
      specs: ["동작 캡처", "힘/속도 감지", "학습 데이터 생성"],
      image: aiImage,
      isComingSoon: true,
    },
    {
      name: "3D Vision Package",
      productId: "3d-vision-package",
      category: "AI Brain Robot Products",
      description: "고정밀 3D 형상 인식을 위한 비전 시스템",
      specs: ["고해상도 스캔", "실시간 처리", "형상 분석"],
      image: aiImage,
      isComingSoon: true,
    },
    {
      name: "AI Control Module",
      productId: "ai-control-module",
      category: "AI Brain Robot Products",
      description: "Physical-AI 기반 적응형 로봇 제어 모듈",
      specs: ["실시간 학습", "변동 대응", "품질 최적화"],
      image: aiImage,
      isComingSoon: true,
    },
  ],
}

const tabs = [
  { id: "cutting", label: "스탠다드 Cutting" },
  { id: "amr", label: "커스텀 AMR" },
  { id: "ai", label: "자동화 설비" },
]

export default function ProductSliderSection() {
  const [activeTab, setActiveTab] = useState("cutting")
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const currentProducts = productGroups[activeTab] || []

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setActiveIndex(0)
    if (swiperInstance) {
      swiperInstance.slideTo(0)
    }
  }

  const handleMenuClick = (index: number) => {
    setActiveIndex(index)
    if (swiperInstance) {
      swiperInstance.slideTo(index)
    }
  }

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      // @ts-ignore
      swiperInstance.params.navigation.prevEl = prevRef.current
      // @ts-ignore
      swiperInstance.params.navigation.nextEl = nextRef.current
      swiperInstance.navigation.init()
      swiperInstance.navigation.update()
    }
  }, [swiperInstance])

  return (
    <section className="py-10 lg:py-14 bg-[#4A4D55]" data-testid="product-slider-section">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl lg:text-2xl font-bold text-white">Products</h2>
            <Plus className="w-4 h-4 text-primary" />
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`text-xs font-medium transition-all pb-1 border-b-2 ${
                    activeTab === tab.id
                      ? "text-white border-primary"
                      : "text-gray-400 border-transparent hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-1">
              <button
                ref={prevRef}
                className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                ref={nextRef}
                className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Sidebar Menu */}
          <div className="lg:w-36 flex-shrink-0">
            <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {currentProducts.map((product, index) => (
                <button
                  key={product.productId}
                  onClick={() => handleMenuClick(index)}
                  className={`text-left px-3 py-2 rounded-md transition-all whitespace-nowrap lg:whitespace-normal ${
                    activeIndex === index
                      ? "bg-primary text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-600/50"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {activeIndex === index && (
                      <ChevronRight className="w-3 h-3 flex-shrink-0" />
                    )}
                    <span className="text-xs font-medium">{product.name}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Slider */}
          <div className="flex-1">
            <Swiper
              modules={[Navigation, Controller]}
              spaceBetween={0}
              slidesPerView={1}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="rounded-lg overflow-hidden"
            >
              {currentProducts.map((product) => (
                <SwiperSlide key={product.productId}>
                  <div className="flex flex-col lg:flex-row bg-[#3A3D45] rounded-lg overflow-hidden h-[280px]">
                    {/* Image */}
                    <div className="lg:w-1/2 h-full bg-gray-200 flex items-center justify-center">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-gray-400 text-sm">이미지 준비중</div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="lg:w-1/2 p-5 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                          {product.description}
                        </p>

                        {/* Specs */}
                        <div className="space-y-1 mb-4">
                          {product.specs.slice(0, 3).map((spec, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs">
                              <span className="text-gray-500 font-medium">•</span>
                              <span className="text-white">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-2">
                        <Link href={`/products/${product.productId}`}>
                          <Button size="sm" className="gap-1 bg-primary hover:bg-primary/90 text-xs h-8">
                            <Eye className="w-3 h-3" />
                            자세히
                          </Button>
                        </Link>
                        <Button size="sm" variant="outline" className="gap-1 text-white border-gray-500 hover:bg-gray-600 text-xs h-8">
                          <Download className="w-3 h-3" />
                          브로슈어
                        </Button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
