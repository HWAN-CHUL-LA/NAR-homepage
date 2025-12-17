import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  solutions: [
    { label: "Smart Cutting System", href: "/solutions/cutting" },
    { label: "Rugged Omni AMR", href: "/solutions/amr" },
    { label: "AI Brain Robot", href: "/solutions/ai-brain" },
    { label: "Unmanned Pipeline", href: "/solutions/pipeline" },
  ],
  products: [
    { label: "Cutting System Products", href: "/products#cutting" },
    { label: "Rugged AMR Products", href: "/products#amr" },
    { label: "AI Brain Robot Products", href: "/products#ai-brain" },
  ],
  company: [
    { label: "회사 소개", href: "/about" },
    { label: "기술 & IP", href: "/about#technology" },
    { label: "파트너", href: "/about#partners" },
    { label: "채용", href: "/about#careers" },
  ],
  resources: [
    { label: "브로슈어", href: "/resources#brochure" },
    { label: "영상", href: "/resources#videos" },
    { label: "기술 자료", href: "/resources#downloads" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" data-testid="footer-logo">
              <span className="text-xl font-bold">ROBOTICS</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              조선·철강 제조 혁신을 위한
              <br />
              토탈 자동화 솔루션
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@robotics.co.kr</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>서울특별시 강남구</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">솔루션</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-testid={`footer-${link.href.split("/").pop()}`}
                  >
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">제품</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-testid={`footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">회사</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-testid={`footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">리소스</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-testid={`footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 ROBOTICS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" data-testid="footer-privacy">
              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                개인정보처리방침
              </span>
            </Link>
            <Link href="/terms" data-testid="footer-terms">
              <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                이용약관
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
