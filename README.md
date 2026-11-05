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
| `v4-final.html` | **最新完整版**（644 行），日常使用請開這個 |
| `v1.html` ~ `v3.html` | 開發過程中的迭代版本，留作參考 |
| `main.py` | 桌面視窗模式（pywebview + tkinter 存檔對話框） |
| `run_webview_v1.py` / `run_webview_v2.py` | 舊版簡易啟動器 |
| `exportHistoryToCSV.js` | CSV 匯出函式獨立參考副本（已內建於 v4-final.html） |

## 使用方式

### 直接使用（推薦）

雙擊 `v4-final.html` 以瀏覽器開啟即可，完全離線可用。

### 桌面視窗模式

```bash
pip install pywebview
python main.py
```

## 開發沿革

本專案由 DeepSeek 對話迭代產生，四個版本的完整快照都保留在倉庫中：

1. **v1**（2.4 KB）— 初版原型
2. **v2**（29 KB）— 加入完整樣式與歷史紀錄
3. **v3**（31 KB）— 總和計算與連鎖顯示強化
4. **v4**（31.6 KB）— 加入 CSV 匯出、詳情摺疊面板，為目前最終版
