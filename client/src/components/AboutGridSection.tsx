import { Link } from "wouter"
import { ArrowRight, Plus, MessageSquare, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

// 기업 전경 이미지 (실제 이미지로 교체 필요)
const companyImage = "https://res.cloudinary.com/dzu2wygbi/image/upload/v1766044887/%ED%98%95%EA%B0%95%EC%A0%88%EB%8B%A8%EC%9E%A5%EB%B9%84%EC%82%AC%EC%A7%841_mvj532.jpg"

const menuItems = [
  {
    title: "기업 소개",
    description: "네오아크로보틱스의 비전과 미션",
    href: "/about",
  },
  {
    title: "핵심 기술",
    description: "특허 보유 기술과 R&D 역량",
    href: "/about#technology",
  },
  {
    title: "연혁",
    description: "2010년 설립부터 현재까지",
    href: "/about#history",
  },
  {
    title: "파트너사",
    description: "HD현대중공업, 한화오션 등",
    href: "/about#partners",
  },
  {
    title: "채용 정보",
    description: "함께 성장할 인재를 찾습니다",
    href: "/careers",
  },
  {
    title: "오시는 길",
    description: "본사 및 R&D 센터 위치",
    href: "/contact",
  },
]

export default function AboutGridSection() {
  return (
    <section className="py-10 lg:py-14 bg-gray-50" data-testid="about-grid-section">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Title */}
          <div className="lg:w-1/5">
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900">
                  About Company
                </h2>
                <Plus className="w-4 h-4 text-primary" />
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                조선·철강 산업의 자동화 혁신을 이끕니다
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-4/5">
            {/* Hero Image */}
            <div className="aspect-[21/7] rounded-lg overflow-hidden mb-0">
              <img
                src={companyImage}
                alt="네오아크로보틱스 기업 전경"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 border-l border-t border-gray-200">
              {menuItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <div className="group p-3 border-r border-b border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer h-full">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <ArrowRight className="w-3 h-3 text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                    </div>
                    <p className="text-xs text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-0 p-4 bg-white border border-gray-200 border-t-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-0.5">Contact Us</h3>
                <p className="text-xs text-gray-500">
                  프로젝트 문의 및 기술 상담을 요청하세요
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                <Link href="/contact">
                  <Button size="sm" className="gap-1 w-full sm:w-auto h-8 text-xs">
                    <MessageSquare className="w-3 h-3" />
                    문의 바로가기
                  </Button>
                </Link>
                <Button size="sm" variant="outline" className="gap-1 w-full sm:w-auto h-8 text-xs">
                  <Phone className="w-3 h-3" />
                  CS 문의하기
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
