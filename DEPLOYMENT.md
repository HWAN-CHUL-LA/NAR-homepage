# 빌드 및 배포 가이드

## 개요

이 프로젝트는 두 개의 GitHub 저장소를 사용합니다:
- **origin**: `https://github.com/HWAN-CHUL-LA/NAR-homepage.git` (개발 저장소)
- **vercel**: `https://github.com/HWAN-CHUL-LA/NAR_homepage_vercel.git` (배포 저장소)

Vercel 배포는 `vercel` 저장소의 `main` 브랜치에서 `Robot-Solutions/vercel-deploy/` 폴더를 기준으로 이루어집니다.

## 빌드 및 배포 절차

### 1. 빌드 실행

```bash
npm run build
```

빌드 결과물은 `dist/public/` 폴더에 생성됩니다.

### 2. 빌드 결과물을 vercel-deploy 폴더로 복사

```powershell
# PowerShell
Remove-Item -Path "Robot-Solutions/vercel-deploy/assets/*" -Force
Copy-Item -Path "dist/public/assets/*" -Destination "Robot-Solutions/vercel-deploy/assets/" -Force
Copy-Item -Path "dist/public/index.html" -Destination "Robot-Solutions/vercel-deploy/index.html" -Force
```

```bash
# Bash/Git Bash
rm -rf Robot-Solutions/vercel-deploy/assets/*
cp -r dist/public/assets/* Robot-Solutions/vercel-deploy/assets/
cp dist/public/index.html Robot-Solutions/vercel-deploy/index.html
```

### 3. 변경사항 커밋

```bash
git add Robot-Solutions/vercel-deploy/
git commit -m "build: update vercel-deploy with latest build"
```

### 4. 저장소에 푸시

```bash
# origin 저장소에 푸시 (현재 브랜치)
git push origin <현재_브랜치>

# vercel 저장소의 main 브랜치에 푸시 (배포 트리거)
git push vercel <현재_브랜치>:main
```

## 주의사항

- `dist/` 폴더는 `.gitignore`에 포함되어 있어 직접 커밋되지 않습니다.
- 배포용 파일은 반드시 `Robot-Solutions/vercel-deploy/` 폴더에 복사해야 합니다.
- Vercel 배포는 `vercel` 저장소의 `main` 브랜치 푸시 시 자동으로 트리거됩니다.

## 폴더 구조

```
dist/
├── index.cjs          # 서버 빌드
└── public/
    ├── assets/        # JS, CSS, 이미지 번들
    └── index.html     # 클라이언트 엔트리

Robot-Solutions/vercel-deploy/
├── assets/            # 빌드된 에셋 (여기로 복사)
├── index.html         # 빌드된 HTML (여기로 복사)
├── vercel.json        # Vercel 설정
└── README.md          # 배포 문서
```

## 트러블슈팅

### 대문자 확장자 이미지 (.JPG, .PNG 등)

Vite가 대문자 확장자를 인식하지 못하면 `vite.config.ts`에 다음 설정을 추가:

```typescript
export default defineConfig({
  assetsInclude: ["**/*.JPG", "**/*.JPEG", "**/*.PNG", "**/*.GIF"],
  // ...
})
```
