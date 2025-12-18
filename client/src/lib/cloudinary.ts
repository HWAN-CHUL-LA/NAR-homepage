import { Cloudinary } from "@cloudinary/url-gen"

// Cloudinary 인스턴스 생성
export const cld = new Cloudinary({
  cloud: {
    cloudName: "dzu2wygbi",
  },
})

// Public ID로 비디오 URL 생성
export const getVideoUrl = (publicId: string) => {
  return cld.video(publicId).toURL()
}

// Public ID로 이미지 URL 생성
export const getImageUrl = (publicId: string) => {
  return cld.image(publicId).toURL()
}

// 미디어 ID 상수
export const MEDIA_IDS = {
  AMR_TEST: "자기위치추정_테스트_ydk62r",
  CUTTING_ROBOT: "형강절단로봇_최종본_zd8na3",
  MAIN_AMR: "mainAMR",
  OUTFEED_SCRAP: "배출보조_잔재_절단_qgucir",
}

