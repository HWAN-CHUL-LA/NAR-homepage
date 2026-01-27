import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Cpu, Bot, Cog, ChevronDown, Building, Download, Play } from "lucide-react";

const solutions = [
  {
    title: "Smart Cutting System",
    description: "형강 절단 토탈 솔루션",
    icon: Cpu,
    href: "/solutions/cutting",
  },
  {
    title: "산업현장 특화형 Omnidirectional AMR",
    description: "산업현장 특화형 AMR",
    icon: Bot,
    href: "/solutions/amr",
  },
  {
    title: "AI Brain Robot",
    description: "Physical-AI 기반 자동화",
    icon: Cog,
    href: "/solutions/ai-brain",
  },
];

const productCategories = [
  { title: "Cutting System Products", href: "/products?tab=cutting", icon: Cpu },
  { title: "Rugged AMR Products", href: "/products?tab=amr", icon: Bot },
  { title: "AI Brain Robot Products", href: "/products?tab=ai", icon: Cog },
];

const caseCategories = [
  { title: "조선 산업", href: "/cases?filter=조선", icon: Building },
  { title: "Cutting 솔루션", href: "/cases?filter=cutting", icon: Cpu },
  { title: "AMR 솔루션", href: "/cases?filter=amr", icon: Bot },
];

const resourceCategories = [
  { title: "브로슈어 / 카탈로그", href: "/resources#brochure", icon: Download },
  { title: "영상 자료", href: "/resources#videos", icon: Play },
  { title: "스펙시트 / 기술 자료", href: "/resources#downloads", icon: Cog },
];

const navItems = [
  { label: "솔루션", href: "/solutions" },
  { label: "적용 사례", href: "/cases" },
  { label: "리소스", href: "/resources" },
  { label: "회사 소개", href: "/about" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="bg-transparent"
                  data-testid="nav-solutions"
                >
                  솔루션
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px] grid-cols-2">
                    {solutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        data-testid={`link-${solution.href.split("/").pop()}`}
                      >
                        <NavigationMenuLink className="flex items-start gap-3 p-3 rounded-md hover-elevate active-elevate-2">
                          <solution.icon className="w-5 h-5 mt-0.5 text-primary" />
                          <div>
                            <div className="font-semibold text-sm">
                              {solution.title}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {solution.description}
                            </div>
                          </div>
                        </NavigationMenuLink>
                      </Link>
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
                  <div className="grid gap-3 p-6 w-[400px] grid-cols-1">
                    {productCategories.map((category) => (
                      <Link key={category.href} href={category.href}>
                        <NavigationMenuLink className="flex items-center gap-3 p-3 rounded-md hover-elevate active-elevate-2">
                          <category.icon className="w-5 h-5 text-primary" />
                          <div className="font-semibold text-sm">{category.title}</div>
                        </NavigationMenuLink>
                      </Link>
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
                  <div className="grid gap-3 p-6 w-[400px] grid-cols-1">
                    {caseCategories.map((category) => (
                      <Link key={category.href} href={category.href}>
                        <NavigationMenuLink className="flex items-center gap-3 p-3 rounded-md hover-elevate active-elevate-2">
                          <category.icon className="w-5 h-5 text-primary" />
                          <div className="font-semibold text-sm">{category.title}</div>
                        </NavigationMenuLink>
                      </Link>
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
                  <div className="grid gap-3 p-6 w-[400px] grid-cols-1">
                    {resourceCategories.map((category) => (
                      <Link key={category.href} href={category.href}>
                        <NavigationMenuLink className="flex items-center gap-3 p-3 rounded-md hover-elevate active-elevate-2">
                          <category.icon className="w-5 h-5 text-primary" />
                          <div className="font-semibold text-sm">{category.title}</div>
                        </NavigationMenuLink>
                      </Link>
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
                  <div className="space-y-1">
                    <div className="py-2 px-3 text-sm font-semibold text-muted-foreground">
                      솔루션
                    </div>
                    {solutions.map((solution) => (
                      <Link
                        key={solution.href}
                        href={solution.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid={`mobile-link-${solution.href.split("/").pop()}`}
                      >
                        <span className="flex items-center gap-3 py-2 px-3 rounded-md hover-elevate active-elevate-2">
                          <solution.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm">{solution.title}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="my-4 border-t" />
                  <div className="space-y-1">
                    <div className="py-2 px-3 text-sm font-semibold text-muted-foreground">
                      제품
                    </div>
                    {productCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid={`mobile-link-product-${category.href.split("=").pop()}`}
                      >
                        <span className="flex items-center gap-3 py-2 px-3 rounded-md hover-elevate active-elevate-2">
                          <category.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm">{category.title}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="my-4 border-t" />
                  <div className="space-y-1">
                    <div className="py-2 px-3 text-sm font-semibold text-muted-foreground">
                      적용 사례
                    </div>
                    {caseCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid={`mobile-link-case-${category.href.split("=").pop()}`}
                      >
                        <span className="flex items-center gap-3 py-2 px-3 rounded-md hover-elevate active-elevate-2">
                          <category.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm">{category.title}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="my-4 border-t" />
                  <div className="space-y-1">
                    <div className="py-2 px-3 text-sm font-semibold text-muted-foreground">
                      리소스
                    </div>
                    {resourceCategories.map((category) => (
                      <Link
                        key={category.href}
                        href={category.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid={`mobile-link-resource-${category.href.split("#").pop()}`}
                      >
                        <span className="flex items-center gap-3 py-2 px-3 rounded-md hover-elevate active-elevate-2">
                          <category.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm">{category.title}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="my-4 border-t" />
                  <div className="space-y-1">
                    {/* 회사 소개 메뉴만 표시 (중복 제거) */}
                    <Link
                      href="/about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      data-testid="mobile-nav-about"
                    >
                      <span className="block py-2 px-3 text-sm rounded-md hover-elevate active-elevate-2">
                        회사 소개
                      </span>
                    </Link>
                  </div>
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
  );
}
