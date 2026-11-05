# 織夢者菲特《Fate》 - 安科劇情推演系統

> 倉庫描述：Dreamweaver Fate — Anke Story Deduction System

以《魔法少女奈葉》（Mahou Shoujo Lyrical Nanoha）角色**菲特·T·哈拉溫（Fate T. Harlaown）**
的衍生形象「織夢者菲特」為主題的連鎖骰子推演工具。整個系統是**單一 HTML 檔案**，
不需要安裝任何東西，瀏覽器打開就能用。深色介面、支援手機版排版，適合安科／安價
劇情創作時的檢定與連鎖判定。

## 功能特色

- **連鎖引擎（`rollChainEngine`）**：骰出觸發值自動進入連鎖判定，逐層展開推演
- **雙檢定模式**：`ra`（<= 目標值成功）／`ro`（>= 門檻成功）
- **骰種齊全**：d4 / d6 / d8 / d10 / d12 / d20 / d100，可調整骰數與加值（Boost）
- **多輪連鎖**：一次執行多組擲骰，自動標記「第 N 組連鎖」
- **歷史紀錄**：`localStorage` 自動保存，重新整理不消失，可一鍵清除
- **CSV 匯出**：匯出織夢紀錄（`exportHistoryToCSV`）
- **偵錯序列**：可手動指定骰值序列，重現特定推演結果

## 檔案說明

| 檔案 | 說明 |
|---|---|
| `fate-anko-engine.html` | **最新完整版**（對話第 43 次迭代，41.4 KB） |
| `main.py` | 桌面視窗模式（pywebview + tkinter 存檔對話框，最新迭代） |
| `legacy/` | **完整開發歷史存檔**（見下方說明） |

## 使用方式

### 直接使用（推薦）

雙擊 `fate-anko-engine.html` 以瀏覽器開啟即可，完全離線可用。

### 桌面視窗模式

```bash
pip install pywebview
python main.py
```

打包成單一 exe 後可發佈到 GitHub Releases（`pyinstaller --onefile main.py`）。

## legacy/ — 完整開發歷史

本專案由 DeepSeek 對話迭代產生，對話中共有 **43 個完整版 HTML**（2.3 KB 原型 →
41.4 KB 完整系統）、**9 個 Python 包裝迭代**、**229 個過程片段**，全部保存在
[`legacy/`](./legacy/)：

```
legacy/
├── full-versions/    v01.html ~ v43.html（依對話順序，v43 = 最新版）
├── desktop/          py-01.py ~ py-09.py（py-09 = 最新 main.py）
├── snippets/         229 個講解／修改過程片段
├── deepseek-readme-draft.md
├── manifest.json     全部區塊的順序與摘要
└── README.md
```

早期倉庫版本對應：v14 = 舊 v1、v15 = 舊 v2、v16 = 舊 v3、v17 = 舊 v4-final。
日常使用只需要根目錄的 `fate-anko-engine.html`，legacy 是完整的開發考古層。
