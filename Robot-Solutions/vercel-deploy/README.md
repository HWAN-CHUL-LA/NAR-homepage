# Vercel 배포 가이드

이 폴더는 네오아크로보틱스 웹사이트를 Vercel에 배포하기 위한 가이드입니다.

## 1. 배포 전 준비

### 필요한 파일 복사

`dist/public` 폴더의 모든 파일을 이 폴더로 복사하세요:

```
Robot-Solutions/dist/public/
├── index.html        → vercel-deploy/index.html
├── favicon.png       → vercel-deploy/favicon.png
└── assets/           → vercel-deploy/assets/
    ├── index-*.js
    ├── index-*.css
    └── *.png (이미지 파일들)
```

## 2. Vercel 배포 방법

### 방법 A: Vercel CLI 사용 (권장)

1. **Vercel CLI 설치**
   ```bash
   npm install -g vercel
   ```

2. **로그인**
   ```bash
   vercel login
   ```

3. **배포**
   ```bash
   cd vercel-deploy
   vercel
   ```

4. **프로덕션 배포**
   ```bash
   vercel --prod
   ```

### 방법 B: GitHub 연동 (자동 배포)

1. **GitHub에 코드 업로드**
   - 이 폴더를 GitHub 저장소에 업로드

2. **Vercel 웹사이트 접속**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

3. **새 프로젝트 생성**
   - "Add New Project" 클릭
   - GitHub 저장소 선택
   - 배포 설정:
     - Framework Preset: `Other`
     - Root Directory: `vercel-deploy` (또는 해당 폴더 경로)
     - Build Command: (비워두기)
     - Output Directory: `.`

4. **Deploy 클릭**

### 방법 C: 드래그 앤 드롭

1. https://vercel.com/new 접속
2. 이 폴더를 브라우저에 드래그 앤 드롭
3. 자동 배포 완료

## 3. 커스텀 도메인 연결

### Vercel 설정

1. Vercel 프로젝트 대시보드 접속
2. "Settings" → "Domains" 메뉴
3. 도메인 입력: `neoarcrobotics.com` 또는 `www.neoarcrobotics.com`
4. "Add" 클릭

### 카페24 DNS 설정

1. 카페24 관리자 페이지 접속
2. "도메인 관리" → "DNS 설정"
3. 다음 레코드 추가:

| 타입 | 호스트 | 값 |
|------|--------|-----|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

또는 CNAME만 사용:

| 타입 | 호스트 | 값 |
|------|--------|-----|
| CNAME | @ | cname.vercel-dns.com |
| CNAME | www | cname.vercel-dns.com |

4. DNS 전파 대기 (최대 48시간, 보통 10분~2시간)

## 4. 배포 확인

배포 완료 후 다음 URL에서 확인:

- Vercel 기본 도메인: `https://프로젝트명.vercel.app`
- 커스텀 도메인: `https://neoarcrobotics.com` (DNS 설정 후)

## 5. 업데이트 방법

### CLI 방식
```bash
cd vercel-deploy
vercel --prod
```

### GitHub 연동 방식
- GitHub에 push하면 자동 배포

## 6. 문제 해결

### 페이지가 404로 표시될 때
- `vercel.json`의 rewrites 설정 확인
- SPA 라우팅이 제대로 설정되어 있는지 확인

### 이미지가 표시되지 않을 때
- `assets` 폴더가 제대로 업로드되었는지 확인
- Cloudinary 이미지는 외부 URL이므로 별도 업로드 불필요

### DNS 설정 후에도 접속 안 될 때
- DNS 전파에 시간이 걸릴 수 있음 (최대 48시간)
- https://dnschecker.org 에서 DNS 전파 상태 확인

## 7. 비용

| 항목 | Hobby (무료) | Pro ($20/월) |
|------|-------------|--------------|
| 대역폭 | 100GB/월 | 1TB/월 |
| 빌드 시간 | 100시간/월 | 1,000시간/월 |
| 팀원 | 1명 | 무제한 |
| 커스텀 도메인 | ✅ | ✅ |
| HTTPS | ✅ | ✅ |

일반 회사 소개 사이트는 **무료 플랜으로 충분**합니다.


