# 빌드 및 배포 가이드

## 개요

이 프로젝트는 두 개의 GitHub 저장소를 사용합니다.

- **origin**: `https://github.com/HWAN-CHUL-LA/NAR-homepage.git` (개발 저장소)
- **vercel**: `https://github.com/HWAN-CHUL-LA/NAR_homepage_vercel.git` (배포 저장소)

Vercel 배포는 `vercel` 저장소의 `main` 브랜치와 `Robot-Solutions/vercel-deploy/` 폴더를 기준으로 자동 트리거됩니다.

## 전체 흐름 한눈에 보기

1. 로컬에서 코드 수정
2. 수정 내용을 `origin`에 커밋/푸시 (개발 이력 반영)
3. 빌드 후 산출물을 `Robot-Solutions/vercel-deploy/`로 동기화
4. 배포용 변경을 커밋
5. `vercel` 원격의 `main`으로 푸시해 배포 트리거
6. Vercel 대시보드에서 배포 상태 확인

## 사전 준비 체크리스트

- 현재 작업 디렉터리가 `package.json`이 있는 루트인지 확인
- 원격 저장소가 둘 다 등록되어 있는지 확인

```bash
git remote -v
git branch --show-current
```

- 출력에 `origin`과 `vercel`이 모두 보여야 합니다.
- 현재 브랜치 이름은 아래 예시의 `<현재_브랜치>` 자리에 넣어 사용합니다.

## 1단계: 개발 저장소(origin)에 소스 반영

먼저 일반 소스 변경사항을 개발 저장소에 기록합니다.

```bash
git status
git add .
git commit -m "feat: 변경 내용 요약"
git push origin <현재_브랜치>
```

참고:
- `dist/`는 `.gitignore` 대상이므로 이 단계에서 커밋되지 않습니다.
- 팀 협업/이력 관리를 위해 배포 전에 이 단계를 먼저 수행하는 것을 권장합니다.

## 2단계: 빌드 실행

```bash
npm run build
```

빌드 결과물은 `dist/public/` 폴더에 생성됩니다.

## 3단계: 빌드 결과물을 vercel-deploy 폴더로 동기화

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

## 4단계: 배포용 변경 커밋 및 푸시

```bash
git add Robot-Solutions/vercel-deploy/
git commit -m "build: update vercel-deploy with latest build"

# 개발 저장소에도 배포 반영 커밋을 남기고 싶다면
git push origin <현재_브랜치>

# Vercel 배포 트리거
git push vercel <현재_브랜치>:main
```

주의:
- `git push vercel <현재_브랜치>:main`은 일반 푸시 기준입니다. force push가 아닙니다.
- 배포용 파일은 반드시 `Robot-Solutions/vercel-deploy/`에 복사된 상태여야 합니다.

## 5단계: Vercel에서 재배포 확인

1. Vercel 대시보드에서 해당 프로젝트를 엽니다.
2. **Deployments** 탭에서 최신 배포가 `Building` -> `Ready`로 전환되는지 확인합니다.
3. 프로덕션 URL을 새로고침해 변경사항이 반영됐는지 확인합니다.
4. 실패 시 해당 배포 항목의 **Build Logs**를 열어 오류를 확인합니다.

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

Vite가 대문자 확장자를 인식하지 못하면 `vite.config.ts`에 다음 설정을 추가합니다.

```typescript
export default defineConfig({
  assetsInclude: ["**/*.JPG", "**/*.JPEG", "**/*.PNG", "**/*.GIF"],
  // ...
})
```
