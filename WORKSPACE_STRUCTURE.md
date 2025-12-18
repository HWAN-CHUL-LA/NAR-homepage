# 워크스페이스 구조 분석 문서

## 📋 프로젝트 개요

**프로젝트명:** Robot-Solutions  
**설명:** 산업용 로보틱스 자동화 웹사이트 (B2B)  
**기술 스택:** React + TypeScript (프론트엔드) / Express.js (백엔드) / PostgreSQL + Drizzle ORM (데이터베이스)

---

## 🏗️ 전체 디렉토리 구조

```
Robot-Solutions/
├── 📁 client/                    # 프론트엔드 (React 앱)
│   ├── index.html               # HTML 진입점
│   ├── 📁 public/               # 정적 파일
│   │   └── favicon.png
│   └── 📁 src/                  # 소스 코드
│       ├── main.tsx             # React 앱 진입점
│       ├── App.tsx              # 메인 앱 컴포넌트 (라우팅)
│       ├── index.css            # 글로벌 스타일
│       ├── 📁 components/       # 재사용 컴포넌트
│       ├── 📁 hooks/            # 커스텀 훅
│       ├── 📁 lib/              # 유틸리티 함수
│       └── 📁 pages/            # 페이지 컴포넌트
│
├── 📁 server/                    # 백엔드 (Express.js)
│   ├── index.ts                 # 서버 진입점
│   ├── routes.ts                # API 라우트 정의
│   ├── static.ts                # 정적 파일 서빙
│   ├── storage.ts               # 데이터 저장소 인터페이스
│   └── vite.ts                  # Vite 개발 서버 설정
│
├── 📁 shared/                    # 프론트엔드/백엔드 공유 코드
│   └── schema.ts                # Drizzle ORM 스키마 + Zod 검증
│
├── 📁 script/                    # 빌드 스크립트
│   └── build.ts                 # 프로덕션 빌드 스크립트
│
├── 📁 attached_assets/           # 에셋 파일
│   └── 📁 generated_images/     # AI 생성 이미지
│
└── 설정 파일들
    ├── package.json             # 의존성 및 스크립트
    ├── tsconfig.json            # TypeScript 설정
    ├── vite.config.ts           # Vite 번들러 설정
    ├── tailwind.config.ts       # Tailwind CSS 설정
    ├── postcss.config.js        # PostCSS 설정
    ├── drizzle.config.ts        # Drizzle ORM 설정
    ├── components.json          # shadcn/ui 설정
    └── design_guidelines.md     # 디자인 가이드라인
```

---

## 🎨 프론트엔드 상세 구조

### 페이지 구조 (`client/src/pages/`)

| 경로 | 파일 | 설명 |
|------|------|------|
| `/` | `home.tsx` | 홈페이지 |
| `/solutions` | `solutions/index.tsx` | 솔루션 목록 페이지 |
| `/solutions/cutting` | `solutions/cutting.tsx` | 스마트 절단 시스템 |
| `/solutions/amr` | `solutions/amr.tsx` | 러기드 AMR (자율 이동 로봇) |
| `/solutions/ai-brain` | `solutions/ai-brain.tsx` | AI 브레인 솔루션 |
| `/solutions/pipeline` | `solutions/pipeline.tsx` | 파이프라인 자동화 |
| `/products` | `products.tsx` | 제품 카탈로그 |
| `/cases` | `cases.tsx` | 사례 연구 |
| `/resources` | `resources.tsx` | 리소스/자료실 |
| `/about` | `about.tsx` | 회사 소개 |
| `/contact` | `contact.tsx` | 문의하기 |

### 컴포넌트 구조 (`client/src/components/`)

#### 비즈니스 컴포넌트
```
components/
├── Header.tsx              # 네비게이션 헤더
├── Footer.tsx              # 푸터
├── HeroSection.tsx         # 히어로 섹션 (메인 배너)
├── SolutionPageHero.tsx    # 솔루션 페이지 히어로
├── SolutionsGrid.tsx       # 솔루션 그리드
├── SolutionCard.tsx        # 솔루션 카드
├── FeatureGrid.tsx         # 기능 그리드
├── StatsSection.tsx        # 통계 섹션
├── CaseStudiesSection.tsx  # 사례 연구 섹션
├── CaseStudyCard.tsx       # 사례 연구 카드
├── ProductCard.tsx         # 제품 카드
├── ResourceCard.tsx        # 리소스 카드
├── PackageOptions.tsx      # 패키지 옵션
├── PipelineSteps.tsx       # 파이프라인 단계
├── WhyUsSection.tsx        # "왜 우리인가" 섹션
├── CTASection.tsx          # 콜투액션 섹션
└── ContactForm.tsx         # 문의 양식
```

#### UI 컴포넌트 (`components/ui/`)
shadcn/ui + Radix UI 기반의 범용 UI 컴포넌트:

- **레이아웃:** `card`, `separator`, `aspect-ratio`, `scroll-area`
- **네비게이션:** `navigation-menu`, `menubar`, `breadcrumb`, `tabs`, `pagination`
- **입력:** `button`, `input`, `textarea`, `checkbox`, `radio-group`, `select`, `switch`, `slider`
- **피드백:** `toast`, `alert`, `progress`, `skeleton`
- **오버레이:** `dialog`, `sheet`, `drawer`, `popover`, `tooltip`, `hover-card`
- **데이터 표시:** `table`, `accordion`, `collapsible`, `carousel`, `chart`
- **폼:** `form`, `label`, `calendar`

### 커스텀 훅 (`client/src/hooks/`)
```
hooks/
├── use-mobile.tsx    # 모바일 반응형 감지
└── use-toast.ts      # 토스트 알림 관리
```

### 유틸리티 (`client/src/lib/`)
```
lib/
├── queryClient.ts    # TanStack Query 클라이언트 설정
└── utils.ts          # 유틸리티 함수 (cn, clsx 등)
```

---

## ⚙️ 백엔드 상세 구조

### 서버 파일 (`server/`)

| 파일 | 역할 |
|------|------|
| `index.ts` | Express 서버 초기화, 미들웨어 설정, 포트 바인딩 |
| `routes.ts` | API 라우트 등록 (`/api/*` 경로) |
| `static.ts` | 프로덕션 정적 파일 서빙 |
| `storage.ts` | 데이터 저장소 인터페이스 (CRUD 작업) |
| `vite.ts` | 개발 모드 Vite 미들웨어 설정 |

### 데이터베이스 스키마 (`shared/schema.ts`)

현재 정의된 테이블:
- **users:** 사용자 테이블 (id, username, password)

---

## 📦 주요 의존성

### 프론트엔드
| 패키지 | 용도 |
|--------|------|
| `react` + `react-dom` | UI 라이브러리 |
| `wouter` | 클라이언트 사이드 라우팅 |
| `@tanstack/react-query` | 서버 상태 관리 |
| `framer-motion` | 애니메이션 |
| `lucide-react` + `react-icons` | 아이콘 |
| `react-hook-form` + `zod` | 폼 관리 및 검증 |
| `date-fns` | 날짜 처리 |
| `recharts` | 차트 |

### 백엔드
| 패키지 | 용도 |
|--------|------|
| `express` | 웹 프레임워크 |
| `drizzle-orm` + `pg` | 데이터베이스 ORM |
| `passport` | 인증 |
| `express-session` | 세션 관리 |
| `ws` | WebSocket |

### 스타일링
| 패키지 | 용도 |
|--------|------|
| `tailwindcss` | 유틸리티 CSS 프레임워크 |
| `@radix-ui/*` | 헤드리스 UI 컴포넌트 |
| `class-variance-authority` | 컴포넌트 변형 관리 |
| `tailwind-merge` | Tailwind 클래스 병합 |

### 빌드 도구
| 패키지 | 용도 |
|--------|------|
| `vite` | 번들러 및 개발 서버 |
| `typescript` | 타입 시스템 |
| `tsx` | TypeScript 실행 |
| `esbuild` | 빠른 빌드 |

---

## 🚀 스크립트

```bash
# 개발 서버 실행 (포트 5000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# TypeScript 타입 체크
npm run check

# 데이터베이스 스키마 푸시
npm run db:push
```

---

## 🎯 경로 별칭 (Path Aliases)

```typescript
// tsconfig.json에 정의
"@/*"       → "./client/src/*"    // 클라이언트 소스
"@shared/*" → "./shared/*"        // 공유 코드
```

**사용 예시:**
```typescript
import { Button } from "@/components/ui/button"
import { User } from "@shared/schema"
```

---

## 🖼️ 에셋

### 이미지 (`attached_assets/generated_images/`)
- `ai_robotic_welding_automation.png` - AI 로봇 용접 자동화
- `automated_steel_production_pipeline.png` - 자동화 철강 생산 파이프라인
- `industrial_robotics_steel_cutting.png` - 산업용 로봇 철강 절단
- `rugged_amr_industrial_transport.png` - 러기드 AMR 산업 운송
- `shipyard_industrial_facility_exterior.png` - 조선소 외관

---

## 📐 디자인 시스템

자세한 디자인 가이드라인은 `design_guidelines.md` 파일을 참조하세요.

### 주요 특징:
- **타이포그래피:** Inter (헤딩), System-ui (본문), JetBrains Mono (코드)
- **레이아웃:** 최대 너비 `max-w-7xl`, 반응형 그리드 시스템
- **색상:** 산업용 B2B에 적합한 전문적인 색상 팔레트
- **애니메이션:** 최소화된 마이크로 인터랙션

---

## 🔧 개발 환경

- **Node.js 환경:** ESM 모듈 시스템 (`"type": "module"`)
- **TypeScript:** Strict 모드 활성화
- **번들러:** Vite (개발/빌드)
- **포트:** 기본 5000번 포트

---

## 📝 참고사항

1. 이 프로젝트는 **Replit** 환경에서 생성된 것으로 보임 (`.replit` 파일 존재)
2. **shadcn/ui** 컴포넌트 시스템 사용
3. **풀스택 모노레포** 구조 (클라이언트/서버/공유 분리)
4. **SSR 없음** - SPA (Single Page Application) 방식
