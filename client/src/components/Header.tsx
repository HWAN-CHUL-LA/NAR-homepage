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
import {
  Menu,
  Ship,
  Building2,
  BookOpen,
  Video,
  FileText,
  type LucideIcon,
} from "lucide-react"

import plasmaGridImage from "@assets/Plasma1.JPG"
import weldingGridImage from "@assets/용접사진2.png"
import {
  remoteAmrImage as amrImage,
  remoteAiWeldingImage as aiImage,
} from "@/lib/remoteImageUrls"

type MenuCardItem =
  | { title: string; description: string; href: string; image: string }
  | { title: string; description: string; href: string; icon: LucideIcon }

// 솔루션·제품: 절단/용접은 홈과 동일 로컬 이미지. 적용 사례·리소스: 팝오버와 어울리는 아이콘만 사용
const menuCategories: {
  solutions: Extract<MenuCardItem, { image: string }>[]
  products: Extract<MenuCardItem, { image: string }>[]
  cases: MenuCardItem[]
  resources: MenuCardItem[]
} = {
  solutions: [
    { title: "절단", description: "형강 절단 토탈 솔루션", image: plasmaGridImage, href: "/solutions/cutting" },
    { title: "용접", description: "AI 기반 정밀 용접 솔루션", image: weldingGridImage, href: "/solutions/welding" },
    { title: "AMR", description: "산업현장 특화형 AMR", image: amrImage, href: "/solutions/amr" },
    { title: "Physical AI", description: "Physical-AI 기반 자동화", image: aiImage, href: "/solutions/ai-brain" },
  ],
  products: [
    { title: "형강절단 로봇", description: "고정밀 형강 절단 시스템", image: plasmaGridImage, href: "/products?tab=cutting" },
    { title: "수용접 로봇", description: "협동 로봇 기반 수용접 자동화", image: weldingGridImage, href: "/products?tab=welding" },
    { title: "AMR", description: "산업용 전방향 AMR", image: amrImage, href: "/products?tab=amr" },
    { title: "Physical AI", description: "산업용 AI 솔루션", image: aiImage, href: "/products?tab=ai" },
  ],
  cases: [
    { title: "조선", description: "한화오션, 현대중공업, 한빛이엔지", icon: Ship, href: "/cases?industry=조선" },
    { title: "건설", description: "건설 현장 적용 사례", icon: Building2, href: "/cases?industry=건설" },
  ],
  resources: [
    { title: "브로슈어", description: "제품 카탈로그", icon: BookOpen, href: "/resources#brochure" },
    { title: "영상 자료", description: "데모 영상", icon: Video, href: "/resources#videos" },
    { title: "기술 자료", description: "스펙시트", icon: FileText, href: "/resources#downloads" },
  ],
}

function MenuCardIconPanel({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="mb-2 w-full aspect-[4/3] rounded-lg border border-border/60 bg-muted/40 flex items-center justify-center group-hover:bg-muted/70 group-hover:border-border transition-colors">
      <Icon
        className="w-9 h-9 text-muted-foreground group-hover:text-primary transition-colors"
        strokeWidth={1.35}
        aria-hidden
      />
    </div>
  )
}

function MenuCard({ item, onClose }: { item: MenuCardItem; onClose?: () => void }) {
  return (
    <Link href={item.href} onClick={onClose}>
      <NavigationMenuLink className="block group">
        {"icon" in item ? (
          <MenuCardIconPanel Icon={item.icon} />
        ) : (
          <div className="rounded-lg overflow-hidden mb-2">
            <img
              src={item.image}
              alt={item.title}
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        )}
        <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
          {item.title}
        </h4>
        <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{item.description}</p>
      </NavigationMenuLink>
    </Link>
  )
}

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
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 w-[540px] lg:w-[720px]">
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
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 w-[540px] lg:w-[720px]">
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
                  <div className="grid grid-cols-2 gap-4 p-6 w-[360px]">
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
