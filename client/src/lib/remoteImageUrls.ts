/**
 * 로컬 attached_assets/generated_images 등이 비어 있거나 OneDrive 미동기화일 때
 * 브라우저가 실제로 받을 수 있는 공개 CDN URL.
 * (절단·AMR: Cloudinary, 용접·AI·조선소 히어로: 기존 카페24 정적 배포 에셋)
 */
export const remoteCuttingImage =
  "https://res.cloudinary.com/dzu2wygbi/image/upload/v1766044887/%ED%98%95%EA%B0%95%EC%A0%88%EB%8B%A8%EC%9E%A5%EB%B9%84%EC%82%AC%EC%A7%841_mvj532.jpg"

export const remoteAmrImage =
  "https://res.cloudinary.com/dzu2wygbi/image/upload/v1766024118/mainAMR.jpg"

export const remoteAiWeldingImage =
  "https://ecimg.cafe24img.com/pg1727b95312806034/neoarcrobotics/web/assets/ai_robotic_welding_automation-ChBlXxim.png"

export const remoteShipyardHeroImage =
  "https://ecimg.cafe24img.com/pg1727b95312806034/neoarcrobotics/web/assets/shipyard_industrial_facility_exterior-C6O3LYx2.png"

/** Plasma1.JPG 로컬 부재 시 절단 카드용 대체 */
export const remotePlasmaProductImage = remoteCuttingImage

/** 기업건물2026.png 로컬 부재 시 about 그리드 카드용 대체 */
export const remoteCompanyBuildingImage = remoteShipyardHeroImage
