import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface SolutionCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  href: string;
  image: string;
}

export default function SolutionCard({
  title,
  description,
  features,
  icon: Icon,
  href,
  image,
}: SolutionCardProps) {
  return (
    <Link href={href} data-testid={`card-solution-${href.split("/").pop()}`}>
      <Card className="group overflow-visible hover-elevate active-elevate-2 h-full">
        <div className="aspect-video overflow-hidden rounded-t-md">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
          <ul className="space-y-2 mb-4">
            {features.slice(0, 3).map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
            자세히 보기
            <ArrowRight className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
