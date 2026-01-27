import { Link } from "wouter"
import { ArrowRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Cpu, Bot, Cog } from "lucide-react"
import aiImage from "@assets/generated_images/ai_robotic_welding_automation.png"

const cuttingImage = "https://res.cloudinary.com/dzu2wygbi/image/upload/v1766044887/%ED%98%95%EA%B0%95%EC%A0%88%EB%8B%A8%EC%9E%A5%EB%B9%84%EC%82%AC%EC%A7%841_mvj532.jpg"
const amrImage = "https://res.cloudinary.com/dzu2wygbi/image/upload/v1766024118/mainAMR.jpg"

const solutions = [
  {
    title: "공장 조립 자동화 설비",
    description: "소재 투입부터 배출까지, 형강 가공의 완전 자동화(Full Automation)를 실현하다. 최적의 자동화 시스템 및 SI 서비스",
    icon: Cpu,
    href: "/solutions/cutting",
    image: cuttingImage,
  },
  {
    title: "공장 물류 자동화",
    description: "4차산업 시대와 트렌드에 맞춰 자체 개발한 AMR, GoCart를 통해 완성한 물류 자동화 시스템",
    icon: Bot,
    href: "/solutions/amr",
    image: amrImage,
  },
  {
    title: "창고 물류 자동화",
    description: "Digital Picking System과 GoCart를 결합해 신속한 오더피킹과 최적의 물류 이송 환경 조성",
    icon: Cog,
    href: "/solutions/ai-brain",
    image: aiImage,
  },
  {
    title: "헬스케어 물류 자동화",
    description: "병원 병동 간 이송, 방문객 안내 및 환자 회진, 세탁물, 우편, 배식 이송 등 기타 물류 이송 자동화",
    icon: Bot,
    href: "/solutions/amr",
    image: amrImage,
  },
  {
    title: "로보타이제이션 솔루션",
    description: "기존 AGV 및 수동 장비를 쉽고 빠르게 자율주행 AMR로 레트로핏 해주는 종합 Robotization 패키지",
    icon: Cog,
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
              인더스트리 4.0과 로지스틱스 4.0을 위한 전방위 토탈 스마트팩토리 솔루션
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
                    유진로봇은 기업이 더 혁신적인 스마트 공장 구축을 위해 필요한 Robotics & Automation 솔루션을 제공합니다.
                  </h3>
                  <p className="text-gray-600 text-xs">
                    유진로봇의 인증된 전문가와 함께 혁신의 변화를 시작하세요.
                  </p>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                  <Link href="/contact">
                    <Button className="w-full gap-2 h-8 text-xs" variant="outline">
                      <span className="w-3 h-3 border border-current rounded-sm flex items-center justify-center text-[10px]">✓</span>
                      YUJIN ROBOT 솔루션 문의하기
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
