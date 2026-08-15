# Revenue-first Implementation Roadmap

## 1. 목표와 측정 기준

초기 목표는 회원 수나 Page View가 아니다.

```text
유효 AI/AX Lead
  -> 유료 Discovery 또는 견적 가능한 Brief
  -> 적합 실행자 Shortlist
  -> 계약
  -> Delivery
  -> 재사용 가능한 Evidence
```

최상위 검증 질문:

- 실제 고객이 AI/AX 문제를 상담하는가?
- 고객이 지불 가능한 Budget과 일정이 있는가?
- 운영자가 적합한 역할 조합을 만들 수 있는가?
- Proposal과 Contract로 전환되는가?
- Delivery 결과가 다음 계약의 Evidence가 되는가?

## 2. 실행 순서

기간은 고정 달력이 아니라 Exit Criteria로 통제한다. 시장 속도에 맞춰 병렬 진행할 수 있지만 Gate를 건너뛰지 않는다.

### 확정된 초기 Offer

```text
무료 사전 적합성 확인
  -> GO / HOLD / AI 불필요 판단
  -> 유료 AI/AX Discovery
  -> Scope · Team Design
  -> Proposal · Contract
  -> Delivery · Evidence
```

무료 단계는 문제, 원하는 결과, Budget·일정 신호와 의사결정 가능성을 확인하는 선별 단계다. 무료 단계에서 해결안, 상세 Scope 또는 납품 수준의 자문을 제공하지 않는다.

유료 Discovery의 기본 산출물은 현재 업무·병목 Map, AI 적용 필요성 판단, Project Brief, Scope·Risk·Verification 기준, 필요 Role과 권장 Next Step이다. 가격과 진행 기간은 실제 고객 검증 후 확정한다.

## Stage 0. 기준선과 접수 설계

**저장소**

- `net-hbkr-www-static`
- 별도 운영 문서 또는 검증용 도구

**구현**

- AI/AX 프로젝트 상담 CTA
- AI/AX 실행자 참여 CTA
- 무료 적합성 확인과 유료 Discovery의 경계
- Project Intake 필드
- Talent Intake 필드
- Discovery Script
- Lead와 Talent Pool 최소 Schema
- Commercial Boundary 문구

**Exit Criteria**

- 두 접수 흐름이 실제 채널로 전달됨
- Operator가 10분 안에 새 접수를 확인 가능
- 필수 정보 누락을 식별 가능
- 고객과 실행자에게 다음 단계가 안내됨

**금지**

- 자동 Matching
- 통합 인증
- 복잡한 Profile Editor
- 빈 Project·Talent Inventory 연출

## Stage 1. 수동 수익 운영

**저장소 결정**

처음에는 새로운 Ops UI를 즉시 만들지 않고 Spreadsheet, CRM, 문서 Template으로 검증할 수 있다. 다음 조건이 되면 `net-hbkr-ops-system`을 생성한다.

- 활성 Lead가 동시에 5건 이상
- 상태 누락 또는 Follow-up 누락 발생
- Shortlist 작성이 주 2회 이상 반복
- 둘 이상의 Operator가 같은 정보를 사용

**운영**

- Project Request 접수
- Discovery
- AI 적용 필요성 판단
- Scope·Budget·Schedule
- Talent Search
- Team Composition
- Proposal
- Contract
- Delivery
- Evidence

**Exit Criteria**

- 최소 3개의 유효 Project Brief
- 최소 1개의 유료 계약 또는 명확한 계약 실패 원인
- 최소 10명의 동의 기반 Talent Pool
- 고객 선택에 영향을 준 Evidence 항목 기록
- 각 단계의 평균 소요와 Drop Reason 기록

## Stage 2. Work Platform MVP

**저장소**

- `net-hbkr-work-platform`

**MVP 범위**

- Project Request
- Talent Join
- Talent Card·Detail
- Project Card·Detail
- 한 Member의 복수 역할
- Availability와 Boundary
- Operator-authored Match Assessment
- 공개·비공개 필드

**Exit Criteria**

- 실제 Project와 Talent 데이터로 운영
- Sample을 실제 Inventory처럼 표시하지 않음
- Match에 Fit, Gap, Verification, Next Step 존재
- Operator가 코드 변경 없이 상태를 갱신할 수 있음
- 적어도 하나의 실제 계약 흐름에서 사용

## Stage 3. Ops System MVP

Stage 1 Trigger가 충족되면 Stage 2와 병렬 또는 선행 가능하다.

**저장소**

- `net-hbkr-ops-system`

**MVP 범위**

- Lead Pipeline
- Discovery Brief
- Talent Pool
- Shortlist
- Proposal·Contract 상태
- Delivery Milestone
- Evidence Candidate
- Operator Audit

**Exit Criteria**

- 모든 활성 Lead에 Owner와 Next Action 존재
- Work의 Project와 Ops Brief가 추적 가능한 ID로 연결
- 민감 정보가 Work Public View에 노출되지 않음
- 계약·Delivery·Settlement 상태를 한 화면에서 추적

## Stage 4. Cafe

**저장소 생성 Trigger**

- 정기 Meetup 또는 Activity가 실제로 운영
- 캠핑하는 프로그래머의 다음 일정과 기록이 존재
- 운영 책임자가 존재
- 기존 SNS만으로 기록과 참여 관리가 어려움

**저장소**

- `net-hbkr-cafe-platform`

**MVP 범위**

- HungryBoxer History
- 캠핑하는 프로그래머
- Meetup·Activity·Story
- Member 공개 Profile
- Join과 Guideline
- Learn·Lab 연결

**Exit Criteria**

- 실제 활동 3개 이상 기록
- 다음 활동 접수가 발생
- Community와 Work의 상업 경계가 명시됨

## Stage 5. Lab과 Learn

### Lab 생성 Trigger

- 반복 가능한 Experiment가 3개 이상
- Contributor와 Evidence 기록 방식이 필요
- Field Test 결과가 Talent 판단에 사용됨

### Learn 생성 Trigger

- 반복 운영할 Session이 2개 이상
- Foundation·Applied·Builder 활동 구분이 실제 운영에 필요
- 자료와 참여 기록을 SNS로 관리하기 어려움

**저장소**

- `net-hbkr-lab-platform`
- `net-hbkr-learn-platform`

**Exit Criteria**

- 빈 Catalog가 아닌 실제 콘텐츠로 시작
- Lab Evidence가 Work Profile과 연결
- 사람 Ranking이 아닌 활동 조건으로 참여를 구분

## Stage 6. Shared Systems

**저장소**

- `net-hbkr-api-system`
- `net-hbkr-id-system`
- `net-hbkr-status-static`

각 저장소는 `03_DATA_AND_INTEGRATION.md`의 Trigger를 충족할 때만 만든다.

## 3. 수익 Funnel

| 단계 | 핵심 Metric | 실패 이유 기록 |
|---|---|---|
| Visit -> Inquiry | 프로젝트 상담 전환 | 메시지 불명확, 신뢰 부족 |
| Inquiry -> Discovery | 유효 상담률 | 예산 없음, 문제 모호, 연락 불가 |
| Discovery -> Brief | Brief 완성률 | 데이터·권한 없음, AI 불필요 |
| Brief -> Shortlist | 후보 구성 시간 | Talent 부족, 조건 불일치 |
| Shortlist -> Proposal | 고객 검토 진입률 | Evidence 부족, Budget Gap |
| Proposal -> Contract | 계약 전환율 | 가격, 책임, 일정, 법무 |
| Contract -> Acceptance | 납품 수용률 | Scope, 품질, 운영 전환 |
| Acceptance -> Repeat | 재계약·추천 | 결과 미달, 관계 종료 |

## 4. 운영 데이터 우선순위

모든 기능보다 먼저 다음 데이터를 남긴다.

- 고객이 사용한 문제 설명 언어
- 실제 Budget Range
- 기간과 시작 가능 시점
- 필요한 Role 조합
- Data·System·Authority 조건
- 고객이 확인한 Evidence
- 거절 이유
- Talent의 Availability와 Boundary
- Scope 변경 원인
- Delivery 실패와 재작업 원인
- 다음 계약에 재사용된 Evidence

## 5. 즉시 실행 Backlog

### P0

1. `www`의 두 CTA가 실제 Intake로 연결되도록 접수 수단 결정
2. Project Intake와 Talent Intake Schema 확정
3. Discovery Script 작성
4. 초기 Talent 후보 10명에 대한 동의 기반 Interview
5. Partner 채널의 실제 고객 Lead를 표준 Pipeline으로 기록

### P1

1. 3개의 실제 Brief로 Work IA 검증
2. Shortlist Template과 Match Assessment Template 운영
3. Ops System 생성 Trigger 측정
4. 첫 계약의 Contract·IP·Compensation 기준 검토

### P2

1. Work Platform MVP 착수 여부 결정
2. Cafe의 실제 운영 책임자와 콘텐츠 확인
3. Lab Evidence가 계약 결정에 기여했는지 검증

## 6. 중단 기준

다음 상황에서는 Platform 개발을 확대하지 않는다.

- 실제 Project Inquiry가 없음
- 반복되는 운영 흐름이 없음
- Talent가 공개 Profile 또는 참여에 동의하지 않음
- 고객이 Evidence에 의미를 두지 않음
- 수동 Matching으로도 계약이 성사되지 않음

이 경우 Landing 카피, Offer, 고객 Segment, Commercial Model을 먼저 수정한다.
