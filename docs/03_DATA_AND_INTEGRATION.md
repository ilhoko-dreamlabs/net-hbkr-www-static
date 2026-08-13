# Data, Integration and Access Boundaries

## 1. 설계 원칙

1. 데이터마다 하나의 Authoritative Source를 둔다.
2. 공개용 Summary와 비공개 원본을 분리한다.
3. 초기에는 서비스 간 DB 공유보다 명시적인 수동 전달을 허용한다.
4. 통합 API는 실제 중복과 동기화 비용이 발생한 이후 도입한다.
5. Member는 복수 Role을 가질 수 있다.
6. Evidence는 원본과 공개 Index를 구분한다.
7. 운영 편의를 이유로 민감 정보를 Public Platform에 복제하지 않는다.

## 2. 핵심 개체

```text
Member
Organization
TalentProfile
Project
ProjectBrief
Capability
RoleRequirement
Evidence
Availability
MatchAssessment
Lead
Discovery
Shortlist
Proposal
Contract
Delivery
Settlement
Community
Activity
Experiment
LearningSession
```

## 3. 데이터 원본 지도

| 데이터 | 초기 Authoritative Source | 공개 Surface | 비고 |
|---|---|---|---|
| Member 기본 Identity | `work` | Member 공개 Profile | 장기적으로 `id` 분리 가능 |
| Talent Profile | `work` | Talent Card·Detail | Member가 공개 범위 결정 |
| Availability·Rate | `work` | 제한 공개 또는 비공개 | 정확한 Rate 공개 여부 선택 |
| Project 공개 정보 | `work` | Project Card·Detail | 고객 승인된 내용만 공개 |
| Project 비공개 Brief | `ops` | 없음 | Data, Security, Budget 상세 포함 |
| Lead·Discovery | `ops` | 없음 | Operator only |
| Shortlist | `ops` | `work`의 제한된 Match View | 후보 동의·고객 권한 필요 |
| Match Assessment | `ops` 작성, `work` 전달 | 권한별 Match Detail | 근거·Gap·Verification 포함 |
| Proposal·Contract | `ops` | 없음 | Commercial confidential |
| Delivery·Settlement | `ops` | 제한된 상태만 | 상세 비용은 공개하지 않음 |
| Cafe Member 활동 | `cafe` | Member 선택에 따라 공개 | Work Profile과 자동 병합 금지 |
| Meetup·Activity | `cafe` | Cafe | 참석자 공개 동의 필요 |
| Lab Experiment | `lab` | Lab | Contributor와 IP 상태 포함 |
| Lab Evidence 원본 | `lab` | 공개 가능 범위만 | Work는 Index와 Link 보유 |
| Work Delivery Evidence | `ops` 원본 | `work` 승인 Summary | 고객·Contributor 승인 필요 |
| Learn 참여 기록 | `learn` | 기본 비공개 | Badge보다 실제 결과 우선 |
| Service Identity·Role | 초기 각 서비스 | 없음 | 통합 필요 시 `id`로 이동 |

## 4. Member와 Role

Member 유형을 하나로 고정하지 않는다.

```text
Member A
  Talent = true
  ProjectOwner = true
  CafeMember = true
  Operator = false
```

Role은 Context별 권한이다.

- `talent`: Talent Profile 관리
- `project_owner`: 자신의 Project 관리
- `cafe_member`: Cafe 활동 참여
- `lab_contributor`: Experiment 참여
- `operator`: Ops 접근
- `admin`: 제한된 시스템 관리

`Organization`과 `Individual`도 배타적인 Member Type으로 사용하지 않는다. Member는 개인 Identity를 유지하면서 하나 이상의 Organization과 관계를 가질 수 있다.

## 5. 공개 등급

모든 사용자 생성 정보는 최소 다음 Visibility를 가져야 한다.

```text
PUBLIC
MEMBERS_ONLY
MATCH_PARTIES
OPERATOR_ONLY
PRIVATE
```

- `PUBLIC`: 검색과 외부 공개 가능
- `MEMBERS_ONLY`: 인증된 Member만
- `MATCH_PARTIES`: 해당 Project·Talent와 승인된 관계자
- `OPERATOR_ONLY`: Ops 담당자만
- `PRIVATE`: 작성자 자신 또는 명시적 관리자만

## 6. Evidence 모델

### Evidence 원본

```text
Evidence
  sourceType: LAB | PROJECT | FIELD | PEER
  sourceId
  title
  capabilityClaims
  rolePerformed
  context
  deliverables
  result
  limitations
  verificationStatus
  verifier
  visibility
  contributorConsent
  customerConsent
```

### Verification 상태

```text
SELF_DECLARED
SOURCE_LINKED
LAB_VERIFIED
PROJECT_VERIFIED
FIELD_VERIFIED
PEER_REVIEWED
VERIFICATION_REQUIRED
```

Verification 상태는 사람의 등급이 아니라 특정 Claim의 근거 수준이다.

## 7. Match Assessment 데이터

```text
MatchAssessment
  projectId
  talentId | teamId
  roleScope
  fitRationale[]
  capabilityCoverage[]
  capabilityGaps[]
  conditionMismatches[]
  verificationRequired[]
  recommendedNextStep
  score?               optional
  scoreMethod?         optional
  scoreLimitations[]
  authoredBy
  reviewedAt
  visibility
```

초기에는 `authoredBy`가 Operator다. 자동 산출이라고 표시하지 않는다.

## 8. 초기 서비스 간 연동

### P0: Manual Handoff

```text
www CTA
  -> work intake
  -> Operator notification
  -> ops Lead 생성
```

초기에는 안전한 수동 복사 또는 단일 접수 도구를 사용할 수 있다. 중요한 것은 API 자동화보다 필드와 운영 절차를 검증하는 것이다.

### P1: Stable Contract

동일 필드가 반복되고 누락 비용이 발생하면 다음 최소 계약을 만든다.

```text
Work -> Ops
  ProjectIntakeSubmitted
  TalentProfileSubmitted

Ops -> Work
  IntakeStatusChanged
  MatchAssessmentPublished
```

### P3: Shared API

다음 Trigger가 두 개 이상 충족될 때 `api-system`을 시작한다.

- 두 서비스가 같은 Member 데이터를 쓰고 수동 동기화 오류가 발생
- 동일 데이터 변경이 하루 여러 차례 반복
- Ops와 Work 사이 상태 지연이 고객 경험을 손상
- 감사 가능한 Integration Log가 필요
- 세 번째 Platform이 동일 모델을 소비

## 9. 인증 분리 Trigger

다음 조건에서 `id-system`을 검토한다.

- Work와 Cafe 모두 실제 로그인 사용자가 존재
- 한 Member가 서비스 간 동일 Identity를 요구
- Role 회수와 접근 통제를 중앙에서 수행해야 함
- Organization 단위 권한이 필요
- 통합 감사 로그가 필요

그 전에는 OAuth Provider나 SSO 구조를 사실로 확정하지 않는다.

## 10. 보안과 개인정보 최소 기준

- Ops는 Public Search에서 차단
- 모든 Ops 접근은 인증과 Role 확인 필요
- Contract, Settlement, 개인 연락처는 Public Platform에 저장하지 않음
- 고객 Data Sample은 기본적으로 Ops에서도 원문 저장을 피하고 별도 승인 필요
- 공개 Profile은 Member가 필드별 공개 범위를 결정
- Evidence 공개 전 고객, Contributor, IP 조건 확인
- 로그에 Token, 비밀번호, 계약 원문, 개인정보를 남기지 않음
- 보존 기간과 삭제 절차는 실제 수집 전 확정

법률 검토가 필요한 항목:

- 직업소개사업 해당 여부
- 근로자공급·파견 해당 여부
- 외주·재위탁 계약
- 개인정보 처리와 국외 이전
- IP와 Contributor 보상
- 세무와 정산
- Delivery 책임과 하자 기준

