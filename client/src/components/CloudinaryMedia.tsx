import { AdvancedVideo, AdvancedImage } from "@cloudinary/react"
import { cld } from "@/lib/cloudinary"

interface CloudinaryVideoProps {
  publicId: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  className?: string
}

interface CloudinaryImageProps {
  publicId: string
  alt: string
  className?: string
}

// Cloudinary 비디오 컴포넌트
export function CloudinaryVideo({
  publicId,
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  className = "w-full h-full object-cover",
}: CloudinaryVideoProps) {
  const video = cld.video(publicId)

  return (
    <AdvancedVideo
      cldVid={video}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      controls={controls}
      className={className}
      playsInline
    />
  )
}

// Cloudinary 이미지 컴포넌트
export function CloudinaryImage({
  publicId,
  alt,
  className = "w-full h-full object-cover",
}: CloudinaryImageProps) {
  const image = cld.image(publicId)

  return (
    <AdvancedImage
      cldImg={image}
      alt={alt}
      className={className}
    />
  )
}

// Public ID 목록 (자주 사용하는 미디어)
export const MEDIA_IDS = {
  // 비디오
  AMR_TEST: "자기위치추정_테스트_ydk62r",
  CUTTING_ROBOT: "형강절단로봇_최종본_zd8na3",
  
  // 이미지
  MAIN_AMR: "mainAMR",
} as const

