import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface CaseStudyCardProps {
  id: string;
  title: string;
  client: string;
  industry: string;
  solution: string;
  challenge: string;
  result: string;
  image: string;
}

export default function CaseStudyCard({
  id,
  title,
  client,
  industry,
  solution,
  challenge,
  result,
  image,
}: CaseStudyCardProps) {
  return (
    <Link href={`/cases/${id}`} data-testid={`card-case-${id}`}>
      <Card className="group overflow-visible hover-elevate active-elevate-2 h-full">
        <div className="aspect-video overflow-hidden rounded-t-md relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
              {industry}
            </Badge>
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
              {solution}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="text-sm text-muted-foreground mb-2">{client}</div>
          <h3 className="text-lg font-semibold mb-3">{title}</h3>
          <div className="space-y-3 mb-4">
            <div>
              <span className="text-xs font-medium text-muted-foreground uppercase">
                과제
              </span>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {challenge}
              </p>
            </div>
            <div>
              <span className="text-xs font-medium text-primary uppercase">
                성과
              </span>
              <p className="text-sm font-medium mt-1">{result}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
            사례 상세 보기
            <ArrowRight className="w-4 h-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
