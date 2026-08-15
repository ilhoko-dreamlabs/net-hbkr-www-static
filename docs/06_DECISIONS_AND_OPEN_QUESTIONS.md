# Decisions and Open Questions

## 1. 확정된 결정

### D-001 저장소 규칙

```text
net-hbkr-{subdomain}-{static|platform|system}
```

성격은 비즈니스 기능이나 Framework가 아니라 구현·운영 유형이다.

### D-002 대표 서비스

```text
www.hbkr.net    net-hbkr-www-static
work.hbkr.net   net-hbkr-work-platform
ops.hbkr.net    net-hbkr-ops-system
cafe.hbkr.net   net-hbkr-cafe-platform
lab.hbkr.net    net-hbkr-lab-platform
learn.hbkr.net  net-hbkr-learn-platform
api.hbkr.net    net-hbkr-api-system
id.hbkr.net     net-hbkr-id-system
status.hbkr.net net-hbkr-status-static
```

### D-003 Cafe 명칭

Community 서비스의 주소와 제품명은 `cafe`를 사용한다.

Cafe는 게시판만을 뜻하지 않고 사람, 모임, Vertical Community가 만나는 장소다.

### D-004 Work 통합

Talent와 Project를 별도 서브도메인으로 나누지 않는다. 하나의 `work` Platform 안에서 두 시장 객체를 동등하게 다룬다.

### D-005 Member 복수 역할

한 Member는 Talent과 Project Owner 역할을 동시에 가질 수 있다. 기업·개인 중 하나로 영구 고정하지 않는다.

### D-006 초기 Matching

초기 Match는 Operator가 직접 작성한다. 자동 Matching Engine과 Talent Ranking을 먼저 만들지 않는다.

### D-007 Community 경계

Community 참여는 무료 노동이 아니다. 상업 가치가 명확해지는 순간 Work Candidate로 전환하고 Scope, Contract, Compensation을 정의한다.

### D-008 HungryBoxer

HungryBoxer는 HBKR의 역사로 보존한다. 현재 HBKR의 약자로 억지로 재해석하지 않는다.

### D-009 Shared System 지연

`api`, `id`, `status`는 이름을 예약하지만 명시된 Trigger가 충족되기 전 만들지 않는다.

### D-010 초기 Commercial Offer

첫 진입 Offer는 다음 구조로 운영 검증한다.

```text
무료 사전 적합성 확인
  -> 유료 AI/AX Discovery
  -> Scope · Team
  -> Proposal · Contract
  -> Delivery · Evidence
```

무료 단계는 GO, HOLD, AI 불필요를 판단하는 선별 단계이며 해결안과 상세 Scope를 무료로 제공하지 않는다. 유료 Discovery의 가격과 기간은 아직 미정이다.

### D-011 WWW Canonical Domain

`www.hbkr.net`을 WWW Static Site의 Canonical Production Domain으로 사용한다.

- Hosting: GitHub Pages
- DNS: `www.hbkr.net CNAME ilhoko-dreamlabs.github.io`
- HTTPS: Enforced
- Repository: `CNAME` 파일로 기준선 유지
- 루트 `hbkr.net`: 아직 미연결

## 2. 제안 상태

아래는 설계 권장안이며 실제 운영 전 확정이 필요하다.

- `work-platform`과 `ops-system`의 공개 범위
- 최초 Member Identity를 Work가 소유하는 구조
- Match Assessment를 Ops가 작성하고 Work가 전달하는 구조
- Repository별 필수 문서 세트
- Stage별 Exit Criteria 수치

## 3. 사업 미결정

### OQ-B01 유료 Discovery의 가격과 진행 조건

- 고정 가격 또는 범위별 가격
- 기본 진행 기간
- Interview와 Workshop 횟수
- Discovery 비용의 본 프로젝트 전환 시 처리
- 결과물 사용권과 책임 범위

### OQ-B02 계약 주체와 수익 구조

- DreamLabs 원도급
- 중개 또는 소개
- PM·QA 포함 재위탁
- 고정가, Time & Materials, 소개 수수료

법률·세무 검토 전 확정하지 않는다.

### OQ-B03 초기 고객 Segment

- GoodThink 고객 기반 ITO 수요
- AI 기능을 추가하려는 Software 기업
- 사내 업무 자동화가 필요한 중소기업
- 특정 Domain Vertical

첫 10개 Lead에서 Segment별 전환을 기록한 뒤 좁힌다.

### OQ-B04 공개 Inventory

- Talent 이름과 Rate를 어디까지 공개할지
- Project Budget과 고객사를 어디까지 공개할지
- 익명·요약 Profile을 허용할지

Member와 고객 동의 모델이 필요하다.

## 4. 제품 미결정

### OQ-P01 Intake 수단

- Email
- External Form
- Work Platform 내부 Form
- 예약 Calendar + 사전 Questionnaire

수익 우선 기준으로 가장 빠르게 실제 응답 가능한 수단을 선택한다.

### OQ-P02 Cafe 초기 범위

- 정보형 Portal
- Meetup·Activity 중심
- Member Directory 포함
- Topic Discussion 포함

현재 운영 콘텐츠와 운영자 Capacity로 결정한다.

### OQ-P03 Evidence 공개 정책

- 원문 공개
- 검증 Summary만 공개
- Match 당사자에게만 공개
- 고객명 익명화

고객과 Contributor 동의를 함께 다뤄야 한다.

## 5. 기술 미결정

- Framework
- `www` 이외 서비스의 Hosting Provider
- Database
- OAuth Provider
- Email·Notification Provider
- CRM 또는 Backoffice Tool
- File Storage
- Analytics
- Error Tracking
- Payment
- 실제 LLM API

실제 서비스 요구와 Exit Criteria를 근거로 저장소별 ADR에서 결정한다.

## 6. 법률·운영 미결정

- 직업소개사업 해당 여부
- 근로자공급·파견 해당 여부
- 외주·재위탁 계약 구조
- 개인정보 처리방침과 보존 기간
- Evidence 공개 동의
- IP와 Contributor 권리
- Contributor 보상
- 세금계산서와 정산
- 고객 Data와 보안 책임
- 하자와 Delivery 책임

## 7. 다음 결정 순서

1. Project Intake 수단과 필드
2. Talent Intake 수단과 필드
3. 유료 Discovery 가격과 기간
4. 운영 Pipeline 도구
5. 계약 주체와 Commercial Model 검토
6. `work-platform` 저장소 생성 Trigger 충족 여부
7. `ops-system` 저장소 생성 Trigger 충족 여부

다음 사용자 결정은 `www`의 `AI/AX 프로젝트 상담`이 연결될 실제 Intake 수단과 필드다.
