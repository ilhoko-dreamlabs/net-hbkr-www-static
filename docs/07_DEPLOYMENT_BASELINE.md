# WWW Deployment Baseline

## 1. Production surface

| Item | Current value |
|---|---|
| Canonical URL | `https://www.hbkr.net/` |
| Hosting | GitHub Pages |
| Repository | `ilhoko-dreamlabs/net-hbkr-www-static` |
| Production branch | `main` |
| Deployment | GitHub Actions Pages workflow |
| HTTPS | Enforced |

## 2. DNS baseline

현재 확인된 레코드:

```text
www.hbkr.net CNAME ilhoko-dreamlabs.github.io
```

Repository의 `CNAME` 파일에도 `www.hbkr.net`을 기록해 배포와 Domain 기준선을 일치시킨다.

현재 루트 `hbkr.net`에는 GitHub Pages를 향한 A/AAAA 레코드가 없다. 따라서 다음은 아직 완료된 것으로 간주하지 않는다.

- `https://hbkr.net` 직접 접속
- `hbkr.net`에서 `www.hbkr.net`으로의 Redirect
- 루트 도메인 HTTPS

루트 도메인 연결은 DNS Owner가 별도로 결정하고 GitHub Pages의 공식 Apex Domain 지침에 따라 구성한다.

## 3. Public artifact allowlist

Pages에는 다음 파일만 배포한다.

```text
index.html
architecture.html
404.html
styles.css
app.js
site.webmanifest
robots.txt
sitemap.xml
CNAME
.nojekyll
assets/
```

다음은 Public Pages Artifact에 포함하지 않는다.

- `docs/`
- `README.md`
- `CHANGELOG.md`
- `.github/`
- `.git/`
- 운영 정보와 Source Map

Architecture 페이지는 직접 URL로 검토할 수 있지만 `noindex, nofollow`를 유지한다.

## 4. Deployment checks

Workflow는 배포 후 다음을 확인한다.

- `https://www.hbkr.net/` 응답과 Landing Title
- `https://www.hbkr.net/architecture.html` 응답과 Architecture Title
- `docs/00_ARCHITECTURE_INDEX.md`가 Public URL에서 `404`인지 확인

## 5. Rollback

1. GitHub에서 마지막 정상 Commit을 확인한다.
2. 변경을 되돌리는 새 Commit을 `main`에 Push한다.
3. Pages workflow 성공을 확인한다.
4. Landing, Architecture, Internal Docs 404를 재검증한다.

History를 파괴하는 강제 Reset이나 이미 배포된 Commit Amend를 사용하지 않는다.

## 6. Ownership boundary

- DNS 변경: Domain Owner 책임
- GitHub Pages custom domain: Repository Owner 책임
- Site source와 workflow: `net-hbkr-www-static` 책임
- 각 하위 Subdomain: 해당 저장소가 생성된 이후 별도 배포 책임 확정

`work`, `ops`, `cafe`, `lab`, `learn`, `api`, `id`, `status` DNS는 아직 생성하지 않는다.
