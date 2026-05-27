# 유튜브 영상 임베드 가이드

## 문서 목적

이 문서는 **NeoArcRobotics 홈페이지**(React SPA) 안에 유튜브 영상을 넣을 때 필요한 규칙과 수정 위치를 한곳에 정리합니다.

**관련 문서**: 일반 빌드·배포는 [`DEPLOYMENT.md`](./DEPLOYMENT.md), 문서 목록은 [`README.md`](./README.md).

---

## 목차

1. [한눈에 보기: 어디를 고치나](#1-한눈에-보기-어디를-고치나)
2. [동작 원리](#2-동작-원리)
3. [사전 조건(YouTube 쪽)](#3-사전-조건youtube-쪽)
4. [영상 ID와 임베드 URL](#4-영상-id와-임베드-url)
5. [저장소별 반영 방법](#5-저장소별-반영-방법)
6. [새 페이지·섹션에 iframe 추가](#6-새-페이지섹션에-iframe-추가-react--tailwind)
7. [로컬 확인](#7-로컬-확인)
8. [Cafe24 정적 HTML](#8-cafe24-정적-html)
9. [문제 해결](#9-문제-해결)
10. [참고: 소스 파일 위치](#10-참고-소스-파일-위치)

---

## 1. 한눈에 보기: 어디를 고치나

| 넣고 싶은 위치 | 할 일 |
|----------------|------|
| **제품 상세** 화면(미디어 영역이 유튜브) | `client/src/lib/productData.ts`에서 해당 `id`에 `youtubeVideoId: "영상ID"` 추가·수정 |
| **카드**처럼 `ProductCard` + `videoUrl`을 쓰는 곳 | `videoUrl`에 **`https://www.youtube.com/embed/영상ID`** 전체 문자열 넣기 (`watch?v=` 금지) |
| 홈 등 **임의 페이지** | 해당 `.tsx`에 [§6](#6-새-페이지섹션에-iframe-추가-react--tailwind) 패턴으로 `<iframe>` 추가 |
| **Cafe24 스킨**만 | HTML에 유튜브 **퍼가기 iframe** 또는 embed URL 블록 붙이기 |

**주의**: `ProductCard`는 URL에 문자열 **`youtube.com`** 이 포함될 때만 iframe으로 처리합니다. `youtube-nocookie.com`만 넘기면 유튜브 분기로 가지 않습니다. 제품 상세는 `youtubeVideoId`만으로 `youtube-nocookie`를 씁니다.

---

## 2. 동작 원리

유튜브는 동영상을 **다른 사이트에 넣어도 되는 형태**(퍼가기)로 제공하며, 그 주소가 보통 다음과 같습니다.

```text
https://www.youtube.com/embed/VIDEO_ID
```

브라우저에서는 이 주소를 **`<iframe src="…">`**에 넣어 재생합니다. 이 저장소의 제품 상세는 같은 방식으로, 다만 호스트를 **`www.youtube-nocookie.com`**로 두어 타사 쿠키 노출을 줄이는 패턴을 씁니다.

---

## 3. 사전 조건(YouTube 쪽)

- 영상이 **공개** 또는 **일부 공개**여야 합니다. **비공개**는 웹사이트 임베드가 되지 않습니다.
- 해당 영상(또는 채널 정책)에서 **다른 웹사이트에 퍼가기**가 허용돼야 합니다. 막혀 있으면 iframe이 회색 오류처럼 보이거나 재생되지 않습니다. (YouTube Studio → 영상 선택 → 세부정보 등에서 확인)

---

## 4. 영상 ID와 임베드 URL

### 4.1 ID 분리하기

| 링크 형태 예시 | 추출할 `VIDEO_ID` |
|----------------|-------------------|
| `https://www.youtube.com/watch?v=98eiIfM_3D0` | `98eiIfM_3D0` |
| `https://youtu.be/98eiIfM_3D0` | `98eiIfM_3D0` |
| `https://www.youtube.com/embed/98eiIfM_3D0` | `98eiIfM_3D0` |

### 4.2 이 프로젝트에서 자주 쓰는 두 가지 호스트

| 용도 | 임베드 URL 패턴 |
|------|----------------|
| 카드 등 `iframe src` 문자열 통째로 | `https://www.youtube.com/embed/VIDEO_ID` |
| 제품 상세(코드가 자동 조합) | 데이터에는 **ID만** — 실제 재생은 `https://www.youtube-nocookie.com/embed/VIDEO_ID` |

### 4.3 시작 시간·옵션

- 특정 시점부터: `src`에 `?start=초` (예: 30초부터 → `…/embed/VIDEO_ID?start=30`)
- 자동재생(대개 음소거 필요): 끝에 `?autoplay=1&mute=1` (이미 쿼리가 있으면 `&`)

YouTube Studio **공유 → 퍼가기**에서 제공하는 코드에도 같은 `embed/VIDEO_ID`가 들어 있으므로, HTML 전체 대신 **`src="…"`의 URL만** 복사해도 됩니다.

---

## 5. 저장소별 반영 방법

### 5.1 제품 상세 (`youtubeVideoId`)

**파일**: `client/src/lib/productData.ts`

해당 제품 객체에 다음 필드를 추가합니다.

```ts
youtubeVideoId: "VIDEO_ID",
```

`ProductDetail` 타입 주석처럼 **값은 ID 문자열만** 넣습니다. 화면 쪽에서는 `client/src/pages/products/[id].tsx`가 이 값으로 iframe `src`를 만듭니다.

**예시 패턴**: `field-amr` 제품의 `youtubeVideoId: "98eiIfM_3D0"` 와 동일합니다.

### 5.2 카드·목록 (`ProductCard`)

**파일**: `client/src/components/ProductCard.tsx`

`videoUrl` prop에 **`/embed/`가 들어 있는 전체 HTTPS URL**을 넘깁니다.

```text
https://www.youtube.com/embed/98eiIfM_3D0
```

`https://www.youtube.com/watch?v=…` 형태만 넘기면 iframe에 부적합할 수 있으므로 **embed URL 고정**을 권장합니다.

---

## 6. 새 페이지·섹션에 iframe 추가 (React + Tailwind)

16:9 비율을 유지하는 래퍼를 두면 레이아웃이 깨지기 어렵습니다. 제품 상세 미디어 영역과 같은 패턴입니다.

```tsx
<div className="aspect-video max-w-4xl overflow-hidden rounded-xl bg-muted">
  <iframe
    className="h-full w-full border-0"
    src="https://www.youtube-nocookie.com/embed/VIDEO_ID"
    title="영상을 설명하는 짧은 문구(스크린 리더용)"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    referrerPolicy="strict-origin-when-cross-origin"
  />
</div>
```

- **`title`**: 접근성 필수입니다. 표시 라벨이 아니라 스크린 리더용입니다.
- 상세 페이지와 동일한 권한·정책을 맞추려면 위 `allow`, `referrerPolicy`를 그대로 두는 편이 안전합니다.

---

## 7. 로컬 확인

프로젝트 **루트**(`package.json`이 있는 디렉터리)에서:

```bash
npm run dev:win
```

브라우저에서 `http://localhost:5000` — 제품 상세는 **`/products/제품id`** (예: `field-amr`이면 `/products/field-amr`). 전체 라우트 표는 [`README.md`](./README.md) 하단 「주요 경로(라우트)」를 보세요.

**적용 후 체크리스트**

- [ ] 해당 페이지에서 재생·전체 화면이 되는지
- [ ] 모바일 너비에서 잘리지 않는지 (`aspect-video` 래퍼 유지 확인)
- [ ] 새로 넣은 iframe에 의미 있는 `title`이 있는지

---

## 8. Cafe24 정적 HTML

`cafe24-html/` 쪽 스킨은 React가 없으므로 **HTML에 iframe 블록**을 직접 넣습니다. 유튜브 퍼가기 코드를 그대로 쓰거나, §4의 embed URL을 `iframe src`로 지정하면 됩니다. 폭·높이는 해당 스킨 CSS에 맞게 조정합니다.

배포·동기화 절차는 [`DEPLOYMENT.md`](./DEPLOYMENT.md)를 따릅니다.

---

## 9. 문제 해결

| 증상 | 점검 |
|------|------|
| 회색 플레이어 또는 “영상을 재생할 수 없음” | 영상 공개 범위, 퍼가기 허용, 실제 업로드 완료 여부 |
| 카드에서는 안 나오는데 상세는 됨 | `videoUrl`이 `youtube.com/embed/…`인지, 또는 `youtube.com` 문자열이 빠졌는지 (`nocookie`만 있으면 카드 분기 실패) |
| 상세에 안 나옴 | `productData.ts`에 `youtubeVideoId`가 해당 `id`에 있는지, 오타 없이 ID만 들어갔는지 |
| `watch` URL 넣었을 때 깨짐 | **embed 전용 URL**로 바꿀 것 |
| 시작 시간이 안 맞음 | `?start=` 가 초 단위인지 확인 (`t=30s` 형태 그대로 embed에 넣지 말고 변환) |

---

## 10. 참고: 소스 파일 위치

| 역할 | 경로 |
|------|------|
| 제품 상세 데이터·`youtubeVideoId` 타입·주석 | `client/src/lib/productData.ts` |
| 제품 상세 미디어(유튜브·비디오·이미지) | `client/src/pages/products/[id].tsx` |
| 카드의 `youtube.com` 분기 iframe | `client/src/components/ProductCard.tsx` |

이 문서는 유튜브 **삽입**에만 초점을 맞춥니다. Cloudinary 영상 등 다른 미디어는 제품 타입의 `videoUrl`, `imageUrl` 필드와 동일 페이지 로직을 참고하면 됩니다.
