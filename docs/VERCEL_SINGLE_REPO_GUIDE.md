# 단일 GitHub 저장소 + Vercel 연동 가이드

이 문서는 **새 회사 GitHub 계정 + 새 회사 Vercel 계정** 기준으로, 이 프로젝트를 단일 저장소 방식으로 운영하는 절차를 설명합니다.

- 대상: 기존 2-remote(`origin` + `vercel`) 방식에서 벗어나 단일 저장소로 운영하려는 경우
- 목표: `git push origin main`(또는 PR 머지)만으로 Vercel 자동 배포

참고:
- 기존 2-remote 방식 가이드는 [`DEPLOYMENT.md`](./DEPLOYMENT.md)에서 확인할 수 있습니다.

---

## 1) 전체 흐름 요약

1. 새 회사 GitHub 저장소 생성
2. 로컬 저장소의 원격을 새 회사 저장소 중심으로 정리
3. 코드 푸시
4. 회사 Vercel 계정에서 프로젝트를 새 저장소로 연결(또는 신규 생성)
5. 배포 상태 확인 및 운영 표준 확정

---

## 2) 사전 준비

- 로컬에서 현재 저장소 상태 확인
- GitHub(회사 계정) 권한 확인
- Vercel(회사 계정) 접근 권한 확인

```bash
git remote -v
git branch --show-current
```

권장:
- 작업은 `package.json`이 있는 루트 디렉터리(`Robot-Solutions`)에서 진행
- 기본 브랜치는 `main` 기준으로 운영

---

## 3) 1단계: 새 회사 GitHub 저장소 준비

회사 GitHub 계정에서 새 저장소를 만듭니다.

권장 설정:
- 저장소 이름: 팀 규칙에 맞는 이름 사용
- 기본 브랜치: `main`
- `README`, `.gitignore`, `LICENSE` 자동 생성은 가능하면 끔  
  (이미 로컬 저장소에 파일이 있으므로 최초 push 충돌을 줄이기 위함)

---

## 4) 2단계: 로컬 원격 정리 (단일 원격화)

아래 중 한 가지 시나리오를 선택합니다.

### 시나리오 A: 현재 `origin`을 새 회사 저장소로 교체

```bash
git remote set-url origin <새_회사_저장소_URL>
git remote remove vercel
git remote -v
```

### 시나리오 B: 원격을 깔끔하게 다시 구성

```bash
git remote remove origin
git remote remove vercel
git remote add origin <새_회사_저장소_URL>
git remote -v
```

완료 기준:
- `git remote -v` 출력에 `origin`만 남거나, 최소한 배포에 쓰는 기본 원격이 `origin`으로 명확해야 함

---

## 5) 3단계: 소스 코드 최초 푸시

```bash
git status
git add .
git commit -m "chore: migrate repo ownership to company account"
git push -u origin <현재_브랜치>
```

`main` 브랜치 운영 시:

```bash
git checkout main
git push -u origin main
```

운영 권장:
- 팀이 PR 기반이면 `feature/*` 브랜치 -> PR -> `main` 머지 후 자동 배포로 운영

---

## 6) 4단계: 회사 Vercel 계정에서 저장소 재연결

Vercel 연결은 두 가지 경로가 있습니다.

### A. 기존 프로젝트를 유지하고 저장소만 바꾸는 경우

1. 회사 Vercel 계정 로그인
2. 기존 프로젝트 열기
3. Git 연동 설정에서 새 회사 GitHub 저장소로 연결 변경 시도
4. 연결 후 Deployments에서 최신 커밋 기준으로 배포

주의:
- Vercel UI/권한 정책에 따라 기존 프로젝트의 Git 저장소를 직접 바꾸기 어려운 경우가 있습니다.

### B. 새 프로젝트를 만드는 경우 (실무에서 가장 안정적)

1. Vercel Dashboard -> **Add New...** -> **Project**
2. 새 회사 GitHub 저장소 선택 후 Import
3. 빌드 설정 입력
4. 환경변수 설정 후 Deploy

현재 저장소 기준 권장 확인값:
- Root Directory: 저장소 루트(`Robot-Solutions`)
- Build Command: `npm run build`
- Output:
  - 일반 Node/Express+Vite SSR 배포면 프레임워크 감지에 맞게 설정
  - 정적 배포만 쓸 경우 프로젝트 정책에 맞는 output 디렉터리 확인 필요

중요:
- 기존 Vercel 프로젝트에 등록된 환경변수는 자동 이전되지 않을 수 있으므로, 새 프로젝트에서 다시 설정해야 합니다.

---

## 7) 5단계: 배포 검증

1. Vercel Dashboard -> 프로젝트 -> **Deployments**
2. 최신 배포 상태 확인 (`Building` -> `Ready`)
3. Production URL에서 변경사항 확인
4. 실패 시 해당 배포의 **Build Logs** 확인

체크 포인트:
- 저장소 연결이 새 회사 GitHub를 바라보는지
- 배포 커밋 SHA가 `origin`에 푸시한 커밋과 일치하는지
- 환경변수 누락이 없는지

---

## 8) 앞으로의 운영 표준 (단일 저장소)

앞으로는 아래 흐름만 사용합니다.

```bash
git add .
git commit -m "feat: 변경 내용"
git push origin main
```

또는 PR 기반:
- feature 브랜치 push
- PR 머지 -> `main` 갱신
- Vercel 자동 배포

더 이상 사용하지 않는 방식:
- `git push vercel <브랜치>:main`
- `vercel-deploy` 전용 폴더 복사 중심 운영

---

## 9) 트러블슈팅

### 1. Vercel에서 저장소가 보이지 않음

- 회사 GitHub 조직에 대한 Vercel 권한(앱 설치 범위) 확인
- Vercel에서 GitHub 연결 재인증

### 2. Vercel이 이전 저장소를 계속 참조함

- 프로젝트 설정에서 Git 연결 확인
- 변경이 안 되면 새 프로젝트 생성 후 새 저장소 Import

### 3. 빌드는 되지만 페이지가 다름

- 배포된 커밋 SHA와 로컬/원격 `main` SHA 비교
- 브랜치 보호 정책으로 머지가 지연된 것은 아닌지 확인

### 4. 빌드 실패 (환경변수 관련)

- 기존 프로젝트 환경변수를 새 프로젝트에 동일하게 복사
- Preview/Production 범위 구분 확인

---

## 문서 관계

- 이 문서: **단일 저장소 + 회사 Vercel 계정 운영용**
- 레거시 문서: [`DEPLOYMENT.md`](./DEPLOYMENT.md) (**2-remote 방식**)
