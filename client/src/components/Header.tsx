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
import { Menu, X, Cpu, Bot, Cog, GitBranch, ChevronDown } from "lucide-react";

const solutions = [
  {
    title: "Smart Cutting System",
    description: "형강 절단 토탈 솔루션",
    icon: Cpu,
    href: "/solutions/cutting",
  },
  {
    title: "Rugged Omni AMR",
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
  {
    title: "Unmanned Pipeline",
    description: "토탈 무인 자동화 파이프라인",
    icon: GitBranch,
    href: "/solutions/pipeline",
  },
];

const navItems = [
  { label: "솔루션", href: "/solutions" },
  { label: "제품", href: "/products" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16 lg:h-20">
          <Link href="/" data-testid="link-home">
            <span className="text-xl lg:text-2xl font-bold tracking-tight">
              ROBOTICS
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

              {navItems.slice(1).map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} data-testid={`nav-${item.href.slice(1)}`}>
                    <NavigationMenuLink
                      className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                        location === item.href
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
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
                  <span className="text-xl font-bold">ROBOTICS</span>
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
                    {navItems.slice(1).map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        data-testid={`mobile-nav-${item.href.slice(1)}`}
                      >
                        <span className="block py-2 px-3 text-sm rounded-md hover-elevate active-elevate-2">
                          {item.label}
                        </span>
                      </Link>
                    ))}
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
