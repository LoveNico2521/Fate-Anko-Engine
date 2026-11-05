# 織夢者菲特《Fate》 - 安科劇情推演系統

菲特：「把命運，交給我吧。」

![版本](https://img.shields.io/badge/引擎版本-v43-5B8DEF) ![平台](https://img.shields.io/badge/平台-瀏覽器_·_Windows-4C9F70) ![離線](https://img.shields.io/badge/離線-完全可用-E8B93E)

**F.A.T.E.** = **F**ated **A**nko **T**ale **E**ngine（命定安科物語引擎）

一顆為安科／安價而生的骰子。整個系統就是**一個 HTML 檔**——不用安裝、不用連網，
瀏覽器打開，菲特就開始織。深色介面，手機也能滾。

## 第一次使用

1. 下載 `fate-anko-engine.html`
2. 雙擊打開（Chrome／Edge／Firefox／Safari 都行）
3. 選模式（ra／ro）、配骰數與 Boost，丟下去
4. 骰出觸發值就會連鎖——紀錄自動保存，要發文就匯出 CSV

## 她會做什麼

- **連鎖判定** — 骰出觸發值就一路滾下去，逐層展開（想停？骰子不同意）
- **ra / ro 雙模式** — 低於目標成功，或高於門檻成功，安科規則說了算
- **d4 到 d100** — 骰數、加值（Boost）自由配，1d100 有三種 Boost 演算法可以切
- **多組連鎖** — 一次一組不夠看？那就一次丟好幾組，自動標記第 N 組
- **織夢紀錄** — localStorage 幫你記著，重新整理也忘不掉
- **匯出 CSV** — 紀錄要拿去發文？打成包直接帶走

### 除錯

`debug-seq`：手動指定骰值序列、重現結果。開發用，玩家略過。

## 桌面版

```bash
pip install pywebview
python main.py
```

要打包成 exe 再說：`pyinstaller --onefile main.py`

## 支援範圍

- 現代瀏覽器皆可，完全離線；桌面版走 pywebview
- 織夢紀錄只存在你的瀏覽器 localStorage——清瀏覽器資料會連紀錄一起清掉
- 判定行為以你的團規為準，菲特只負責骰子，不負責吵架

## 檔案與文件

| 項目 | 說明 |
|---|---|
| `fate-anko-engine.html` | 全部。點開就能玩 |
| `main.py` | 桌面視窗版（pywebview） |
| `CHANGELOG.md` | 43 個版本怎麼長成現在這樣，逐版寫清楚 |
| `legacy/` | 開發考古層：43 個 HTML 迭代、9 個 Python、229 個片段，索引見 `legacy/manifest.json` |

## Roadmap

- ✅ **v43（現行）** — 連鎖引擎、ra／ro、三種 1d100 Boost、織夢紀錄、CSV 匯出
- 🔭 多組連鎖並行的 UI 可讀性優化
- 🔭 3D 骰子動畫平滑度
- 🔭 更多自訂 TRPG 規則
- 🔭 自動化歷史匯出

---

菲特誕生於主人與 AI 們的深夜對話，倉庫由露米（Lumi）照顧 🐾
