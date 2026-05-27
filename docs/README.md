# NeoArcRobotics Homepage

조선·건설 제조 혁신을 위한 토탈 자동화 솔루션 웹사이트

`package.json`이 있는 프로젝트 **루트**에서 `npm` 명령을 실행하세요. (이 `docs` 폴더가 아닙니다.)

---

## 기술 스택

- **프론트엔드**: React, TypeScript, Tailwind CSS, [Wouter](https://github.com/molefrog/wouter) (클라이언트 라우팅, SPA)
- **백엔드**: Express.js, Node.js
- **빌드**: Vite
- **UI**: shadcn/ui (Radix UI 기반)

---

## 이 저장소의 문서를 어떻게 나눠 볼까

같이 두면 흔히 섞이는 문서가 있습니다. **용도**로 구분해 보세요.

| 문서 | 맞는 질문 | 맞지 않는 질문 |
|------|-----------|----------------|
| [`website-boot-flow.md`](./website-boot-flow.md) | “브라우저에 들어온 **다음**에 무엇이 **몇 번째로** 돌지?” “`main.tsx`·`App.tsx`는 **언제** 쓰나?” “HTML·Vite·React가 **어떻게 이어**지지?” | “`Header.tsx` 파일이 **어느 폴더**에 있지?” (폴더 **목록**이 필요할 때) |
| [`WORKSPACE_STRUCTURE.md`](./WORKSPACE_STRUCTURE.md) | “**어느 경로**에 페이지·컴포넌트가 있지?” “`@/`·`@shared` 별칭은?” “`server/`엔 **어떤 파일**이 있지?” | “요청이 들어온 **순서**로 무엇이 먼저 실행되지?” (실행 **순서**가 필요할 때) |
| [`YOUTUBE_EMBED.md`](./YOUTUBE_EMBED.md) | “제품·카드·페이지에 **유튜브**를 넣으려면 **어느 파일**을 어떻게 고치나?” “embed URL과 `youtubeVideoId` 차이?” | Express 부팅 순서·전체 디렉터리 지도만 필요할 때(각각 위 두 문서) |

- **`website-boot-flow`**: **실행·부팅 흐름**(요청 → Express →(개발 시) Vite → React 진입)과 기술 스택 **원론**을 **시간 순서**로 설명합니다.
- **`WORKSPACE_STRUCTURE`**: **디렉터리·파일 맵**, 페이지/컴포넌트 **목록**, 의존성, 스크립트를 **지도**처럼 짚습니다. 두 문서는 서로 **보완** 관계이고, **대체** 관계는 아닙니다.

다른 가이드:

- UI·톤: [`design_guidelines.md`](./design_guidelines.md)
- 유튜브 임베드(제품 상세·카드·임의 페이지): [`YOUTUBE_EMBED.md`](./YOUTUBE_EMBED.md)
- 배포( `origin` + `vercel` 원격, `vercel-deploy` 동기화): [`DEPLOYMENT.md`](./DEPLOYMENT.md)
- GitHub **한** 저장소로만 운영하려는 전환 절차: [`VERCEL_SINGLE_REPO_GUIDE.md`](./VERCEL_SINGLE_REPO_GUIDE.md) (기본 이중 원격 흐름은 `DEPLOYMENT.md`만)

---

## 시작하기

### 1. 패키지 설치

```bash
npm install
```

### 2. 개발 서버

**Windows (`package.json` 스크립트):**

```bash
npm run dev:win
```

**macOS / Linux:**

```bash
npm run dev
```

PowerShell에서 직접 환경 변수만 켜서 실행해도 됩니다.

```powershell
$env:NODE_ENV="development"; npx tsx server/index.ts
```

서버가 뜨면 `http://localhost:5000`에서 확인할 수 있습니다.

---

## Cursor에서 화면 보며 편집하기

### 방법 1: 채팅으로

- "localhost:5000 열어줘" / "브라우저 화면 보여줘" / "UI 확인해줘" 등

### 방법 2: Simple Browser

1. 위 **개발 서버**를 켜 둔 상태에서, 프로젝트 루트가 아니라 **터미널이 열린 폴더**만 맞는지 확인합니다.
2. `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) → "Simple Browser: Show" → URL `http://localhost:5000`
3. 또는 Chrome/Edge에서 같은 주소로 접속

### GUI 자동화 관련(에이전트/MCP)에서 자주 쓰는 뜻

| 느낌 | 설명 |
|------|------|
| 페이지로 이동 | URL로 이동 |
| snapshot | DOM/접근성 기준 스냅샷(요소 ref용) |
| click / type / hover | 클릭, 입력, 호버 |
| resize | 뷰포트 크기 |

(상세는 Cursor/브라우저 MCP 사용 설명을 따릅니다.)

---

## 프로젝트 구조(요약)

`client`·`server`·`shared` 중심입니다. **파일 단위·페이지 전체**는 `WORKSPACE_STRUCTURE.md`를 보세요.

```
├── client/                 # 프론트엔드
│   ├── src/
│   │   ├── components/     # React 컴포넌트
│   │   ├── pages/          # 페이지
│   │   ├── hooks/          # 커스텀 훅
│   │   └── lib/            # 유틸·데이터
│   └── public/             # 정적 파일
├── server/                 # Express
│   ├── index.ts
│   ├── routes.ts
│   └── vite.ts
├── shared/                 # 공유 (스키마 등)
│   └── schema.ts
├── script/                 # 빌드 스크립트
└── attached_assets/        # 로컬 이미지 등(별칭 `@assets/*`)
```

---

## 주요 경로(라우트)

`App.tsx`에 정의된 경로를 기준으로 했습니다.

| 경로 | 설명 |
|------|------|
| `/` | 홈 |
| `/solutions` | 솔루션 목록 |
| `/solutions/cutting` | 스마트 절단 |
| `/solutions/welding` | 용접 솔루션 |
| `/solutions/amr` | Rugged Omni AMR |
| `/solutions/ai-brain` | Physical AI (AI brain) |
| `/products` | 제품 (탭·상세) |
| `/cases` | 사례 |
| `/resources` | 리소스 |
| `/about` | 소개 |
| `/contact` | 문의 |

---

## 빌드

```bash
npm run build
```

산출물은 `dist/`(서버 `index.cjs` + `dist/public/` 정적 파일)입니다. Vercel용으로 `Robot-Solutions/vercel-deploy/`에 옮기는 절차는 `DEPLOYMENT.md`를 따릅니다.

## 배포 (Vercel)

- [빌드 및 배포 가이드 (`origin` + `vercel` 원격)](./DEPLOYMENT.md)
- [단일 GitHub만 쓰는 전환·연동 — 별도 시나리오](./VERCEL_SINGLE_REPO_GUIDE.md)

## 프로덕션 실행(로컬)

```bash
npm run start
```

---

## 라이선스

MIT License
