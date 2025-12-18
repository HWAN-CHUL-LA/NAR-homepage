// 제품 상세 데이터
export interface ProductDetail {
  id: string
  name: string
  category: string
  categorySlug: string
  tagline: string
  description: string
  features: {
    title: string
    description: string
  }[]
  specifications: {
    label: string
    value: string
  }[]
  benefits: string[]
  videoUrl?: string
  imageUrl?: string
  relatedProducts: string[]
}

export const productDetails: Record<string, ProductDetail> = {
  "operating-sw": {
    id: "operating-sw",
    name: "Operating SW",
    category: "Cutting System Products",
    categorySlug: "cutting",
    tagline: "네스팅부터 운영까지, 절단 자동화의 두뇌",
    description: "Smart Cutting System의 핵심 소프트웨어 패키지입니다. 자동 네스팅 알고리즘으로 자재 손실을 최소화하고, 실시간 보정 기능으로 정밀한 절단을 구현합니다. 운영 모니터링 대시보드를 통해 전체 공정을 한눈에 파악할 수 있습니다.",
    features: [
      {
        title: "Auto-Nesting",
        description: "AI 기반 자동 배치 알고리즘으로 자재 손실률을 최소화합니다. 다양한 형강 형상에 대한 최적 절단 계획을 자동 생성합니다.",
      },
      {
        title: "실시간 보정",
        description: "센싱 데이터를 기반으로 자재의 휨/비틀림을 실시간 감지하고 절단 경로를 자동 보정합니다.",
      },
      {
        title: "운영 대시보드",
        description: "생산량, 품질, 설비 상태를 실시간으로 모니터링하고 이력을 추적합니다.",
      },
      {
        title: "CAD 연동",
        description: "주요 CAD 포맷(DXF, DWG, STEP)을 지원하며 설계 도면을 직접 불러와 절단 계획을 수립합니다.",
      },
    ],
    specifications: [
      { label: "지원 OS", value: "Windows 10/11, Linux" },
      { label: "CAD 포맷", value: "DXF, DWG, STEP, IGES" },
      { label: "네스팅 알고리즘", value: "유전 알고리즘 + 휴리스틱" },
      { label: "보정 정밀도", value: "±0.1mm" },
      { label: "데이터 저장", value: "로컬 DB / 클라우드 연동" },
      { label: "API 지원", value: "REST API, OPC-UA" },
    ],
    benefits: [
      "자재 손실률 15~20% 절감",
      "작업 계획 수립 시간 80% 단축",
      "실시간 품질 추적으로 불량률 감소",
      "설비 가동률 모니터링 및 최적화",
    ],
    relatedProducts: ["sensing-package", "laser-cutting-cell", "plasma-cutting-cell"],
  },
  "sensing-package": {
    id: "sensing-package",
    name: "Sensing Package",
    category: "Cutting System Products",
    categorySlug: "cutting",
    tagline: "정밀 센싱으로 완벽한 절단을 실현",
    description: "3D 비전 카메라와 레이저 거리 센서를 결합한 고정밀 형상 인식 시스템입니다. 실제 자재의 변형을 정확히 감지하여 절단 오차를 최소화합니다.",
    features: [
      {
        title: "3D 비전 시스템",
        description: "고해상도 3D 스캔으로 형강의 실제 형상을 정밀하게 측정합니다.",
      },
      {
        title: "레이저 거리 센서",
        description: "비접촉 방식으로 자재 표면까지의 거리를 밀리미터 단위로 측정합니다.",
      },
      {
        title: "휨/비틀림 감지",
        description: "실제 자재의 변형 정도를 자동 감지하여 보정 데이터를 생성합니다.",
      },
      {
        title: "자동 캘리브레이션",
        description: "센서 간 오차를 자동으로 보정하여 일관된 측정 정밀도를 유지합니다.",
      },
    ],
    specifications: [
      { label: "3D 스캔 정밀도", value: "±0.05mm" },
      { label: "측정 범위", value: "최대 2m x 1m" },
      { label: "스캔 속도", value: "10,000 포인트/초" },
      { label: "레이저 등급", value: "Class 2 (안전)" },
      { label: "동작 온도", value: "-10°C ~ 50°C" },
      { label: "보호 등급", value: "IP54" },
    ],
    benefits: [
      "절단 정밀도 99.2% 이상 달성",
      "자재 변형으로 인한 불량 제거",
      "수동 측정 작업 완전 대체",
      "실시간 품질 데이터 확보",
    ],
    relatedProducts: ["operating-sw", "laser-cutting-cell", "plasma-cutting-cell"],
  },
  "infeed-module": {
    id: "infeed-module",
    name: "Infeed Module",
    category: "Cutting System Products",
    categorySlug: "cutting",
    tagline: "자재 투입의 완전 자동화",
    description: "컨베이어, 푸셔, 트래커를 결합한 자재 인입 시스템입니다. 다양한 형강 소재를 자동으로 정렬하고 절단 위치까지 정확하게 이송합니다.",
    features: [
      {
        title: "롤러 컨베이어",
        description: "중량물 이송에 최적화된 고하중 롤러 컨베이어로 안정적인 자재 이송을 보장합니다.",
      },
      {
        title: "자동 정렬 푸셔",
        description: "비정형 자재도 정확한 위치로 정렬하는 다축 푸셔 시스템입니다.",
      },
      {
        title: "위치 트래킹",
        description: "자재의 실시간 위치를 추적하여 절단 타이밍을 최적화합니다.",
      },
      {
        title: "버퍼 스토리지",
        description: "연속 작업을 위한 자재 버퍼 공간을 제공하여 생산성을 극대화합니다.",
      },
    ],
    specifications: [
      { label: "최대 적재 중량", value: "5,000kg/m" },
      { label: "컨베이어 속도", value: "0.1~1.0m/s (가변)" },
      { label: "정렬 정밀도", value: "±1mm" },
      { label: "대응 형강 크기", value: "H100~H900" },
      { label: "구동 방식", value: "서보 모터" },
      { label: "안전 기능", value: "광학 센서, 비상 정지" },
    ],
    benefits: [
      "인력 투입 없는 완전 자동 인입",
      "다양한 형강 소재 대응",
      "연속 작업으로 생산성 향상",
      "작업자 안전 확보",
    ],
    videoUrl: "https://res.cloudinary.com/dzu2wygbi/video/upload/배출보조_잔재_절단_qgucir.mp4",
    relatedProducts: ["sensing-package", "laser-cutting-cell", "outfeed-scrap"],
  },
  "laser-cutting-cell": {
    id: "laser-cutting-cell",
    name: "Laser Cutting Cell",
    category: "Cutting System Products",
    categorySlug: "cutting",
    tagline: "고정밀 파이버 레이저 절단",
    description: "6kW~12kW 출력의 파이버 레이저를 탑재한 고정밀 형강 절단 셀입니다. 복잡한 형상도 정밀하게 절단하며, 열 영향부를 최소화합니다.",
    features: [
      {
        title: "파이버 레이저",
        description: "고출력 파이버 레이저로 빠르고 정밀한 절단을 구현합니다.",
      },
      {
        title: "6축 로봇 탑재",
        description: "산업용 6축 로봇으로 3D 형상 절단이 가능합니다.",
      },
      {
        title: "자동 노즐 교환",
        description: "소재/두께에 따라 노즐을 자동 교환하여 최적의 절단 품질을 유지합니다.",
      },
      {
        title: "집진 시스템",
        description: "절단 시 발생하는 분진을 효과적으로 포집하여 작업 환경을 개선합니다.",
      },
    ],
    specifications: [
      { label: "레이저 출력", value: "6kW / 8kW / 12kW" },
      { label: "절단 두께", value: "최대 25mm (연강 기준)" },
      { label: "위치 정밀도", value: "±0.1mm" },
      { label: "절단 속도", value: "최대 20m/min" },
      { label: "작업 영역", value: "2,000 x 1,000 x 500mm" },
      { label: "냉각 방식", value: "수냉식" },
    ],
    benefits: [
      "열 영향부(HAZ) 최소화",
      "복잡한 3D 형상 절단 가능",
      "높은 절단 품질과 정밀도",
      "낮은 유지보수 비용",
    ],
    relatedProducts: ["operating-sw", "sensing-package", "outfeed-scrap"],
  },
  "plasma-cutting-cell": {
    id: "plasma-cutting-cell",
    name: "Plasma Cutting Cell",
    category: "Cutting System Products",
    categorySlug: "cutting",
    tagline: "고속 플라즈마 중후판 절단",
    description: "최대 400A 출력의 고속 플라즈마 절단 셀입니다. 두꺼운 형강도 빠르게 절단하며, 경제적인 운영이 가능합니다.",
    features: [
      {
        title: "고출력 플라즈마",
        description: "400A 고출력으로 50mm 두께의 중후판도 빠르게 절단합니다.",
      },
      {
        title: "자동 높이 제어",
        description: "토치 높이를 자동으로 조절하여 일정한 절단 품질을 유지합니다.",
      },
      {
        title: "소모품 관리",
        description: "전극/노즐 수명을 자동 모니터링하여 적정 교체 시점을 알립니다.",
      },
      {
        title: "경사 절단",
        description: "최대 45° 경사 절단으로 개선 가공까지 한 번에 처리합니다.",
      },
    ],
    specifications: [
      { label: "플라즈마 출력", value: "최대 400A" },
      { label: "절단 두께", value: "최대 50mm (연강 기준)" },
      { label: "절단 속도", value: "최대 8m/min (10mm 기준)" },
      { label: "경사 절단", value: "최대 45°" },
      { label: "작업 영역", value: "3,000 x 1,500 x 600mm" },
      { label: "가스 종류", value: "산소, 질소, 아르곤" },
    ],
    benefits: [
      "두꺼운 소재도 고속 절단",
      "레이저 대비 경제적인 운영",
      "개선 가공 일체화로 공정 단축",
      "다양한 소재 대응 (스테인리스, 알루미늄 등)",
    ],
    relatedProducts: ["operating-sw", "sensing-package", "outfeed-scrap"],
  },
  "outfeed-scrap": {
    id: "outfeed-scrap",
    name: "Outfeed & Scrap",
    category: "Cutting System Products",
    categorySlug: "cutting",
    tagline: "절단품 배출과 잔재 처리의 자동화",
    description: "절단 완료된 제품의 자동 배출과 잔재(스크랩) 처리를 담당하는 시스템입니다. 분류 시스템으로 제품과 잔재를 자동 구분하여 효율적인 후처리를 지원합니다.",
    features: [
      {
        title: "자동 분류 시스템",
        description: "절단품과 잔재를 자동으로 분류하여 각각의 경로로 배출합니다.",
      },
      {
        title: "스크랩 수거함",
        description: "잔재를 자동으로 수집하여 정기적인 반출이 용이합니다.",
      },
      {
        title: "배출 컨베이어",
        description: "절단 완료품을 안전하게 다음 공정으로 이송합니다.",
      },
      {
        title: "적재 로봇 연동",
        description: "필요시 로봇과 연동하여 자동 적재까지 구현합니다.",
      },
    ],
    specifications: [
      { label: "배출 속도", value: "최대 1.5m/s" },
      { label: "분류 정확도", value: "99% 이상" },
      { label: "스크랩 수용량", value: "2,000kg" },
      { label: "컨베이어 폭", value: "800 / 1,000 / 1,200mm" },
      { label: "구동 방식", value: "서보 모터" },
      { label: "안전 기능", value: "과부하 감지, 비상 정지" },
    ],
    benefits: [
      "절단 후 처리 완전 자동화",
      "잔재 관리 효율화",
      "작업자 안전 확보",
      "후공정 연계 용이",
    ],
    videoUrl: "https://res.cloudinary.com/dzu2wygbi/video/upload/배출보조_잔재_절단_qgucir.mp4",
    relatedProducts: ["infeed-module", "laser-cutting-cell", "plasma-cutting-cell"],
  },
  // AMR 제품군
  "rugged-amr-base": {
    id: "rugged-amr-base",
    name: "Rugged AMR Base",
    category: "Rugged AMR Products",
    categorySlug: "amr",
    tagline: "험지를 달리는 전방향 AMR 플랫폼",
    description: "Swerve Drive와 Rocker-Bogie 샤시를 결합한 산업현장 특화형 AMR 플랫폼입니다. 울퉁불퉁한 공장 바닥에서도 안정적인 주행이 가능합니다.",
    features: [
      {
        title: "Swerve Drive",
        description: "조향과 구동이 일체화된 모듈로 전방향 이동과 제자리 회전이 가능합니다.",
      },
      {
        title: "Rocker-Bogie 샤시",
        description: "화성 탐사 로버에서 영감을 받은 샤시로 험지 대응력이 뛰어납니다.",
      },
      {
        title: "고무 휠",
        description: "고하중 고무 휠로 미끄러짐 없이 안정적인 주행을 보장합니다.",
      },
      {
        title: "모듈식 설계",
        description: "상부에 다양한 페이로드 모듈을 장착할 수 있습니다.",
      },
    ],
    specifications: [
      { label: "최대 적재", value: "1,000kg" },
      { label: "최대 속도", value: "1.5m/s" },
      { label: "배터리", value: "48V 100Ah LiFePO4" },
      { label: "연속 운행", value: "8시간 이상" },
      { label: "경사면 주행", value: "최대 10°" },
      { label: "회전 반경", value: "0 (제자리 회전)" },
    ],
    benefits: [
      "비정형 바닥 환경 대응",
      "전방향 이동으로 좁은 공간 활용",
      "장시간 연속 운행",
      "다양한 페이로드 장착",
    ],
    relatedProducts: ["auto-docking-module", "payload-modules", "fleet-management"],
  },
  "auto-docking-module": {
    id: "auto-docking-module",
    name: "Auto Docking Module",
    category: "Rugged AMR Products",
    categorySlug: "amr",
    tagline: "6mm 정밀도의 자동 도킹",
    description: "비전 센서와 거리 센서를 결합한 정밀 자동 도킹 모듈입니다. 목표 위치에 6mm 이내의 정밀도로 자동 접근합니다.",
    features: [
      {
        title: "비전 센서",
        description: "마커 인식을 통해 도킹 위치를 정확하게 파악합니다.",
      },
      {
        title: "거리 센서",
        description: "근접 센서로 최종 접근 단계의 정밀도를 높입니다.",
      },
      {
        title: "자동 정렬",
        description: "틀어진 각도를 자동으로 보정하여 정확한 도킹을 수행합니다.",
      },
      {
        title: "재시도 로직",
        description: "도킹 실패 시 자동으로 재시도하여 성공률을 높입니다.",
      },
    ],
    specifications: [
      { label: "도킹 정밀도", value: "±6mm" },
      { label: "각도 정밀도", value: "±0.5°" },
      { label: "인식 거리", value: "최대 3m" },
      { label: "도킹 시간", value: "평균 15초" },
      { label: "성공률", value: "99.5% 이상" },
      { label: "마커 타입", value: "AR 마커, 반사 테이프" },
    ],
    benefits: [
      "고정밀 자동 도킹으로 무인 운영",
      "다양한 도킹 스테이션 대응",
      "높은 도킹 성공률",
      "빠른 도킹 속도",
    ],
    relatedProducts: ["rugged-amr-base", "payload-modules", "fleet-management"],
  },
  "payload-modules": {
    id: "payload-modules",
    name: "Payload Modules",
    category: "Rugged AMR Products",
    categorySlug: "amr",
    tagline: "용도에 맞는 맞춤형 상부 모듈",
    description: "스크랩 박스, 팔레트, 랙, 컨베이어 등 운반 대상에 최적화된 상부 모듈입니다. 빠른 교체가 가능하여 다양한 작업에 유연하게 대응합니다.",
    features: [
      {
        title: "스크랩 박스",
        description: "절단 잔재 운반에 최적화된 틸팅 가능 박스입니다.",
      },
      {
        title: "팔레트 리프터",
        description: "표준 팔레트를 들어올려 운반할 수 있는 리프팅 모듈입니다.",
      },
      {
        title: "컨베이어 탑",
        description: "롤러 컨베이어를 탑재하여 라인 간 자재 이송에 활용합니다.",
      },
      {
        title: "커스텀 지그",
        description: "고객 요구에 맞는 맞춤형 지그/거치대를 제작합니다.",
      },
    ],
    specifications: [
      { label: "탑재 중량", value: "최대 1,000kg" },
      { label: "교체 시간", value: "5분 이내" },
      { label: "틸팅 각도", value: "최대 60° (스크랩 박스)" },
      { label: "리프팅 높이", value: "최대 300mm (팔레트)" },
      { label: "컨베이어 속도", value: "최대 0.5m/s" },
      { label: "통신 방식", value: "CAN, RS485" },
    ],
    benefits: [
      "다양한 운반 물품 대응",
      "빠른 모듈 교체로 유연한 운영",
      "현장 맞춤형 커스터마이징",
      "기존 설비와 연동 가능",
    ],
    relatedProducts: ["rugged-amr-base", "auto-docking-module", "fleet-management"],
  },
  "fleet-management": {
    id: "fleet-management",
    name: "Fleet Management",
    category: "Rugged AMR Products",
    categorySlug: "amr",
    tagline: "다수 AMR의 통합 운영",
    description: "다수의 AMR을 효율적으로 관리하고 작업을 할당하는 Fleet 관리 시스템입니다. 실시간 위치 추적, 충돌 회피, 작업 최적화를 제공합니다.",
    features: [
      {
        title: "실시간 위치 추적",
        description: "모든 AMR의 위치를 실시간으로 모니터링합니다.",
      },
      {
        title: "작업 할당 최적화",
        description: "거리, 배터리, 부하를 고려하여 최적의 AMR에 작업을 할당합니다.",
      },
      {
        title: "충돌 회피",
        description: "AMR 간 경로 충돌을 사전에 감지하고 회피 경로를 생성합니다.",
      },
      {
        title: "웹 대시보드",
        description: "웹 기반 대시보드로 어디서나 Fleet 상태를 확인합니다.",
      },
    ],
    specifications: [
      { label: "관리 대수", value: "최대 50대" },
      { label: "위치 갱신 주기", value: "100ms" },
      { label: "작업 할당 시간", value: "평균 500ms" },
      { label: "지원 맵 크기", value: "최대 100,000m²" },
      { label: "API", value: "REST, WebSocket" },
      { label: "연동", value: "MES, WMS, ERP" },
    ],
    benefits: [
      "다수 AMR 효율적 운영",
      "실시간 상황 파악",
      "작업 처리량 최적화",
      "기간 시스템 연동",
    ],
    relatedProducts: ["rugged-amr-base", "auto-docking-module", "payload-modules"],
  },
  // AI 제품군
  "smart-teaching-tool": {
    id: "smart-teaching-tool",
    name: "Smart Teaching Tool",
    category: "AI Brain Robot Products",
    categorySlug: "ai",
    tagline: "숙련공의 기술을 데이터로",
    description: "숙련 작업자의 동작을 캡처하여 로봇 학습 데이터로 변환하는 스마트 티칭 도구입니다. 힘/속도 감지 센서로 미세한 작업 감각까지 기록합니다.",
    features: [
      {
        title: "동작 캡처",
        description: "고정밀 모션 캡처로 작업자의 동작을 3D로 기록합니다.",
      },
      {
        title: "힘/토크 감지",
        description: "작업 중 가해지는 힘과 토크를 실시간으로 측정합니다.",
      },
      {
        title: "학습 데이터 생성",
        description: "캡처된 데이터를 AI 학습에 적합한 형태로 자동 변환합니다.",
      },
      {
        title: "반복 학습",
        description: "다양한 상황에서의 반복 작업을 학습하여 로버스트한 모델을 생성합니다.",
      },
    ],
    specifications: [
      { label: "위치 정밀도", value: "±0.1mm" },
      { label: "힘 감지 범위", value: "0.1~500N" },
      { label: "캡처 주파수", value: "1000Hz" },
      { label: "데이터 포맷", value: "ROS2, CSV, JSON" },
      { label: "연동 로봇", value: "주요 산업용 로봇 호환" },
      { label: "상태", value: "Coming Soon" },
    ],
    benefits: [
      "숙련 기술의 디지털화",
      "로봇 티칭 시간 대폭 단축",
      "일관된 작업 품질 확보",
      "노하우 영구 보존",
    ],
    relatedProducts: ["3d-vision-package", "ai-control-module"],
  },
  "3d-vision-package": {
    id: "3d-vision-package",
    name: "3D Vision Package",
    category: "AI Brain Robot Products",
    categorySlug: "ai",
    tagline: "로봇의 눈, 고정밀 3D 비전",
    description: "AI Brain Robot의 시각 시스템을 담당하는 고정밀 3D 비전 패키지입니다. 실시간 형상 인식으로 비정형 작업 대상에 대응합니다.",
    features: [
      {
        title: "고해상도 스캔",
        description: "서브밀리미터 수준의 고해상도 3D 스캔을 제공합니다.",
      },
      {
        title: "실시간 처리",
        description: "GPU 가속으로 대용량 포인트 클라우드를 실시간 처리합니다.",
      },
      {
        title: "형상 분석",
        description: "딥러닝 기반 형상 인식으로 작업 대상을 자동 분류합니다.",
      },
      {
        title: "결함 검출",
        description: "표면 결함을 자동으로 검출하여 품질 관리에 활용합니다.",
      },
    ],
    specifications: [
      { label: "스캔 정밀도", value: "±0.02mm" },
      { label: "처리 속도", value: "30fps" },
      { label: "작업 거리", value: "500~1,500mm" },
      { label: "시야각", value: "60° x 45°" },
      { label: "인식 알고리즘", value: "딥러닝 (PyTorch)" },
      { label: "상태", value: "Coming Soon" },
    ],
    benefits: [
      "비정형 대상 자동 인식",
      "실시간 형상 분석",
      "품질 검사 자동화",
      "다양한 조명 환경 대응",
    ],
    relatedProducts: ["smart-teaching-tool", "ai-control-module"],
  },
  "ai-control-module": {
    id: "ai-control-module",
    name: "AI Control Module",
    category: "AI Brain Robot Products",
    categorySlug: "ai",
    tagline: "학습하고 적응하는 로봇 제어",
    description: "Physical-AI 기반의 적응형 로봇 제어 모듈입니다. 현장 변동에 실시간으로 대응하며, 지속적인 학습으로 작업 품질을 최적화합니다.",
    features: [
      {
        title: "실시간 학습",
        description: "작업 중에도 지속적으로 학습하여 성능을 개선합니다.",
      },
      {
        title: "변동 대응",
        description: "작업 환경의 변화를 감지하고 제어 파라미터를 자동 조정합니다.",
      },
      {
        title: "품질 최적화",
        description: "품질 피드백을 반영하여 최적의 작업 조건을 탐색합니다.",
      },
      {
        title: "안전 제어",
        description: "이상 상황을 감지하면 즉시 안전 모드로 전환합니다.",
      },
    ],
    specifications: [
      { label: "제어 주기", value: "1ms" },
      { label: "학습 알고리즘", value: "강화학습, 모방학습" },
      { label: "추론 하드웨어", value: "NVIDIA Jetson AGX" },
      { label: "통신", value: "EtherCAT, CAN" },
      { label: "연동 로봇", value: "6축/7축 산업용 로봇" },
      { label: "상태", value: "Coming Soon" },
    ],
    benefits: [
      "현장 변동에 강한 자동화",
      "지속적인 품질 개선",
      "숙련공 수준의 작업 품질",
      "예측 불가 상황 대응",
    ],
    relatedProducts: ["smart-teaching-tool", "3d-vision-package"],
  },
}

// ID로 제품 찾기
export const getProductById = (id: string): ProductDetail | undefined => {
  return productDetails[id]
}

// 카테고리별 제품 목록
export const getProductsByCategory = (categorySlug: string): ProductDetail[] => {
  return Object.values(productDetails).filter(p => p.categorySlug === categorySlug)
}

// 관련 제품 가져오기
export const getRelatedProducts = (productId: string): ProductDetail[] => {
  const product = productDetails[productId]
  if (!product) return []
  return product.relatedProducts
    .map(id => productDetails[id])
    .filter((p): p is ProductDetail => p !== undefined)
}

