import cuttingImage from "@assets/generated_images/industrial_robotics_steel_cutting.png"
import amrImage from "@assets/generated_images/rugged_amr_industrial_transport.png"
import { getVideoUrl, MEDIA_IDS } from "./cloudinary"

export interface CaseStudy {
  id: string
  title: string
  client: string
  industry: string
  solution: string
  challenge: string
  result: string
  image: string
  // 상세 페이지용 추가 데이터
  videoUrl?: string
  overview: string
  problemDetails: string[]
  solutionDetails: string[]
  results: {
    metric: string
    value: string
    description: string
  }[]
  timeline: string
  testimonial?: {
    quote: string
    author: string
    position: string
  }
  gallery?: string[]
  relatedCases?: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: "hd-hyundai-scrap-clamping",
    title: "형강 끝단부 정밀 가공을 위한 스마트 보조 배출 시스템",
    client: "HD현대중공업",
    industry: "조선",
    solution: "Auxiliary Clamping & Discharge Unit",
    challenge: "인입 푸셔(Input Pusher)의 고정 한계 구간에서 소재 떨림 발생, 끝단부 가공 정밀도 저하",
    result: "잔재부(Last Piece) 가공 오차 0.5mm 이내 달성, 자재 수율 극대화",
    image: cuttingImage,
    videoUrl: "https://res.cloudinary.com/dzu2wygbi/video/upload/v1766045582/%EB%B0%B0%EC%B6%9C%EB%B3%B4%EC%A1%B0%EC%A0%88%EB%8B%A81_gzxmut.mp4",
    overview: "형강 가공의 난제였던 '마지막 잔재 구간(End-piece)'의 정밀도를 확보한 프로젝트입니다. 기존 인입 푸셔가 더 이상 소재를 밀어줄 수 없는 끝단 구간에서 소재가 흔들려 원형/타원 홀 가공 품질이 떨어지는 문제를 해결하기 위해, '보조 배출 클램핑 장치'를 개발했습니다. 이를 통해 마지막 순간까지 소재를 견고하게 파지하여 전 구간 균일한 가공 품질을 실현했습니다.",
    problemDetails: [
      "인입 푸셔(Feeder)의 클램핑이 해제되는 끝단 구간에서 소재 고정력 상실",
      "고정되지 않은 자재의 진동(Chattering)으로 인해 원형/타원 홀 가공 시 형상 일그러짐 발생",
      "끝단부 가공 정밀도 저하로 인한 자재 폐기량(Loss) 증가 및 후가공 소요",
      "비정형 형강의 특성상 마지막 구간 자세 제어의 어려움",
    ],
    solutionDetails: [
      "인입 푸셔와 연동되는 '보조 배출/파지 장치(Auxiliary Gripper)' 자체 개발 및 적용",
      "가공 종료 시점까지 소재를 양방향에서 잡아주는 'Double-Holding' 메커니즘 구현",
      "마지막 잔재의 형상(원형, 타원 등) 가공 시 떨림을 방지하는 정밀 클램핑 기술",
      "절단 완료 후 잔재를 안전하게 배출구로 이송하는 자동화 시퀀스 통합",
    ],
    results: [
      {
        metric: "가공 정밀도",
        value: "0.5mm 이내",
        description: "잔재부 가공 오차 달성",
      },
      {
        metric: "자재 수율",
        value: "15% 향상",
        description: "끝단부 폐기량 감소",
      },
      {
        metric: "품질 균일도",
        value: "99%+",
        description: "전 구간 동일 품질 실현",
      },
      {
        metric: "후가공",
        value: "제거",
        description: "끝단부 재가공 불필요",
      },
    ],
    timeline: "2023년 3월 ~ 2023년 12월 (10개월)",
    testimonial: {
      quote: "마지막 잔재 구간까지 정밀하게 가공할 수 있게 되어 자재 손실이 크게 줄었습니다. 보조 클램핑 시스템 덕분에 품질 균일성도 확보되었습니다.",
      author: "김OO 부장",
      position: "HD현대중공업 생산기술팀",
    },
    relatedCases: ["hanwha-plasma-50m-install", "sme-custom-solution"],
  },
    {
      id: "hanwha-plasma-50m-install",
      title: "국내 최대 50m 초장축 형강 플라즈마 절단 라인 구축",
      client: "한화오션",
      industry: "조선 (Shipbuilding)",
      solution: "Mega-Scale Plasma Infrastructure",
      challenge: "초대형 선박 블록 생산을 위한 50m 장축 자재의 원스톱(One-Stop) 가공 인프라 확보",
      result: "국내 최대 길이(50m) 가공 설비 구축 및 대형 자재 양산 체계 완성",
      image: cuttingImage, // 50m 설비의 웅장함이 돋보이는 사진 추천
      videoUrl: getVideoUrl(MEDIA_IDS.CUTTING_ROBOT),
      overview: "한화오션 거제 사업장에 국내 최대 규모인 '50m 초장축 형강 가공 전용 라인'을 성공적으로 구축한 사례입니다. 초대형 선박 건조에 필요한 50m 길이의 대형 형강을 분할 없이 한 번에 가공할 수 있는 'Mega-Scale' 생산 기지를 조성하여, 대형 조선소의 제조 역량을 한 단계 확장했습니다.",
      problemDetails: [ // 여기서는 '구축 배경/목표'로 해석
        "초대형 선박 및 해양 플랜트 수요 증가에 따른 대형 자재 처리 능력 필수화",
        "기존 설비 규격을 넘어서는 50m 장축 자재의 단일 가공 라인 필요",
        "고강도/고후판 대형 형강의 고속 정밀 절단을 위한 고출력 플라즈마 도입",
        "대형 자재 핸들링을 위한 고하중 설비 및 광범위 안전 시스템 구축",
      ],
      solutionDetails: [
        "50m 단일 베드(Single Bed) 및 듀얼 갠트리 시스템 설계를 통한 초대형 라인 구축",
        "장거리 이동 시에도 정밀도를 유지하는 'Long-Stroke' 제어 기술 적용",
        "대형 H-Beam 및 앵글을 한 번에 로딩/가공 가능한 광폭 작업대 설치",
        "초대형 설비 전용 집진 및 유틸리티 공급 시스템 완비",
      ],
      results: [
        {
          metric: "설비 규모",
          value: "50m",
          description: "국내 최대 길이 가공 라인 구축",
        },
        {
          metric: "가공 능력",
          value: "One-Shot",
          description: "분할 없는 단일 공정 처리 실현",
        },
        {
          metric: "절단 속도",
          value: "High-Speed",
          description: "고출력 플라즈마로 가공 속도 극대화",
        },
        {
          metric: "대응 자재",
          value: "All-in-One",
          description: "다양한 대형 형강 규격 완벽 대응",
        },
      ],
    timeline: "2023년 6월 ~ 2024년 2월 (9개월)",
    testimonial: {
      quote: "50m 장축 자재를 분할 없이 한 번에 가공할 수 있게 되어 생산 효율이 크게 향상되었습니다. 대형 선박 건조 일정에 맞춰 안정적으로 자재 공급이 가능해졌습니다.",
      author: "박OO 차장",
      position: "한화오션 생산기술팀",
    },
    relatedCases: ["hd-hyundai-scrap-clamping", "sme-custom-solution"],
  },
  {
    id: "sme-custom-solution",
    title: "중소 제조 현장 맞춤형 형강 절단 장비 및 전용 SW 구축",
    client: "중소 형강 가공 전문기업 B사",
    industry: "철강 가공 / 건축 자재 (Steel Fabrication)",
    solution: "Customized Steel Cutting System & Dedicated OS",
    challenge: "기성품 장비의 높은 도입 장벽(비용/크기)과 현장 맞춤형 기능 부재",
    result: "현장 요구사항 100% 반영된 장비 구축, 비숙련자 운용 효율 극대화",
    image: cuttingImage,
    videoUrl: getVideoUrl(MEDIA_IDS.CUTTING_ROBOT),
    overview: "대형 외산 장비 도입이 부담스러운 중소형 가공 업체를 위해, 현장의 가용 공간과 예산, 그리고 작업자의 숙련도를 고려한 '맞춤형 형강 절단 솔루션'을 공급했습니다. 특히 현장 근로자들의 요구사항을 반영하여, 복잡한 기능은 덜어내고 꼭 필요한 기능만 직관적으로 담은 '전용 운용 소프트웨어'를 커스터마이징하여 제공했습니다.",
    problemDetails: [
      "기성 대형 장비는 중소 공장의 협소한 공간과 예산에 맞지 않는 오버스펙(Over-spec)",
      "현장 작업자들에게 불필요한 복잡한 기능 탑재로 인한 사용성 저하",
      "숙련된 전담 오퍼레이터가 없어 장비 도입 후에도 활용도 저조",
      "공장마다 상이한 작업 동선과 취급 자재 규격에 대한 유연한 대응 불가",
    ],
    solutionDetails: [
      "고객사 현장 레이아웃 및 주력 생산 규격을 분석한 '공정 맞춤형 하드웨어' 설계",
      "현장 근로자 인터뷰를 기반으로 UI/UX를 최적화한 '사용자 친화적 제어 프로그램' 개발",
      "자주 사용하는 절단 패턴(절단, 홀, 마킹)을 원터치로 실행하는 '간편 모드' 탑재",
      "현장 인력의 눈높이에 맞춘 직관적인 조작법 교육 및 유지보수 시스템 제공",
    ],
    results: [
      {
        metric: "현장 최적화",
        value: "Custom-Fit",
        description: "공간/예산/기능 100% 맞춤 설계 구현",
      },
      {
        metric: "운용 편의성",
        value: "User-Friendly",
        description: "현장 근로자 전용 SW로 진입 장벽 제거",
      },
      {
        metric: "도입 효율",
        value: "Maximized",
        description: "불필요한 기능 제거로 투자 대비 효율 극대화",
      },
      {
        metric: "인력 적응",
        value: "Immediate",
        description: "별도 전문 교육 없이 즉시 현장 투입 가능",
      },
    ],
    timeline: "2024년 1월 ~ 2024년 6월 (6개월)",
    testimonial: {
      quote: "우리 현장 상황에 딱 맞는 장비를 도입하니, 오히려 큰 장비보다 생산성이 좋습니다. 직원들도 쉽게 적응해서 바로 사용할 수 있었어요.",
      author: "이OO 대표",
      position: "B사 대표이사",
    },
    relatedCases: ["hd-hyundai-scrap-clamping", "hanwha-plasma-50m-install"],
  },
]

export function getCaseById(id: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.id === id)
}

export function getRelatedCases(id: string): CaseStudy[] {
  const currentCase = getCaseById(id)
  if (!currentCase?.relatedCases) return []
  return currentCase.relatedCases
    .map((relatedId) => getCaseById(relatedId))
    .filter((c): c is CaseStudy => c !== undefined)
}
