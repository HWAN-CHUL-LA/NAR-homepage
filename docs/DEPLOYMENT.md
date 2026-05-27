# 빌드 및 배포 가이드

## 개요

이 프로젝트는 두 개의 GitHub 저장소를 사용합니다.

- **origin**: `https://github.com/HWAN-CHUL-LA/NAR-homepage.git` (개발 저장소)
- **vercel**: `https://github.com/HWAN-CHUL-LA/NAR_homepage_vercel.git` (배포 저장소)

Vercel 배포는 `vercel` 저장소의 `main` 브랜치와 `Robot-Solutions/vercel-deploy/` 폴더를 기준으로 자동 트리거됩니다.

**GitHub 한 곳 + Vercel만 쓰는 단일 저장소로 바꾸는 절차**는 `[VERCEL_SINGLE_REPO_GUIDE.md](./VERCEL_SINGLE_REPO_GUIDE.md)`에만 정리돼 있으며, **이 문서는 `origin`과 `vercel` 두 원격을 유지하는 운영**만 다룹니다.

## 전체 흐름 한눈에 보기

1. 로컬에서 코드 수정
2. 일반 소스를 `origin`에 커밋/푸시(1단계, 개발 이력)
3. 빌드 후 `Robot-Solutions/vercel-deploy/`로 동기화(2~3단계)
4. 배포 반영: 로컬에서 `vercel-deploy` 커밋 → (선택) `git push origin` → (**필수**) `git push vercel <현재_브랜치>:main`으로 Vercel 재배포 트리거(4단계)
5. Vercel 대시보드에서 배포 확인(5단계)

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

- `dist/`는 `.gitignore` 대상이므로 이 단계에서 커밋되지 않습니다. (dist/ 는 **배포용으로 만들어진 결과물**이 모이는 폴더입니다.)
- 팀 협업/이력 관리를 위해 배포 전에 이 단계를 먼저 수행하는 것을 권장합니다.
- git status 에서 자세하나 변경 내용을 보려면  `git diff --cached` 로 보면 됩니다. (이 명령에서 Enter 치면 아래로 내용 보이고, 나가고 싶으면 q 를 눌러야 됨.)

## 2단계: 빌드 실행

```bash
npm run build
```

빌드 결과물은 `dist/public/` 폴더에 생성됩니다.

## 3단계: 빌드 결과물을 vercel-deploy 폴더로 동기화

아래 **PowerShell** 절과 **Bash** 절은 **동일한 작업**을 서로 다른 셸에서 수행한 것이므로, **둘 다 실행할 필요는 없습니다.** (PowerShell/Windows 터미널 → PowerShell 절만, Git Bash·WSL·macOS·Linux → Bash 절만.)

주의:

- **작업 디렉터리**는 `package.json`이 있는 저장소 **루트**여야 합니다. (경로 `Robot-Solutions/vercel-deploy/…`, `dist/public/…`이 그 기준입니다.)
- 반드시 **2단계 `npm run build`가 끝난 뒤** 실행하세요. `dist/public/`이 없거나 비어 있으면 복사할 내용이 없습니다.
- `Remove-Item`·`rm`은 **이전에 배포했던** `vercel-deploy/assets` 내용을 지웁니다. 잘못된 경로에서 실행하지 않도록 **명령에 적힌 경로**를 한 번 더 확인하세요.
- **Bash**에서 `cp …/assets/`*는 `dist/public/assets`에 **맞는 파일이 하나도 없을 때** 셸 설정에 따라 오류이거나 의도와 다른 동작(글자 그대로 `*` 복사 시도 등)이 날 수 있습니다. 빌드 직후 `dist/public/assets`에 파일이 있는지 확인하세요.
- **PowerShell**에서 소스 `dist/public/assets`가 비어 있으면 `Copy-Item`이 아무것도 복사하지 않거나(버전/설정에 따라) 경고·오류가 날 수 있어, 이때도 빌드 산출물 존재 여부를 먼저 확인하는 것이 안전합니다.

```powershell
# PowerShell
Remove-Item -Path "Robot-Solutions/vercel-deploy/assets/*" -Force
# vercel-deploy/assets 안의 기존 파일(이전 빌드 산출물)을 모두 삭제해, 오래된 해시·번들이 남지 않게 함
Copy-Item -Path "dist/public/assets/*" -Destination "Robot-Solutions/vercel-deploy/assets/" -Force
# 방금 npm run build로 생긴 dist/public/assets(번들·이미지 등)를 배포용 폴더로 복사함. -Force는 덮어쓰기
Copy-Item -Path "dist/public/index.html" -Destination "Robot-Solutions/vercel-deploy/index.html" -Force
# 엔트리 HTML을 vercel-deploy 루트 index.html로 복사해 Vercel이 그 파일을 엔트리로 서빙하도록 맞춤
```

또는 아래의 명령어를 실행.

```bash
# Bash/Git Bash
rm -rf Robot-Solutions/vercel-deploy/assets/*
# vercel-deploy/assets 안의 기존 파일(이전 빌드 산출물)을 모두 지움. -r은 하위·디렉터리 포함, -f는 확인 생략
cp -r dist/public/assets/* Robot-Solutions/vercel-deploy/assets/
# dist/public/assets(번들·이미지 등)를 배포용 폴더로 재귀 복사. -r은 디렉터리/중첩 구조를 유지할 때 유리
cp dist/public/index.html Robot-Solutions/vercel-deploy/index.html
# 엔트리 HTML을 vercel-deploy 루트 index.html로 복사
```

## 4단계: 배포용 변경 커밋 및 푸시(2개 저장소)

`git add` / `git commit`은 **GitHub에 바로 올리는 것이 아닙니다.**  
동작 순서는 항상 **(1) 로컬에 커밋** → **(2) `git push`로 원하는 원격에 전송**입니다.

- **커밋**이 만들어지는 곳: 지금 `git switch` / `git checkout` 해 둔 **로컬 브랜치**(`<현재_브랜치>`)만 갱신됩니다. `origin` 전용·`vercel` 전용으로 나뉘지 않고, **한 번의 커밋**에 `vercel-deploy` 아래 변경이 같이 묶입니다.
- `**git push origin …`**: 개발용 저장소 `origin`의 해당 브랜치를 갱신합니다. (배포 트리거로는 쓰지 않습니다. 팀/백업용으로 “소스 + 배포용 폴더” 이력을 맞춰 두고 싶을 때 실행.)
- `**git push vercel <현재_브랜치>:main**`: 배포용 GitHub `vercel`의 `**main`만** 갱신합니다. Vercel이 연결한 저장소가 이쪽이면 **이 푸시가 실제 프로덕션 재배포를 띄웁니다.**

즉, **Vercel에 반영하려면** 3단계로 `Robot-Solutions/vercel-deploy/`를 맞춘 뒤, 아래에서 **로컬 커밋**을 한 번 만든 다음 `**git push vercel <현재_브랜치>:main`은 생략하지 마세요.** `origin` 푸시는 선택 사항입니다.

```bash
git add Robot-Solutions/vercel-deploy/
git commit -m "build: update vercel-deploy with latest build"

# 선택: 개발 저장소(origin)에도 같은 커밋을 올려 이력을 맞춤
git push origin <현재_브랜치>

# 필수(재배포): 배포 GitHub(vercel 원격)의 main 갱신 → Vercel 빌드 트리거
git push vercel <현재_브랜치>:main
```

주의:

- `git push vercel <현재_브랜치>:main`은 **일반 푸시** 기준이며, force push가 아닙니다.
- 푸시하기 전에 3단계로 `**Robot-Solutions/vercel-deploy/`에 빌드 산출물이 복사돼 있어야** 합니다.
- `vercel` 원격 푸시 권한·SSH/HTTPS 인증이 되어 있어야 하며, Vercel 프로젝트는 `**vercel` 쪽 저장소·브랜치**를 바라보도록 설정돼 있어야 합니다.

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

