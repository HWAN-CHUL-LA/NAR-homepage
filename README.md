# NeoArcRobotics Homepage

조선·철강 제조 혁신을 위한 토탈 자동화 솔루션 웹사이트

## 기술 스택

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Build Tool**: Vite
- **UI Components**: shadcn/ui (Radix UI 기반)

## 시작하기

### 1. 패키지 설치

```bash
npm install
```

### 2. 개발 서버 실행

**Windows PowerShell:**
```powershell
$env:NODE_ENV="development"; npx tsx server/index.ts
```

**Mac/Linux:**
```bash
NODE_ENV=development npx tsx server/index.ts
```

서버가 실행되면 `http://localhost:5000`에서 확인할 수 있습니다.

---

## Cursor GUI 편집 툴 사용법

Cursor IDE에서 실시간으로 UI를 보면서 편집할 수 있습니다.

### 방법 1: AI에게 요청하기

Cursor 채팅에서 다음과 같이 요청하면 됩니다:
- "localhost:5000 열어줘"
- "브라우저 화면 보여줘"
- "UI 확인해줘"

### 방법 2: Simple Browser 직접 열기

1. **개발 서버 실행** (터미널에서):
   ```powershell
   cd "프로젝트 경로" 
   '''

   지금은 아래 명령어로
   
   '''
   cd "C:\Users\fkghk\Downloads\Robot-Solutions\Robot-Solutions"
   $env:NODE_ENV="development"; npx tsx server/index.ts
   ```

2. **Simple Browser 열기**:
   - `Ctrl+Shift+P` (Mac: `Cmd+Shift+P`) 누르기
   - "Simple Browser: Show" 검색 후 실행
   - URL에 `http://localhost:5000` 입력

3. **또는 외부 브라우저에서**:
   - Chrome/Edge에서 `http://localhost:5000` 접속

### GUI 편집 시 유용한 기능

| 기능 | 설명 |
|------|------|
| `browser_navigate` | URL로 이동 |
| `browser_snapshot` | 현재 화면 스크린샷 |
| `browser_click` | 요소 클릭 |
| `browser_type` | 텍스트 입력 |
| `browser_hover` | 마우스 호버 |
| `browser_resize` | 화면 크기 조정 |

---

## 프로젝트 구조

```
├── client/                 # 프론트엔드
│   ├── src/
│   │   ├── components/     # React 컴포넌트
│   │   ├── pages/          # 페이지 컴포넌트
│   │   ├── hooks/          # 커스텀 훅
│   │   └── lib/            # 유틸리티
│   └── public/             # 정적 파일
├── server/                 # 백엔드
│   ├── index.ts            # 서버 진입점
│   ├── routes.ts           # API 라우트
│   └── vite.ts             # Vite 개발 서버 설정
├── shared/                 # 공유 코드
│   └── schema.ts           # 데이터 스키마
└── attached_assets/        # 이미지 등 에셋
```

## 주요 페이지

| 경로 | 설명 |
|------|------|
| `/` | 홈페이지 |
| `/solutions` | 솔루션 목록 |
| `/solutions/cutting` | Smart Cutting System |
| `/solutions/amr` | Rugged Omni AMR |
| `/solutions/ai-brain` | AI Brain Robot |
| `/solutions/pipeline` | Unmanned Pipeline |
| `/products` | 제품 |
| `/cases` | 적용 사례 |
| `/resources` | 리소스 |
| `/about` | 회사 소개 |
| `/contact` | 문의하기 |

---

## 빌드

```bash
npm run build
```

## 프로덕션 실행

```bash
npm run start
```

---

## 라이선스

MIT License

