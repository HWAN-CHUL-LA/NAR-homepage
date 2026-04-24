import { useState, useRef, useEffect } from "react"
import { Link } from "wouter"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Controller } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import { ChevronLeft, ChevronRight, Plus, Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

import "swiper/css"
import "swiper/css/navigation"

import {
  remoteAmrImage as amrImage,
  remoteAiWeldingImage as aiImage,
  remotePlasmaProductImage as plasmaImage,
} from "@/lib/remoteImageUrls"
import pcrsStandardImg from "@assets/Products-Standard1.png"
import pcrsExtendedImg from "@assets/Products- Extensions1.png"
import weldingRobotImg from "@assets/Products- 용접로봇사진.png"
import amrSliderImg from "@assets/AMR1.jpg"

interface Product {
  name: string
  productId: string
  category: string
  description: string
  specs: string[]
  images: string[]
  videoUrl?: string
  isComingSoon?: boolean
  /** 이미지 위 하얀 반투명 + 대각선 ‘개발 진행 중’ 표시 */
  developmentOverlay?: boolean
}

const productGroups: Record<string, Product[]> = {
  cutting: [
    {
      name: "PCRS-standard",
      productId: "pcrs-standard",
      category: "형강절단 로봇",
      description: "표준형 형강 절단 로봇 시스템",
      specs: ["고정밀 플라즈마 절단", "표준 규격 형강 대응", "합리적인 도입 비용"],
      images: [pcrsStandardImg],
    },
    {
      name: "PCRS-Extended",
      productId: "pcrs-extended",
      category: "형강절단 로봇",
      description: "확장형 형강 절단 로봇 시스템",
      specs: ["대형 형강 대응", "확장된 작업 영역", "고하중 자재 핸들링"],
      images: [pcrsExtendedImg],
    },
    {
      name: "LCRS - standard",
      productId: "lcrs-standard",
      category: "형강절단 로봇",
      description: "표준형 레이저 형강 절단 로봇 시스템",
      specs: ["고출력 파이버 레이저", "서브밀리미터 정밀도", "열 변형 최소화"],
      images: [plasmaImage],
    },
  ],
  welding: [
    {
      name: "수용접 절단 로봇",
      productId: "welding-cutting-robot",
      category: "수용접 로봇",
      description: "수용접 및 절단 기능을 결합한 협동 로봇 시스템",
      specs: ["협동 로봇 기반 안전 작업", "용접/절단 듀얼 모드", "간편한 티칭 인터페이스"],
      images: [weldingRobotImg],
    },
  ],
  amr: [
    {
      name: "현장적용형 AMR",
      productId: "field-amr",
      category: "AMR",
      description: "산업 현장 실무에 최적화된 자율 주행 로봇",
      specs: ["전방향 Swerve Drive", "험지 대응 샤시", "정밀 자동 도킹"],
      images: [amrSliderImg],
    },
  ],
  ai: [
    {
      name: "형강절단 로봇 무인화 AI",
      productId: "cutting-automation-ai",
      category: "Physical AI",
      description: "형강 절단 공정의 완전 무인화를 위한 AI 솔루션",
      specs: ["실시간 형상 보정 AI", "자율 경로 생성", "이상 감지 모니터링"],
      images: [aiImage, amrImage],
      developmentOverlay: true,
    },
    {
      name: "고숙련자 행동모사 AI",
      productId: "expert-imitation-ai",
      category: "Physical AI",
      description: "숙련공의 작업 노하우를 학습하고 재현하는 AI",
      specs: ["멀티모달 데이터 학습", "정밀 동작 재현", "지속적 성능 최적화"],
      images: [aiImage, amrImage],
      developmentOverlay: true,
    },
  ],
}

const tabs = [
  { id: "cutting", label: "형강절단 로봇" },
  { id: "welding", label: "수용접 로봇" },
  { id: "amr", label: "AMR" },
  { id: "ai", label: "Physical AI" },
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
            <div className="flex items-center gap-4 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`text-xs font-medium transition-all pb-1 border-b-2 whitespace-nowrap ${
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
          <div className="flex-1 min-w-0">
            <Swiper
              modules={[Navigation, Controller]}
              spaceBetween={0}
              slidesPerView={1}
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="w-full min-w-0 rounded-lg overflow-hidden"
            >
              {currentProducts.map((product) => (
                  <SwiperSlide key={product.productId}>
                    <div className="flex flex-col lg:flex-row bg-[#3A3D45] rounded-lg overflow-hidden h-[280px]">
                      {/* Image */}
                    <div className="lg:w-1/2 h-[280px] bg-gray-200 relative overflow-hidden">
                        {product.images && product.images.length > 0 ? (
                          <>
                            <img
                              src={product.images[0]}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                            {product.developmentOverlay ? (
                              <div
                                className="absolute inset-0 flex items-center justify-center bg-white/80"
                                aria-hidden
                              >
                                <span className="pointer-events-none select-none rounded-md border-2 border-neutral-700/40 bg-white/90 px-5 py-2.5 text-center text-lg font-bold tracking-wide text-neutral-900 shadow-sm sm:text-xl">
                                  개발 진행 중
                                </span>
                              </div>
                            ) : null}
                          </>
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">이미지 준비중</div>
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
