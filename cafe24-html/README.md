# 카페24 스마트디자인 적용 가이드

## 개요

이 폴더에는 React 컴포넌트를 카페24 스마트디자인 형식의 HTML/CSS로 변환한 파일이 있습니다.

## 파일 구조

```
cafe24-html/
├── main.html    ← 카페24에 적용할 메인 페이지 HTML
└── README.md    ← 이 파일
```

## 적용 방법

### Step 1: 카페24 스마트디자인 편집창 열기

1. 카페24 관리자 페이지 로그인
2. **디자인 > 디자인 보관함** 이동
3. 현재 사용 중인 스킨의 **'디자인 편집'** 버튼 클릭
4. 스마트디자인 편집창이 열림

### Step 2: main.html 파일 수정

1. 왼쪽 파일 목록에서 **main.html** 클릭
2. 상단의 **'HTML 보기'** 모드 선택
3. 기존 내용을 **모두 삭제**
4. 이 폴더의 `main.html` 내용을 **복사하여 붙여넣기**
5. **저장** 버튼 클릭

### Step 3: 미리보기 및 확인

1. **미리보기** 버튼으로 결과 확인
2. 문제가 없으면 실제 쇼핑몰에서 확인

---

## 이미지 경로

현재 사용 중인 이미지 경로:

| 이미지 | URL |
|--------|-----|
| 히어로 배경 | `https://ecimg.cafe24img.com/pg1727b95312806034/neoarcrobotics/web/assets/shipyard_industrial_facility_exterior-C6O3LYx2.png` |
| 절단 시스템 | `https://res.cloudinary.com/dzu2wygbi/image/upload/v1766044887/형강절단장비사진1_mvj532.jpg` |
| AMR | `https://res.cloudinary.com/dzu2wygbi/image/upload/v1766024118/mainAMR.jpg` |
| AI 용접 | `https://ecimg.cafe24img.com/pg1727b95312806034/neoarcrobotics/web/assets/ai_robotic_welding_automation-ChBlXxim.png` |
| 적용사례 | `https://ecimg.cafe24img.com/pg1727b95312806034/neoarcrobotics/web/assets/industrial_robotics_steel_cutting-C2m8OD2V.png` |

---

## 링크 수정 안내

현재 HTML의 링크들은 예시로 설정되어 있습니다.
실제 카페24 쇼핑몰의 카테고리/게시판 URL에 맞게 수정하세요:

| 섹션 | 현재 링크 | 수정 필요 |
|------|----------|----------|
| 데모 요청 | `/board/contact.html` | 실제 문의 게시판 URL |
| 솔루션 보기 | `/category/솔루션/25/` | 실제 솔루션 카테고리 URL |
| 전체 사례 보기 | `/category/적용사례/28/` | 실제 적용사례 카테고리 URL |
| 브로슈어 다운로드 | `/board/download.html` | 실제 다운로드 페이지 URL |

---

## 스타일 커스터마이징

### 색상 변경

main.html 상단의 CSS에서 색상 변수를 수정하세요:

```css
:root {
  --neo-primary: #2563eb;        /* 메인 색상 (파란색) */
  --neo-primary-dark: #1d4ed8;   /* 메인 색상 (진한) */
  --neo-primary-light: #3b82f6;  /* 메인 색상 (밝은) */
  --neo-text: #1f2937;           /* 본문 텍스트 */
  --neo-text-light: #6b7280;     /* 보조 텍스트 */
}
```

### 섹션 추가/제거

각 섹션은 `<section class="neo-xxx">` 형태로 구분되어 있습니다:

- `neo-hero`: 히어로 배너
- `neo-stats`: 통계/수치
- `neo-solutions`: 솔루션 소개
- `neo-cases`: 적용 사례
- `neo-whyus`: 왜 우리를 선택?
- `neo-cta`: 상담 유도

필요 없는 섹션은 해당 `<section>` 태그 전체를 삭제하면 됩니다.

---

## 주의사항

1. **레이아웃 태그 유지**: 첫 줄의 `<!--@layout(...)-->` 태그를 반드시 유지하세요. 이 태그가 카페24 기본 헤더/푸터를 불러옵니다.

2. **CSS는 `<style>` 태그 내에**: 모든 커스텀 CSS는 `<style>` 태그 안에 있습니다. 별도 파일로 분리하려면 카페24의 CSS 경로 규칙을 따라야 합니다.

3. **이미지 CORS**: 외부 이미지(Cloudinary 등)는 CORS 문제 없이 사용 가능합니다. 단, JavaScript 파일은 CORS 문제가 있어 React SPA 방식이 불가능했습니다.

4. **반응형**: 모든 섹션은 모바일/태블릿/데스크톱 반응형으로 제작되었습니다.

---

## 문제 해결

### 페이지가 안 보일 때

1. 브라우저 캐시 삭제 후 새로고침
2. 카페24 관리자에서 저장 여부 확인
3. `<!--@layout(...)-->` 태그가 첫 줄에 있는지 확인

### 이미지가 안 보일 때

1. 이미지 URL을 브라우저에서 직접 열어서 확인
2. FTP에 이미지가 제대로 업로드되었는지 확인
3. 이미지 경로의 오타 확인

### 스타일이 깨질 때

1. `<style>` 태그가 제대로 닫혔는지 확인
2. CSS 문법 오류 확인
3. 카페24 기본 CSS와 충돌 여부 확인

---

## 연락처

추가 문의사항은 개발팀에 연락해주세요.


