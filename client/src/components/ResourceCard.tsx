import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Play, FileText, ExternalLink } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  type: "brochure" | "video" | "spec" | "whitepaper";
  fileSize?: string;
  duration?: string;
  thumbnail?: string;
  videoUrl?: string;
  onDownload?: () => void;
  onView?: () => void;
}

const typeConfig = {
  brochure: { label: "브로슈어", icon: FileText },
  video: { label: "영상", icon: Play },
  spec: { label: "스펙시트", icon: FileText },
  whitepaper: { label: "기술 자료", icon: FileText },
};

export default function ResourceCard({
  title,
  description,
  type,
  fileSize,
  duration,
  thumbnail,
  videoUrl,
  onDownload,
  onView,
}: ResourceCardProps) {
  const config = typeConfig[type];
  const Icon = config.icon;

  return (
    <Card
      className="overflow-visible"
      data-testid={`resource-${title.toLowerCase().replace(/\s/g, "-")}`}
    >
      <div className="aspect-video bg-muted rounded-t-md flex items-center justify-center relative overflow-hidden">
        {videoUrl ? (
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <Icon className="w-12 h-12 text-muted-foreground" />
        )}
        {type === "video" && !videoUrl && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
              <Play className="w-6 h-6 text-foreground ml-1" />
            </div>
          </div>
        )}
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm"
        >
          {config.label}
        </Badge>
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {fileSize || duration}
          </span>
          <div className="flex gap-2">
            {type === "video" ? (
              <Button
                size="sm"
                variant="outline"
                className="gap-1"
                onClick={() => {
                  onView?.();
                  console.log(`View: ${title}`);
                }}
              >
                <ExternalLink className="w-3 h-3" />
                재생
              </Button>
            ) : (
              <Button
                size="sm"
                variant="outline"
                className="gap-1"
                onClick={() => {
                  onDownload?.();
                  console.log(`Download: ${title}`);
                }}
              >
                <Download className="w-3 h-3" />
                다운로드
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
