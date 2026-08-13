# Product Boundaries and Information Architecture

## 1. `www.hbkr.net`

### 포함

```text
/
/for-business
/for-practitioners
/ai-ax-projects
/how-it-works
/about
/history
/partners
/legal
```

- AI/AX 포지셔닝
- 기업과 실행자의 두 Primary Entry
- 문제 정의부터 검증까지 실행 방식
- HungryBoxer에서 HBKR로 이어지는 역사
- 각 서비스로 이동하는 설명형 Navigation

### 제외

- 회원 계정
- Talent·Project 원본 데이터 관리
- Match와 Shortlist 작성
- Community Feed
- 내부 운영 정보

## 2. `work.hbkr.net`

### 핵심 IA

```text
/
/projects
/projects/new
/projects/:projectId
/projects/:projectId/candidates
/talent
/talent/join
/talent/:talentId
/members/:memberId
/members/:memberId/evidence
/matches
/matches/:matchId
/verification/:verificationId
```

### 공통 Member 모델

```text
Member
  Identity
  Public visibility
  Talent Profile       optional
  Project Owner Profile optional
  Organization links    optional
```

가입 시 Member를 기업 또는 개인 중 하나로 영구 고정하지 않는다.

### Talent가 보여주는 정보

- Capability
- 제공 산출물
- Evidence
- Availability
- Rate 또는 협의 방식
- 자문, Part-time, 프로젝트, 팀 참여 형태

### Talent가 확인하는 정보

- 선호 Project와 Domain
- Role Scope와 Decision Authority
- Team, Data, System 조건
- 책임 범위
- 비선호 경계
- 계약 전 Verification Required

### Project가 보여주는 정보

- 문제와 현재 업무
- 원하는 결과와 성공 기준
- Budget Range
- 기간
- 계약 조건
- 현재 팀
- 보유 Data, System, Asset
- 의사결정 Authority
- 보안·개인정보 조건

### Project가 찾는 정보

- 필요한 Role
- Capability
- 산출물
- Evidence
- Availability
- 책임 범위
- 필수·선호·학습 가능 조건

### Match 결과

```text
Match Assessment
  Fit rationale
  Capability coverage
  Capability gap
  Context or condition mismatch
  Verification required
  Recommended next step
  Score or confidence, optional
  Score limitation
```

점수가 있더라도 판단 근거보다 먼저 표시하지 않는다. 초기 Match는 자동 추천이 아니라 Operator가 작성한 Assessment다.

### Work에 넣지 않을 것

- 계약 원문과 민감한 정산 데이터
- 고객 Discovery 전체 기록
- Community 게시판
- 학습 콘텐츠 관리
- 실험 원본 전체
- 자동 Talent Ranking

## 3. `ops.hbkr.net`

### 핵심 IA

```text
/dashboard
/leads
/leads/:leadId
/discoveries
/project-briefs
/talent-pool
/shortlists
/proposals
/contracts
/delivery
/settlements
/evidence
/taxonomy
/audit
```

### 표준 운영 흐름

```text
Lead
  -> Discovery scheduled
  -> Discovery completed
  -> Qualified / Declined / Nurture
  -> Project Brief
  -> Talent Search
  -> Shortlist
  -> Proposal
  -> Contract
  -> Delivery
  -> Acceptance
  -> Settlement
  -> Evidence
```

### 초기 구현 경계

P0 Ops는 완성형 Backoffice가 아니라 운영 표준을 검증하는 최소 시스템이다.

최소 기능:

- Lead 등록과 상태
- Discovery Note
- Project Brief
- Talent Pool 검색 필드
- Shortlist와 선택 근거
- Next Action과 담당자

실제 반복이 확인되기 전 자동화하지 않을 기능:

- 자동 견적
- 자동 계약
- Payment와 Escrow
- 복잡한 Workflow Engine
- 자동 Match Score

## 4. `cafe.hbkr.net`

### 핵심 IA

```text
/
/camping
/communities
/members
/meetups
/activities
/stories
/topics
/join
/guidelines
/history
```

### 초기 핵심

- `camping`: 캠핑하는 프로그래머
- `meetups`: 실제 온·오프라인 모임
- `activities`: 무엇을 했는지에 대한 기록
- `members`: Member가 허용한 공개 정보
- `history`: HungryBoxer 기록
- Learn·Lab 활동 진입

### Cafe에 넣지 않을 것

- 기업의 실제 Delivery
- 무료로 처리하는 상업 Project
- 계약·보상·정산
- 대규모 SNS Feed와 자체 Chat
- 자동 Member Rank

## 5. `lab.hbkr.net`

### 핵심 IA

```text
/
/experiments
/experiments/:experimentId
/prototypes
/field-tests
/results
/submit
/guidelines
```

### Experiment 원형

```text
Problem
Hypothesis
Experiment
Implementation
Result
Evidence
What Failed
Next
Contributors
IP / License status
Commercial status
```

### Commercial 전환 Gate

```text
Commercial value identified
  -> STOP community/lab execution
  -> Confirm contributors and IP
  -> Define scope and compensation
  -> Separate agreement
  -> Move to Work candidate
```

## 6. `learn.hbkr.net`

### 핵심 IA

```text
/
/foundation
/applied
/builder
/sessions
/materials
/living-lab
/guidelines
```

### 활동 구분

- Foundation: AI 기본 활용, 결과 검증, 반복 개선
- Applied: 업무 문제 적용, 자동화, Data와 Tool 사용
- Builder: Agent, RAG, API, 제품·시스템 구현
- Living Lab: 초보 사용자의 질문, 오류 신뢰, 중단 지점 관찰

사람 자체에 초급·고급 등급을 붙이지 않는다. 활동별 필요 Capability와 참여 조건만 정의한다.

## 7. `api.hbkr.net`

`api-system`은 내부·외부 데이터 계약을 제공하는 공통 System이며 사용자용 화면이 아니다.

### 예약 URL 계약

```text
/v1/members
/v1/organizations
/v1/talent-profiles
/v1/projects
/v1/evidence
/v1/match-assessments
/v1/integrations/events
/health
```

### 포함

- 여러 Platform이 공유하는 핵심 Resource API
- 서비스 간 Event 수신·전달 계약
- API Authentication과 Authorization
- Versioning, Idempotency, Audit Metadata
- Health Check

### 제외

- 사용자용 화면
- Ops 업무 Workflow 자체
- Identity Provider 자체 구현
- API만을 위한 별도 원본 데이터 복제
- Trigger 충족 전 선행 개발

실제 Endpoint와 Version은 구현 시 ADR로 확정한다. 위 경로는 책임 범위를 설명하기 위한 예약 IA이며 현재 존재하는 API가 아니다.

## 8. `id.hbkr.net`

`id-system`은 통합 Identity와 Access Policy를 제공하며 독립 커뮤니티 또는 Member Profile 서비스가 아니다.

### 예약 URL 계약

```text
/login
/logout
/consent
/account
/sessions
/access
/.well-known/*
```

### 포함

- 통합 로그인과 로그아웃
- Account Recovery
- Session 관리
- Service별 Role과 Access Claim
- Consent와 연결 서비스 확인
- Organization Membership의 인증 Context

### 제외

- Talent Profile과 Project Owner Profile
- Cafe 활동 Profile
- 공개 Member Directory
- 자체 OAuth Provider를 반드시 개발한다는 결정
- Trigger 충족 전 통합 SSO 구축

최종 경로는 선택한 Identity Provider와 보안 설계에 따라 달라질 수 있다.

## 9. `status.hbkr.net`

`status-static`은 서비스 가용성과 Incident Communication을 제공하는 읽기 전용 Surface다.

### 예약 URL 계약

```text
/
/history
/incidents/:incidentId
/maintenance
```

### 포함

- 서비스별 현재 상태
- 장애 발생·영향·복구 상태
- 예정 Maintenance
- 과거 Incident 기록

### 제외

- 내부 Log와 민감한 장애 원인
- 고객 Support Ticket
- 운영 Dashboard
- 실제 유료 운영 전 빈 Status 연출

## 10. 전환 경로

### 기업

```text
www
  -> work/projects/new
  -> ops/lead
  -> Discovery
  -> Project Brief
  -> Shortlist
  -> Proposal / Contract
```

### 실행자

```text
www
  -> work/talent/join
  -> Talent Profile
  -> Evidence review
  -> Talent Pool
  -> Shortlist candidate
```

### Community Member

```text
www
  -> cafe
  -> meetup / activity
  -> learn or lab
  -> evidence
  -> optional work participation
```

Community 참여가 Work 참여를 보장하지 않고, Work 참여를 위해 Community 가입을 강제하지도 않는다.
