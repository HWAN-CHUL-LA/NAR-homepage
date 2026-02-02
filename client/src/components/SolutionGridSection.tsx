import { Link } from "wouter"
import { ArrowRight, Plus, Scissors, Flame, Bot, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import cuttingImage from "@assets/generated_images/industrial_robotics_steel_cutting.png"
import amrImage from "@assets/generated_images/rugged_amr_industrial_transport.png"
import aiImage from "@assets/generated_images/ai_robotic_welding_automation.png"

const solutions = [
  {
    title: "절단",
    description: "플라즈마/레이저 기반 형강 절단 토탈 시스템. 소재 투입부터 배출까지 완전 자동화를 실현합니다.",
    icon: Scissors,
    href: "/solutions/cutting",
    image: cuttingImage,
  },
  {
    title: "용접",
    description: "협동 로봇과 정밀 제어 기술을 결합한 최적의 용접 솔루션. 복잡한 구조물도 균일한 품질로 자동 용접합니다.",
    icon: Flame,
    href: "/solutions/welding",
    image: aiImage,
  },
  {
    title: "AMR",
    description: "Swerve Drive와 Rocker-Bogie 기반 험지 대응 산업현장 특화형 자율주행 로봇.",
    icon: Bot,
    href: "/solutions/amr",
    image: amrImage,
  },
  {
    title: "현장 적용 AI",
    description: "숙련공의 감각을 데이터로, 로봇의 실력으로. 3D 비전과 스마트 티칭을 결합한 지능형 자동화 솔루션입니다.",
    icon: Brain,
    href: "/solutions/ai-brain",
    image: aiImage,
  },
]

export default function SolutionGridSection() {
  return (
    <section className="py-10 lg:py-14 bg-white" data-testid="solution-grid-section">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Title */}
          <div className="lg:w-1/5 lg:sticky lg:top-24 lg:self-start flex-shrink-0">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Solutions</h2>
              <Plus className="w-4 h-4 text-primary" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              조선·건설 현장에 최적화된 로봇 자동화 솔루션
            </p>
          </div>

          {/* Right Column - Grid */}
          <div className="lg:w-4/5">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {solutions.map((solution, index) => (
                <Link key={index} href={solution.href}>
                  <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer h-full">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-3">
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">
                        {solution.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                        {solution.description}
                      </p>

                      {/* Icon and Arrow */}
                      <div className="flex items-center justify-between">
                        <solution.icon className="w-6 h-6 text-gray-400" />
                        <ArrowRight className="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {/* CTA Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                    네오아크로보틱스는 조선·건설 현장에 최적화된 로봇 자동화 솔루션을 제공합니다.
                  </h3>
                  <p className="text-gray-600 text-xs">
                    전문 엔지니어와 함께 현장 맞춤형 자동화 혁신을 시작하세요.
                  </p>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <Link href="/contact">
                    <Button className="w-full gap-2 h-8 text-xs" variant="outline">
                      <span className="w-3 h-3 border border-current rounded-sm flex items-center justify-center text-[10px]">✓</span>
                      솔루션 문의하기
                    </Button>
                  </Link>
                  <Link href="/resources">
                    <Button variant="ghost" className="w-full gap-2 h-8 text-xs text-gray-600">
                      <ArrowRight className="w-3 h-3 rotate-[-90deg]" />
                      브로슈어 다운로드
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
