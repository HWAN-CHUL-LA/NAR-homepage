import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, type LucideIcon } from "lucide-react";

interface SolutionPageHeroProps {
  title: string;
  headline: string;
  subheadline: string;
  benefits: string[];
  image?: string;
  video?: string;
  icon: LucideIcon;
  ctaText?: string;
  ctaHref?: string;
  badge?: string;
}

export default function SolutionPageHero({
  title,
  headline,
  subheadline,
  benefits,
  image,
  video,
  icon: Icon,
  ctaText = "상담 신청",
  ctaHref = "/contact",
  badge,
}: SolutionPageHeroProps) {
  return (
    <section
      className="min-h-[70vh] pt-20 lg:pt-24 flex items-center"
      data-testid="solution-hero"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {title}
              </span>
              {badge && (
                <Badge variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              )}
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-6"
              data-testid="solution-headline"
            >
              {headline}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {subheadline}
            </p>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href={ctaHref} data-testid="solution-cta">
                <Button size="lg" className="gap-2">
                  {ctaText}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/resources" data-testid="solution-resources">
                <Button size="lg" variant="outline">
                  자료 다운로드
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              {video ? (
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
