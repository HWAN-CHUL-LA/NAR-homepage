import { useState, useEffect } from "react"
import { Link, useLocation } from "wouter"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

// 이미지 import
import cuttingImage from "@assets/generated_images/industrial_robotics_steel_cutting.png"
import amrImage from "@assets/generated_images/rugged_amr_industrial_transport.png"
import aiImage from "@assets/generated_images/ai_robotic_welding_automation.png"

// 통합 메뉴 데이터 (모든 메뉴에 이미지 카드 3개씩)
const menuCategories = {
  solutions: [
    { title: "Cutting System", description: "형강 절단 토탈 솔루션", image: cuttingImage, href: "/solutions/cutting" },
    { title: "Rugged AMR", description: "산업현장 특화형 AMR", image: amrImage, href: "/solutions/amr" },
    { title: "AI Brain Robot", description: "Physical-AI 기반 자동화", image: aiImage, href: "/solutions/ai-brain" },
  ],
  products: [
    { title: "Cutting System", description: "형강 절단 제품", image: cuttingImage, href: "/products?tab=cutting" },
    { title: "Rugged AMR", description: "AMR 제품", image: amrImage, href: "/products?tab=amr" },
    { title: "AI Brain Robot", description: "AI 로봇 제품", image: aiImage, href: "/products?tab=ai" },
  ],
  cases: [
    { title: "조선 산업", description: "조선소 적용 사례", image: cuttingImage, href: "/cases?industry=조선" },
    { title: "건설 현장", description: "건설 현장 사례", image: amrImage, href: "/cases?industry=건설" },
    { title: "물류 자동화", description: "물류 자동화 사례", image: aiImage, href: "/cases" },
  ],
  resources: [
    { title: "브로슈어", description: "제품 카탈로그", image: cuttingImage, href: "/resources#brochure" },
    { title: "영상 자료", description: "데모 영상", image: amrImage, href: "/resources#videos" },
    { title: "기술 자료", description: "스펙시트", image: aiImage, href: "/resources#downloads" },
  ],
}

// 재사용 가능한 메뉴 카드 컴포넌트
interface MenuCardProps {
  item: {
    title: string
    description: string
    image: string
    href: string
  }
  onClose?: () => void
}

const MenuCard = ({ item, onClose }: MenuCardProps) => (
  <Link href={item.href} onClick={onClose}>
    <NavigationMenuLink className="block group">
      <div className="rounded-lg overflow-hidden mb-2">
        <img
          src={item.image}
          alt={item.title}
          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <h4 className="font-semibold text-sm text-gray-900 group-hover:text-primary transition-colors">
        {item.title}
      </h4>
      <p className="text-xs text-gray-500 line-clamp-1">{item.description}</p>
    </NavigationMenuLink>
  </Link>
)

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [location] = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all bg-white border-b shadow-sm duration-300"
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 lg:h-20">
          <Link href="/" data-testid="link-home" className="flex flex-wrap mt-0 mb-0">
            <span className="text-xl lg:text-2xl font-bold tracking-tight">
              NeoArcRobotics
            </span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {/* 솔루션 드롭다운 */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="bg-transparent"
                  data-testid="nav-solutions"
                >
                  솔루션
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-4 p-6 w-[540px]">
                    {menuCategories.solutions.map((item) => (
                      <MenuCard key={item.href} item={item} />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* 제품 드롭다운 */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  제품
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-4 p-6 w-[540px]">
                    {menuCategories.products.map((item) => (
                      <MenuCard key={item.href} item={item} />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* 적용 사례 드롭다운 */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  적용 사례
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-4 p-6 w-[540px]">
                    {menuCategories.cases.map((item) => (
                      <MenuCard key={item.href} item={item} />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* 리소스 드롭다운 */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  리소스
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-3 gap-4 p-6 w-[540px]">
                    {menuCategories.resources.map((item) => (
                      <MenuCard key={item.href} item={item} />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* 회사 소개 (단일 링크) */}
              <NavigationMenuItem>
                <Link href="/about">
                  <NavigationMenuLink
                    className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                      location === "/about" ? "text-primary" : "text-foreground"
                    }`}
                  >
                    회사 소개
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" data-testid="link-contact-header">
              <Button data-testid="button-demo-request">데모 요청</Button>
            </Link>
          </div>

          {/* 모바일 메뉴 */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                data-testid="button-mobile-menu"
              >
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="text-xl font-bold">NeoArcRobotics</span>
                </div>
                <nav className="flex-1 overflow-auto p-4">
                  {/* 솔루션 */}
                  <div className="space-y-1 mb-4">
                    <div className="py-2 px-3 text-sm font-semibold text-muted-foreground">
                      솔루션
                    </div>
                    {menuCategories.solutions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                          <span className="text-sm">{item.title}</span>
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="border-t my-2" />

                  {/* 제품 */}
                  <div className="space-y-1 mb-4">
                    <div className="py-2 px-3 text-sm font-semibold text-muted-foreground">
                      제품
                    </div>
                    {menuCategories.products.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                          <span className="text-sm">{item.title}</span>
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="border-t my-2" />

                  {/* 적용 사례 */}
                  <div className="space-y-1 mb-4">
                    <div className="py-2 px-3 text-sm font-semibold text-muted-foreground">
                      적용 사례
                    </div>
                    {menuCategories.cases.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                          <span className="text-sm">{item.title}</span>
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="border-t my-2" />

                  {/* 리소스 */}
                  <div className="space-y-1 mb-4">
                    <div className="py-2 px-3 text-sm font-semibold text-muted-foreground">
                      리소스
                    </div>
                    {menuCategories.resources.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="flex items-center gap-3 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors">
                          <span className="text-sm">{item.title}</span>
                        </span>
                      </Link>
                    ))}
                  </div>

                  <div className="border-t my-2" />

                  {/* 회사 소개 */}
                  <Link
                    href="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid="mobile-nav-about"
                  >
                    <span className="block py-2 px-3 text-sm rounded-md hover:bg-gray-100 transition-colors">
                      회사 소개
                    </span>
                  </Link>
                </nav>
                <div className="p-4 border-t">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button className="w-full" data-testid="mobile-button-demo">
                      데모 요청
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
