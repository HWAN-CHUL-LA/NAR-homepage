import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  specs: string[];
  image?: string;
  isComingSoon?: boolean;
  onViewDetails?: () => void;
  onDownloadSpec?: () => void;
}

export default function ProductCard({
  name,
  category,
  description,
  specs,
  image,
  isComingSoon = false,
  onViewDetails,
  onDownloadSpec,
}: ProductCardProps) {
  return (
    <Card
      className={`overflow-visible ${isComingSoon ? "opacity-75" : ""}`}
      data-testid={`product-${name.toLowerCase().replace(/\s/g, "-")}`}
    >
      <div className="aspect-square bg-muted rounded-t-md flex items-center justify-center relative overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-muted-foreground text-sm">이미지 준비중</div>
        )}
        {isComingSoon && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <Badge>Coming Soon</Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="text-xs text-muted-foreground mb-1">{category}</div>
        <h3 className="font-semibold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        <ul className="space-y-1 mb-4">
          {specs.slice(0, 3).map((spec, idx) => (
            <li key={idx} className="text-xs text-muted-foreground flex gap-2">
              <span className="text-primary">•</span>
              {spec}
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-1"
            onClick={() => {
              onViewDetails?.();
              console.log(`View details: ${name}`);
            }}
            disabled={isComingSoon}
            data-testid={`button-view-${name.toLowerCase().replace(/\s/g, "-")}`}
          >
            <Eye className="w-3 h-3" />
            상세
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 gap-1"
            onClick={() => {
              onDownloadSpec?.();
              console.log(`Download spec: ${name}`);
            }}
            disabled={isComingSoon}
            data-testid={`button-download-${name.toLowerCase().replace(/\s/g, "-")}`}
          >
            <Download className="w-3 h-3" />
            스펙
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
