# Proxy

Proxy routing and rewrite rules for Surge, QuantumultX, Loon, and Stash.

## Rules

Domain/IP routing rules located in `Rules/`.

| File | Description |
|------|-------------|
| `Proxy.list` | General domains routed through proxy |
| `ProxyIP.list` | IP ranges routed through proxy |
| `CN.list` | China mainland domains (direct) |
| `DirectIP.list` | IP ranges for direct connection |
| `Reject.list` | Ad/tracker domains to block |
| `Reject-TinyGIF.list` | Ad domains returning a transparent GIF |
| `AI.list` | AI services (OpenAI, Anthropic, etc.) |
| `Academic.list` | Academic/research sites |
| `Streaming.list` | Streaming media (Netflix, Spotify, etc.) |
| `Download.list` | Download services |
| `Residential.list` | Residential proxy domains |
| `WhiteList.list` | Whitelist (always direct) |
| `HK.list` | Hong Kong region |
| `TW.list` | Taiwan region |
| `JP.list` | Japan region |
| `KR.list` | Korea region |
| `SG.list` | Singapore region |
| `US.list` | US region |
| `Crypto.list` | Cryptocurrency services |

## Rewrites

### Surge (`Rewrite/Surge/`)

| Module | Description |
|--------|-------------|
| `Google.sgmodule` | Redirect google.cn to google.com |
| `AppleSupport.sgmodule` | Redirect support.apple.com/zh-xx to zh-cn |
| `PythonDocs.sgmodule` | Redirect docs.python.org to zh-cn |
| `Wikipedia.sgmodule` | Redirect zh.wikipedia.org to zh-cn |
| `Wikiwand.sgmodule` | Redirect wikipedia.org to Wikiwand |
| `BiliBili.sgmodule` | BiliBili daily check-in |
| `BaiduTieba.sgmodule` | Baidu Tieba daily check-in |
| `SFExpress.sgmodule` | SF Express daily check-in |

### QuantumultX (`Rewrite/QuantumultX/`)

| File | Description |
|------|-------------|
| `bilibili.qxrewrite` | BiliBili live check-in |
| `neteasemusic.qxrewrite` | NetEase Music check-in |
| `sfexpress.qxrewrite` | SF Express check-in |
| `smzdm.qxrewrite` | SMZDM check-in |
| `manmanbuy.qxrewrite` | Manmanbuy check-in |
| `qunar.qxrewrite` | Qunar check-in |
| `v2ex.qxrewrite` | V2EX check-in |
| `videoqq.qxrewrite` | QQ Video check-in |
| `ximalaya.qxrewrite` | Ximalaya check-in |
| `xdrs.qxrewrite` | Xdrs rewrite |

### Loon (`Rewrite/Loon/`)

| File | Description |
|------|-------------|
| `google.plugin` | Redirect google.cn and related domains to google.com |

### Stash (`Rewrite/Stash/`)

| File | Description |
|------|-------------|
| `Wikipedia.stoverride` | Wikipedia redirect |

## Third-Party Surge Modules

Notes on third-party Surge modules encountered outside this repo.

### Not Recommended

| Module | Source | Reason |
|--------|--------|--------|
| AllInOne | [AllInOne_Mock.sgmodule](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rewrite/Surge/AllInOne/AllInOne_Mock.sgmodule) | Breaks Spotify connectivity |
| AdvertisingLite | [AdvertisingLite.sgmodule](https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rewrite/Surge/AdvertisingLite/AdvertisingLite.sgmodule) | Breaks Spotify connectivity |
