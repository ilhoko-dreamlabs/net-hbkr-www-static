# HBKR.NET static landing

HBKR의 기본 랜딩페이지와 GitHub Pages 배포 설정을 담은 독립 정적 사이트입니다.

## Positioning

```text
AI/AX Project Execution Network
```

HBKR은 AI/AX 과제를 가진 조직과 검증 가능한 실행자를 연결해 과제 정의, 팀 구성, 구현, 검증까지 이어가는 실행 네트워크를 지향합니다.

초기에는 자동 매칭보다 운영자 주도의 Discovery와 Team Design으로 실제 프로젝트 데이터를 확보합니다. Community, Learn, Lab은 실행자 발굴과 Evidence 생성을 위한 기반이며, `캠핑하는 프로그래머`는 첫 번째 Vertical Field Lab입니다.

## Structure

```text
index.html                  Landing page
architecture.html           Public service architecture preview
styles.css                 Responsive visual system
app.js                     Navigation and reveal behavior
404.html                   GitHub Pages 404
assets/hbkr-mark.svg       Temporary HBKR mark
CNAME                      Canonical GitHub Pages custom domain
sitemap.xml                Public landing sitemap
.github/workflows/         GitHub Pages deployment
```

## Architecture documents

HBKR 전체 서브도메인과 저장소 계획의 공식 기준선은 다음 문서에서 관리합니다.

- [`docs/00_ARCHITECTURE_INDEX.md`](docs/00_ARCHITECTURE_INDEX.md): 문서 인덱스와 전체 구조
- [`docs/01_SERVICE_MAP.md`](docs/01_SERVICE_MAP.md): 서브도메인·저장소·서비스 지도
- [`docs/02_PRODUCT_BOUNDARIES.md`](docs/02_PRODUCT_BOUNDARIES.md): 제품 책임과 핵심 URL
- [`docs/03_DATA_AND_INTEGRATION.md`](docs/03_DATA_AND_INTEGRATION.md): 데이터 소유권과 연동 원칙
- [`docs/04_REVENUE_FIRST_ROADMAP.md`](docs/04_REVENUE_FIRST_ROADMAP.md): 수익 우선 구축 로드맵
- [`docs/05_REPOSITORY_STANDARD.md`](docs/05_REPOSITORY_STANDARD.md): 저장소 공통 표준
- [`docs/06_DECISIONS_AND_OPEN_QUESTIONS.md`](docs/06_DECISIONS_AND_OPEN_QUESTIONS.md): 확정 결정과 미결정 사항

## Local preview

별도 build 과정은 없습니다.

```bash
python -m http.server 4173
```

브라우저에서 `http://localhost:4173`을 엽니다.

## Deployment

`main` 브랜치에 push하면 GitHub Actions가 정적 파일을 GitHub Pages에 배포합니다.

Production URL은 `https://www.hbkr.net/`입니다. GitHub Pages custom domain과 HTTPS가 활성화되어 있고 `CNAME` 파일로 저장소 기준선을 유지합니다. 루트 `hbkr.net` Redirect와 다른 Subdomain DNS는 아직 구성하지 않았습니다.

## Current scope

- Informational landing only
- AI/AX project and practitioner entry paths
- Manual-first operating model
- Evidence-based capability concept
- No member account or database
- No application or project request form
- No matching engine
- No payment or contract workflow

확정되지 않은 프로그램, 혜택, 상업 조건은 사이트에서 사실처럼 표시하지 않습니다.
