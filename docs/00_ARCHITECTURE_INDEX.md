# HBKR Service Architecture Index

## 1. 문서 목적

이 문서 세트는 `www.hbkr.net` 이후 확장될 HBKR 서비스의 공식 계획 기준선이다.

다음을 결정한다.

- 서브도메인과 저장소의 이름
- 각 서비스의 사용자, 책임, 비책임
- `static`, `platform`, `system`의 분류 기준
- 서비스별 핵심 URL과 제품 흐름
- 데이터 원본과 공개·비공개 경계
- 서비스 간 연동 원칙
- 수익 발생을 우선하는 구축 순서
- 새 저장소가 따라야 할 공통 기준

아직 검증되지 않은 사업 조건과 기술 선택은 확정된 사실처럼 다루지 않는다.

## 2. 읽는 순서

1. `01_SERVICE_MAP.md`: 전체 서비스와 저장소 지도
2. `02_PRODUCT_BOUNDARIES.md`: 서비스별 제품 책임과 핵심 URL
3. `03_DATA_AND_INTEGRATION.md`: 데이터 소유권, 연동, 권한 설계
4. `04_REVENUE_FIRST_ROADMAP.md`: 수익 우선 구축 순서와 완료 기준
5. `05_REPOSITORY_STANDARD.md`: 저장소 생성·문서·배포 표준
6. `06_DECISIONS_AND_OPEN_QUESTIONS.md`: 확정 사항과 미결정 사항

## 3. 전체 구조 요약

```text
www.hbkr.net
  브랜드, 신뢰, 기업·실행자 유입
        |
        +--> work.hbkr.net
        |      AI 프로젝트, AI 인재, 수동 Match 결과
        |             |
        |             +--> ops.hbkr.net
        |                    Discovery, 소싱, 제안, 계약, Delivery
        |
        +--> cafe.hbkr.net
               사람, 모임, Vertical Community
                    |
                    +--> learn.hbkr.net
                    |      학습 활동, Living Lab
                    |
                    +--> lab.hbkr.net
                           실험, Prototype, Field Test
                                |
                                +--> Evidence --> work.hbkr.net

api.hbkr.net     공통 데이터 API가 실제로 필요해질 때 도입
id.hbkr.net      통합 인증이 실제로 필요해질 때 도입
status.hbkr.net  유료 서비스 상태 고지가 필요해질 때 도입
```

## 4. 저장소 목록

| 우선순위 | 서브도메인 | 저장소 | 성격 | 공개 범위 권장 |
|---|---|---|---|---|
| P0 | `www.hbkr.net` | `net-hbkr-www-static` | static | Public |
| P0 | `work.hbkr.net` | `net-hbkr-work-platform` | platform | Private 권장 |
| P0 | `ops.hbkr.net` | `net-hbkr-ops-system` | system | Private 필수 |
| P1 | `cafe.hbkr.net` | `net-hbkr-cafe-platform` | platform | Public 가능 |
| P2 | `lab.hbkr.net` | `net-hbkr-lab-platform` | platform | Public 가능 |
| P2 | `learn.hbkr.net` | `net-hbkr-learn-platform` | platform | Public 가능 |
| P3 | `api.hbkr.net` | `net-hbkr-api-system` | system | Private |
| P3 | `id.hbkr.net` | `net-hbkr-id-system` | system | Private |
| P3 | `status.hbkr.net` | `net-hbkr-status-static` | static | Public |

## 5. 현재 기준선

- 존재하는 저장소: `net-hbkr-www-static`
- 존재하는 배포: GitHub Pages 기반 기본 랜딩
- 아직 만들지 않은 저장소: `work`, `ops`, `cafe`, `lab`, `learn`, `api`, `id`, `status`
- 아직 연결하지 않은 것: `www.hbkr.net`과 모든 하위 DNS
- 아직 확정하지 않은 것: Framework, DB, OAuth, 결제, 실제 LLM API, production hosting

## 6. 최상위 사업 원칙

1. 초기 목적은 Marketplace 자동화가 아니라 실제 유료 AI/AX 프로젝트의 성사다.
2. 초기 Matching은 운영자가 직접 수행한다.
3. 기업에는 기술보다 문제, 현재 업무, 데이터, 예산, 기간을 묻는다.
4. AI 인재는 개발자만이 아니라 AI/AX 실행에 필요한 다차원 역할을 포함한다.
5. 한 Member는 Talent이면서 Project Owner일 수 있다.
6. Community, Learn, Lab은 메인 상품이 아니라 사람과 Evidence의 공급 기반이다.
7. Community 참여를 무료 상업 노동으로 전환하지 않는다.
8. 점수만으로 사람과 프로젝트를 판단하지 않는다.
9. 공유 Backend와 통합 인증은 필요가 입증된 이후 분리한다.
10. 아직 없는 기능, 인력, 계약 조건을 있는 것처럼 표시하지 않는다.

