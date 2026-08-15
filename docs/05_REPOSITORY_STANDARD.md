# HBKR Repository Standard

## 1. 이름

```text
net-hbkr-{subdomain}-{type}
```

허용된 `type`:

- `static`
- `platform`
- `system`

예:

```text
net-hbkr-www-static
net-hbkr-work-platform
net-hbkr-ops-system
```

비권장:

```text
net-hbkr-work-nextjs
net-hbkr-cafe-web
net-hbkr-ops-backoffice
net-hbkr-shared-utils
```

기술 스택과 세부 비즈니스 기능은 저장소 이름이 아니라 문서와 Manifest에서 관리한다.

## 2. 하나의 대표 배포 단위

초기 원칙:

```text
하나의 서브도메인
= 하나의 대표 저장소
= 하나의 독립 배포 단위
```

Frontend와 Backend 저장소를 미리 분리하지 않는다. 독립 Scale, 보안 경계, 배포 주기가 입증된 후 분리한다.

## 3. 필수 파일

```text
AGENTS.md
README.md
CHANGELOG.md

docs/
  00_HANDOFF.md
  01_PRODUCT_BASELINE.md
  02_INFORMATION_ARCHITECTURE.md
  03_DATA_BOUNDARY.md
  04_SECURITY_AND_PRIVACY.md
  05_DEPLOYMENT.md
  06_ACCEPTANCE_CRITERIA.md
  07_IMPLEMENTATION_BACKLOG.md
  08_OPEN_QUESTIONS.md

.github/workflows/
source files
```

서비스 규모가 작아도 `README`, Scope, Data Boundary, Acceptance Criteria, Open Questions는 생략하지 않는다.

## 4. README 필수 항목

- 서비스 한 문장 책임
- 사용자와 사용자 문제
- 포함 범위와 제외 범위
- Repository Type
- Local 실행 방법
- Check·Test·Build 명령
- Deployment 방식
- Environment 변수 이름과 목적
- 관련 서비스
- 현재 미확정 사항

## 5. AGENTS 필수 규칙

- 읽어야 할 문서 순서
- Source of Truth
- Framework Migration 금지 또는 조건
- 개인정보와 Secret 처리
- Sample Data 표시 규칙
- Test·Build 명령
- Commit·Push 정책
- 서비스 경계 위반 금지

## 6. 브랜치와 변경 관리

- 기본 브랜치: `main`
- `main`은 항상 배포 또는 배포 가능한 상태
- 기능 변경은 작은 단위로 Commit
- 확정되지 않은 사업 가정을 Feature처럼 구현하지 않음
- Schema와 서비스 경계 변경은 Docs를 먼저 또는 함께 변경
- `CHANGELOG.md`에 사용자 영향과 운영 영향 기록
- 사용자 요청 없이 Commit·Push하지 않음

## 7. 공통 품질 명령

각 저장소는 다음 Interface를 제공하는 것을 권장한다.

```text
npm run check
npm run test
npm run build
npm run dev
```

실제 명령이 다르면 README에 명확히 기록한다. Static 저장소에 불필요한 Package Manager를 강제하지 않는다.

## 8. Environment

권장 구분:

```text
local
preview
production
```

- Secret은 Git에 Commit하지 않음
- Client Bundle에 Server Secret을 넣지 않음
- Preview는 Production 개인정보를 사용하지 않음
- Sample은 `SAMPLE`, `EXAMPLE`, `DEMO`로 명시
- Production URL과 데이터 연결 여부를 README에 기록

## 9. 배포 책임

각 저장소는 다음을 명시한다.

- Hosting Provider
- Project Name
- Build Command
- Output Directory
- Production Branch
- Domain과 DNS Owner
- Rollback 방법
- Logs 위치
- 배포 책임자

현재 `www` 외 다른 서비스의 Hosting Provider는 미정이다.

## 10. 관찰 가능성

Platform과 System은 최소 다음을 준비한다.

- 배포 실패 확인
- Runtime Error 확인
- 중요 Workflow 실패 확인
- 개인정보를 제외한 Audit Event
- Operator가 확인할 장애 연락 경로

실제 사용 전까지 복잡한 Observability Stack을 만들 필요는 없다.

## 11. 접근성과 반응형

외부 사용자 Surface는 다음을 완료 기준에 포함한다.

- Keyboard Navigation
- 의미 있는 Heading 구조
- Label과 Error Message
- Color Contrast
- Reduced Motion
- 390px Mobile과 일반 Desktop에서 핵심 위계 유지
- Loading, Empty, Error 상태

## 12. 새 저장소 생성 Checklist

```text
[ ] 실제 생성 Trigger가 충족됐는가
[ ] Subdomain과 Type이 확정됐는가
[ ] 한 문장 책임이 있는가
[ ] 포함·제외 범위가 있는가
[ ] Data Owner가 정의됐는가
[ ] Public/Private 결정이 있는가
[ ] 운영 책임자가 있는가
[ ] 30일 내 Exit Criteria가 있는가
[ ] 배포 방식이 결정됐는가
[ ] 비어 있는 Demo를 실제 서비스처럼 보이지 않는가
```

하나라도 핵심 항목이 비어 있으면 빈 Repository부터 만들지 않는다.

