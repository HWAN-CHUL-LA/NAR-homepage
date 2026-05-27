import { useMemo, useState } from "react"
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
  /** 직접 호스팅 MP4 등 비-YouTube 재생 주소 */
  videoUrl?: string;
  /** YouTube 영상 ID (`youtu.be/xxx` 의 xxx). 클릭 시 임베드 재생 */
  youtubeVideoId?: string;
  onDownload?: () => void;
  onView?: () => void;
}

function youtubeUrlHostsId(url: string): string | null {
  const trimmed = url.trim()
  const fromWatch = trimmed.match(/[?&]v=([\w-]{11})(?:&|$)/)
  if (fromWatch) return fromWatch[1]
  const fromShort = trimmed.match(/youtu\.be\/([\w-]{11})(?:\?|$)/)
  if (fromShort) return fromShort[1]
  const fromEmbed = trimmed.match(/youtube\.com\/embed\/([\w-]{11})(?:\?|$)/)
  if (fromEmbed) return fromEmbed[1]
  return null
}

/** 영상 시작 전 미리보기: YouTube가 제공하는 대표 스틸(maxres → hq → 선택 thumbnail) */
function YoutubeStillPreview({
  videoId,
  alt,
  fallbackThumbnail,
}: {
  videoId: string
  alt: string
  fallbackThumbnail?: string
}) {
  const tiers = [
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    ...(fallbackThumbnail ? [fallbackThumbnail] : []),
  ]
  const [tierIndex, setTierIndex] = useState(0)

  if (tierIndex >= tiers.length) {
    return (
      <div className="w-full h-full bg-muted flex items-center justify-center">
        <Play className="w-12 h-12 text-muted-foreground" />
      </div>
    )
  }

  const src = tiers[tierIndex]

  return (
    <img
      key={tierIndex}
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      onError={() => setTierIndex((i) => i + 1)}
    />
  )
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
  youtubeVideoId,
  onDownload,
  onView,
}: ResourceCardProps) {
  const config = typeConfig[type];
  const Icon = config.icon;
  const [youtubePlaying, setYoutubePlaying] = useState(false)

  const resolvedYoutubeId = useMemo(() => {
    if (youtubeVideoId) return youtubeVideoId
    if (videoUrl && /youtu\.be|youtube\.com/.test(videoUrl)) {
      return youtubeUrlHostsId(videoUrl)
    }
    return null
  }, [youtubeVideoId, videoUrl])

  const isDirectVideoFile =
    typeof videoUrl === "string" &&
    videoUrl !== "" &&
    !/youtu\.be|youtube\.com/.test(videoUrl)

  const startYoutube = () => {
    if (!resolvedYoutubeId) return
    onView?.()
    setYoutubePlaying(true)
  }

  return (
    <Card
      className="overflow-visible"
      data-testid={`resource-${title.toLowerCase().replace(/\s/g, "-")}`}
    >
      <div className="aspect-video bg-muted rounded-t-md flex items-center justify-center relative overflow-hidden">
        {resolvedYoutubeId && youtubePlaying ? (
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(resolvedYoutubeId)}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : isDirectVideoFile ? (
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : resolvedYoutubeId && !youtubePlaying ? (
          <YoutubeStillPreview
            videoId={resolvedYoutubeId}
            alt={title}
            fallbackThumbnail={thumbnail}
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
        {type === "video" && resolvedYoutubeId && !youtubePlaying && (
          <button
            type="button"
            onClick={startYoutube}
            className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer border-0 p-0 appearance-none group hover:bg-black/40 transition-colors"
            aria-label={`${title} 재생`}
          >
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Play className="w-6 h-6 text-foreground ml-1" />
            </div>
          </button>
        )}
        {type === "video" && !resolvedYoutubeId && !videoUrl && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
              <Play className="w-6 h-6 text-foreground ml-1" />
            </div>
          </div>
        )}
        {type !== "video" && (
          <Badge
            variant="secondary"
            className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm"
          >
            {config.label}
          </Badge>
        )}
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
                  if (resolvedYoutubeId) {
                    startYoutube()
                  } else {
                    onView?.()
                  }
                  console.log(`View: ${title}`)
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
