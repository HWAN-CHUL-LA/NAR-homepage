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
  "pcrs-standard": {
    id: "pcrs-standard",
    name: "PCRS-standard",
    category: "형강절단 로봇",
    categorySlug: "cutting",
    tagline: "표준형 형강 절단 로봇 시스템",
    description: "중소규모 현장에 최적화된 표준형 형강 절단 로봇입니다. 고성능 플라즈마 절단 기술을 바탕으로 정밀한 가공 품질을 제공합니다.",
    features: [
      { title: "고정밀 절단", description: "±0.5mm 이내의 정밀한 절단 품질을 보장합니다." },
      { title: "표준 규격 대응", description: "H형강, 앵글, 채널 등 다양한 표준 형강 규격을 지원합니다." }
    ],
    specifications: [
      { label: "절단 방식", value: "플라즈마" },
      { label: "정밀도", value: "±0.5mm" }
    ],
    benefits: ["생산성 향상", "자재 손실 최소화"],
    relatedProducts: ["pcrs-extended", "lcrs-standard"]
  },
  "pcrs-extended": {
    id: "pcrs-extended",
    name: "PCRS-Extended",
    category: "형강절단 로봇",
    categorySlug: "cutting",
    tagline: "확장형 형강 절단 로봇 시스템",
    description: "대형 자재 및 고하중 작업에 특화된 확장형 시스템입니다. 더 넓은 작업 영역과 강력한 핸들링 능력을 갖추고 있습니다.",
    features: [
      { title: "대형 자재 대응", description: "최대 12m 이상의 장축 자재 가공이 가능합니다." },
      { title: "고하중 설계", description: "중량물 이송 및 고정을 위한 강화된 프레임 구조를 적용했습니다." }
    ],
    specifications: [
      { label: "작업 영역", value: "최대 15m" },
      { label: "가공 속도", value: "고속 모드 지원" }
    ],
    benefits: ["대형 프로젝트 대응", "작업 효율 극대화"],
    relatedProducts: ["pcrs-standard", "lcrs-standard"]
  },
  "lcrs-standard": {
    id: "lcrs-standard",
    name: "LCRS - standard",
    category: "형강절단 로봇",
    categorySlug: "cutting",
    tagline: "표준형 레이저 형강 절단 로봇 시스템",
    description: "파이버 레이저를 탑재하여 서브밀리미터 수준의 초정밀 가공을 실현합니다. 열 변형이 적어 후공정 부담을 획기적으로 줄여줍니다.",
    features: [
      { title: "레이저 정밀 가공", description: "파이버 레이저 기반의 깨끗한 절단면을 제공합니다." },
      { title: "최소 열 변형", description: "정밀 레이저 제어로 자재의 변형을 최소화합니다." }
    ],
    specifications: [
      { label: "레이저 출력", value: "6kW / 12kW" },
      { label: "가공 정밀도", value: "±0.1mm" }
    ],
    benefits: ["초정밀 품질 구현", "후가공 시간 단축"],
    relatedProducts: ["pcrs-standard", "pcrs-extended"]
  },
  "welding-cutting-robot": {
    id: "welding-cutting-robot",
    name: "수용접 절단 로봇",
    category: "수용접 로봇",
    categorySlug: "welding",
    tagline: "협동 로봇 기반 수용접 자동화 솔루션",
    description: "작업자와 안전하게 협업하며 용접과 절단 작업을 동시에 수행할 수 있는 다기능 로봇 시스템입니다.",
    features: [
      { title: "안전 협업", description: "충돌 감지 및 안전 센서 탑재로 작업자와 공존 가능합니다." },
      { title: "듀얼 모드", description: "용접과 절단 툴을 신속하게 교체하여 사용 가능합니다." }
    ],
    specifications: [
      { label: "로봇 타입", value: "협동 로봇" },
      { label: "가반 하중", value: "10kg / 20kg" }
    ],
    benefits: ["작업 안전성 확보", "공정 유연성 증대"],
    relatedProducts: ["field-amr"]
  },
  "field-amr": {
    id: "field-amr",
    name: "현장적용형 AMR",
    category: "AMR",
    categorySlug: "amr",
    tagline: "산업 현장 실무에 최적화된 자율 주행 로봇",
    description: "복잡하고 거친 산업 현장에서도 안정적으로 자재를 이송하는 전방향 자율 주행 로봇입니다.",
    features: [
      { title: "전방향 주행", description: "Swerve Drive 기반으로 좁은 공간에서도 자유로운 이동이 가능합니다." },
      { title: "험지 대응", description: "특수 샤시 설계로 요철이 있는 바닥에서도 안정적으로 주행합니다." }
    ],
    specifications: [
      { label: "적재 용량", value: "1,000kg" },
      { label: "주행 방식", value: "LiDAR SLAM" }
    ],
    benefits: ["물류 자동화 실현", "인적 오류 방지"],
    relatedProducts: ["welding-cutting-robot"]
  },
  "cutting-automation-ai": {
    id: "cutting-automation-ai",
    name: "형강절단 로봇 무인화 AI",
    category: "Physical AI",
    categorySlug: "ai",
    tagline: "형강 절단 공정의 완전 무인화를 위한 AI 솔루션",
    description: "비전 센서 데이터를 실시간으로 분석하여 자재의 변형을 보정하고 최적의 절단 경로를 스스로 생성하는 AI 시스템입니다.",
    features: [
      { title: "실시간 보정 AI", description: "자재의 휨과 비틀림을 실시간으로 감지하고 보정합니다." },
      { title: "자율 경로 생성", description: "도면 데이터를 기반으로 최적의 가공 경로를 자동 산출합니다." }
    ],
    specifications: [
      { label: "분석 주기", value: "10ms" },
      { label: "보정 정밀도", value: "±0.1mm" }
    ],
    benefits: ["완전 무인화 실현", "품질 균일성 확보"],
    relatedProducts: ["expert-imitation-ai"]
  },
  "expert-imitation-ai": {
    id: "expert-imitation-ai",
    name: "고숙련자 행동모사 AI",
    category: "Physical AI",
    categorySlug: "ai",
    tagline: "숙련공의 작업 노하우를 학습하고 재현하는 AI",
    description: "베테랑 작업자의 미세한 손동작과 감각을 데이터화하여 로봇이 동일한 수준의 작업을 수행할 수 있도록 학습시키는 기술입니다.",
    features: [
      { title: "행동 모사 학습", description: "숙련공의 동작 데이터를 딥러닝으로 분석하여 로봇에 이식합니다." },
      { title: "감각 데이터 융합", description: "시각뿐만 아니라 힘과 토크 데이터를 통합하여 정밀 제어를 수행합니다." }
    ],
    specifications: [
      { label: "학습 모델", description: "강화학습 / 모방학습" },
      { label: "적용 분야", description: "용접, 사상, 조립 등" }
    ],
    benefits: ["기술 전수 문제 해결", "고난도 작업 자동화"],
    relatedProducts: ["cutting-automation-ai"]
  }
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
