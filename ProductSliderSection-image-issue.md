# product slider section 이미지 렌더링 이슈 정리

## 문제 요약
- `ProductSliderSection`의 첫 번째 탭(형강절단 로봇)에서만 이미지가 검정색으로 렌더링됨
- 같은 이미지 파일을 다른 탭이나 다른 페이지에서 사용하면 정상 표시됨
- 탭 전환, 슬라이드 전환을 해도 첫 탭에서는 동일하게 검정색 상태가 유지됨

## 영향 범위
- 홈 페이지의 `ProductSliderSection` 내 첫 번째 탭만 영향
- 다른 탭 및 `products.tsx`에서는 정상

## 원인
- Swiper가 flex 컨테이너에서 초기 레이아웃 계산을 잘못 수행함
- 초기 렌더 시 Swiper 폭이 비정상적으로 크게 계산돼 이미지 렌더가 깨짐
- 내부 로그에서 초기 폭이 과도하게 큰 값으로 기록됨

## 해결 방법
- Swiper가 들어있는 flex 영역에 `min-w-0`를 추가해 가로 폭이 컨테이너에 맞게 계산되도록 보정
- Swiper 자체에도 `w-full min-w-0`를 적용해 초기 폭 오판을 방지

## 검증 방법
- 동일 재현 시나리오를 수행했을 때 첫 탭 이미지가 정상 표시됨
- Swiper 폭이 정상 범위로 유지됨을 확인

## 변경 파일
- `client/src/components/ProductSliderSection.tsx`

