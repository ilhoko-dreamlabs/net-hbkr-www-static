# HBKR.NET static landing

HBKR의 기본 랜딩페이지와 GitHub Pages 배포 설정을 담은 독립 정적 사이트입니다.

## Message

```text
Learn. Build. Prove. Work.
```

HBKR은 AI를 배우고, 만들고, 실제 사용자와 현장에서 검증하며, Evidence를 실제 프로젝트로 연결하는 AI Builder / Project Community를 지향합니다.

`캠핑하는 프로그래머`는 HBKR의 첫 번째 Vertical Community + Field Lab입니다.

## Structure

```text
index.html                  Landing page
styles.css                 Responsive visual system
app.js                     Navigation and reveal behavior
404.html                   GitHub Pages 404
assets/hbkr-mark.svg       Temporary HBKR mark
.github/workflows/         GitHub Pages deployment
```

## Local preview

별도 build 과정은 없습니다.

```bash
python -m http.server 4173
```

브라우저에서 `http://localhost:4173`을 엽니다.

## Deployment

`main` 브랜치에 push하면 GitHub Actions가 정적 파일을 GitHub Pages에 배포합니다.

커스텀 도메인은 아직 연결하지 않았습니다. `www.hbkr.net` DNS를 연결할 때 GitHub Pages 설정과 `CNAME` 파일을 함께 추가합니다.

## Current scope

- Informational landing only
- No member account or database
- No application or project request form
- No matching engine
- No payment or contract workflow

확정되지 않은 프로그램, 혜택, 상업 조건은 사이트에서 사실처럼 표시하지 않습니다.
