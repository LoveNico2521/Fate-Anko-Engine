# 更新日誌（Change Log）

> 由 43 個歷史版本自動逐行比對產生（2026-11-06）。**v01 為最早版本，v43 為現行最新版**（根目錄 `fate-anko-engine.html`）。
> 對話分享頁沒有時間戳記，故以版本序號排列（新 → 舊）。行數統計為與前一版的逐行 diff。

版本對照：v14 = 舊 v1、v15 = 舊 v2、v16 = 舊 v3、v17 = 舊 v4-final。

---

## v43 — 最新版

- 大小：41511 → 41437 字元（-74）｜與 v42 diff：+7 −8 行
- 新增動畫：soft-drop
- 移除動畫：roll3d

---

## v42

- 大小：44083 → 41511 字元（-2572）｜與 v41 diff：+69 −132 行
- 移除動畫：spin-bounce、pop-in

---

## v41

- 大小：41604 → 44083 字元（+2479）｜與 v40 diff：+134 −72 行
- 新增動畫：spin-bounce、pop-in

---

## v40

- 大小：35046 → 41604 字元（+6558）｜與 v39 diff：+176 −7 行
- 新增函式：addHistory、renderHistory、copyHistory、exportHistoryToCSV
- 新增按鈕／事件：copyHistory

---

## v39

- 大小：40401 → 35046 字元（-5355）｜與 v38 diff：+36 −172 行
- 移除函式：addHistory、renderHistory、copyHistory、exportHistoryToCSV
- 移除按鈕／事件：copyHistory

---

## v38

- 大小：41081 → 40401 字元（-680）｜與 v37 diff：+20 −35 行
- 變更線索：…<!-- 1d100 Boost 模式切換 (加入 v3) -->…
- 變更線索：…<option value="v1">v1: 降面 1d(100-Boost) …
- 變更線索：…<option value="v2">v2: 原始 1d100 + Boost<…

---

## v37

- 大小：40628 → 41081 字元（+453）｜與 v36 diff：+27 −17 行
- 變更線索：…<option value="v3">v3: 降面 1d(100-|Boost|…
- 變更線索：…// 正 Boost 加值，負 Boost 不減值（僅降面）…
- 變更線索：…// 動態偵測差值，如果沒有增減就不加括號…

---

## v36

- 大小：10475 → 40628 字元（+30153）｜與 v35 diff：+704 −3 行
- 新增函式：showToast、askClearHistory、hideConfirm、safeGet、safeSet、loadSettings、saveSettings、saveHistory、setCheckMode、adjustCount、adjustBoost、playAnimation、getRnd、rollChainEngine、getDieType、renderBadges、renderFlow、renderTotalSum、copyTotalSum、executeRoll、addHistory、renderHistory、copyHistory、exportHistoryToCSV
- 新增按鈕／事件：exportHistoryToCSV、askClearHistory、hideConfirm、copyTotalSum、copyHistory

---

## v35

- 大小：40361 → 10475 字元（-29886）｜與 v34 diff：+0 −693 行
- 移除函式：showToast、askClearHistory、hideConfirm、safeGet、safeSet、loadSettings、saveSettings、saveHistory、setCheckMode、adjustCount、adjustBoost、playAnimation、getRnd、rollChainEngine、getDieType、renderBadges、renderFlow、renderTotalSum、copyTotalSum、executeRoll、addHistory、renderHistory、copyHistory、exportHistoryToCSV
- 移除按鈕／事件：exportHistoryToCSV、askClearHistory、hideConfirm、copyTotalSum、copyHistory

---

## v34

- 大小：40400 → 40361 字元（-39）｜與 v33 diff：+7 −10 行
- 變更線索：…<!-- 1d100 Boost 模式切換 -->…
- 變更線索：…<option value="v2">v2: 原始 1d100 + Boost …
- 變更線索：…// v3 沒有 CF，其餘依照 raw <= 5 判定…

---

## v33

- 大小：40383 → 40400 字元（+17）｜與 v32 diff：+23 −22 行
- 變更線索：…<!-- 1d100 Boost 模式切換 (加入 v3) -->…
- 變更線索：…<option value="v1">v1: 降面 1d(100-Boost) …
- 變更線索：…<option value="v3">v3: 降面 1d(100-Boost) …

---

## v32

- 大小：39192 → 40383 字元（+1191）｜與 v31 diff：+33 −9 行
- 變更線索：…<!-- 新增：1d100 Boost 模式切換 -->…
- 變更線索：…<label class="block text-xs font-medium …
- 變更線索：…<option value="v2">v2: 原始 1d100 + Boost<…

---

## v31

- 大小：39165 → 39192 字元（+27）｜與 v30 diff：+3 −2 行
- 變更線索：…// === 自動複製公式 (無 Boost 則無括號，總和也無括號) ===…
- 變更線索：…// 這裡拔掉了總和的括號…

---

## v30

- 大小：39162 → 39165 字元（+3）｜與 v29 diff：+4 −4 行
- 變更線索：…<!-- 自動複製開關 -->…
- 變更線索：…// === 自動複製公式 (無 Boost 則無括號) ===…

---

## v29

- 大小：37504 → 39162 字元（+1658）｜與 v28 diff：+39 −5 行
- 變更線索：…/* 🌟 霓虹脈衝動畫 🌟 */…
- 變更線索：…<!-- 自動複製開關 (新增) -->…
- 變更線索：…<label class="text-xs font-bold text-sla…

---

## v28

- 大小：35226 → 37504 字元（+2278）｜與 v27 diff：+63 −7 行
- 新增函式：copyTotalSum
- 新增按鈕／事件：copyTotalSum
- 新增動畫：glow-green、glow-red、glow-purple

---

## v27

- 大小：35227 → 35226 字元（-1）｜與 v26 diff：+1 −1 行
- 變更線索：…stackBadge = `<span class="px-2 py-1 bg-…

---

## v26

- 大小：35261 → 35227 字元（-34）｜與 v25 diff：+4 −5 行
- 變更線索：…<!-- 🧪 隱藏式測試序列 (移除 mt-auto，讓它緊跟在後面) -->…
- 變更線索：…stackBadge = `<span class="px-2 py-1 bg-…

---

## v25

- 大小：35262 → 35261 字元（-1）｜與 v24 diff：+1 −1 行
- 標題：「織夢者��特《Fate》 - 劇情推演系統」→「織夢者菲特《Fate》 - 劇情推演系統」

---

## v24

- 大小：35210 → 35262 字元（+52）｜與 v23 diff：+7 −6 行
- 標題：「織夢者菲特《Fate》 - 劇情推演系統」→「織夢者��特《Fate》 - 劇情推演系統」

---

## v23

- 大小：36177 → 35210 字元（-967）｜與 v22 diff：+5 −30 行
- 變更線索：…<!-- 左側：控制與參數設定欄 (已改為 gap-4，取消 justify-b…
- 變更線索：…<!-- 🧪 隱藏式測試序列 (固定在最底部) -->…

---

## v22

- 大小：36538 → 36177 字元（-361）｜與 v21 diff：+22 −34 行
- 變更線索：…<!-- 🧪 隱藏式測試序列 (移至底部) -->…
- 變更線索：…<span>🧪 測試序列 (Debug)</span>…
- 變更線索：…<span class="text-[9px] text-fuchsia-600…

---

## v21

- 大小：36536 → 36538 字元（+2）｜與 v20 diff：+1 −1 行
- 變更線索：…if (s.outcome === '大���功') stepBg = 'bg-…

---

## v20

- 大小：30988 → 36536 字元（+5548）｜與 v19 diff：+222 −99 行
- 新增函式：showToast、askClearHistory、hideConfirm、renderBadges、renderFlow、renderTotalSum、copyHistory
- 移除函式：clearHistory
- 新增按鈕／事件：askClearHistory、hideConfirm、copyHistory
- 移除按鈕／事件：clearHistory

---

## v19

- 大小：30990 → 30988 字元（-2）｜與 v18 diff：+1 −1 行
- 變更線索：…<span class="text-[10px] text-fuchsia-30…

---

## v18

- 大小：30382 → 30990 字元（+608）｜與 v17 diff：+30 −13 行
- 變更線索：…<span class="text-[10px] text-fuchsia-30…
- 變更線索：…// === 修改後的 CSV 匯出功能 ===…
- 變更線索：…// 判斷是否在 Pywebview EXE 環境中…

---

## v17（舊 v4-final.html）

- 大小：29871 → 30382 字元（+511）｜與 v16 diff：+18 −12 行
- 變更線索：…<!-- 🧪 隱藏式測試序列 (折疊選單) -->…
- 變更線索：…<span>🧪 測試序列 (Debug)</span>…
- 變更線索：…<span class="text-[9px] text-fuchsia-600…

---

## v16（舊 v3.html）

- 大小：28017 → 29871 字元（+1854）｜與 v15 diff：+45 −10 行
- 新增函式：getRnd

---

## v15（舊 v2.html）

- 大小：2294 → 28017 字元（+25723）｜與 v14 diff：+556 −1 行
- 新增函式：safeGet、safeSet、loadSettings、saveSettings、saveHistory、setCheckMode、adjustCount、adjustBoost、playAnimation、rollChainEngine、getDieType、executeRoll、addHistory、clearHistory、renderHistory、exportHistoryToCSV
- 新增按鈕／事件：adjustCount、adjustBoost、setCheckMode、executeRoll、exportHistoryToCSV、clearHistory

---

## v14（舊 v1.html）

- 大小：27470 → 2294 字元（-25176）｜與 v13 diff：+1 −540 行
- 移除函式：safeGet、safeSet、loadSettings、saveSettings、saveHistory、setCheckMode、adjustCount、adjustBoost、playAnimation、rollChainEngine、getDieType、executeRoll、addHistory、clearHistory、renderHistory、exportHistoryToCSV
- 移除按鈕／事件：adjustCount、adjustBoost、setCheckMode、executeRoll、exportHistoryToCSV、clearHistory

---

## v13

- 大小：26069 → 27470 字元（+1401）｜與 v12 diff：+38 −5 行
- 變更線索：…<!-- 新增：本輪總和顯示區 (放在歷史紀錄上方) -->…
- 變更線索：…<!-- 內容會由 JS 動態生成 -->…
- 變更線索：…const totalSummary = document.getElement…

---

## v12

- 大小：26016 → 26069 字元（+53）｜與 v11 diff：+10 −13 行
- 標題：「《Fate》安科織夢機 - 劇情推演系統」→「織夢者菲特《Fate》 - 劇情推演系統」

---

## v11

- 大小：24706 → 26016 字元（+1310）｜與 v10 diff：+46 −14 行
- 變更線索：…// === 生成日誌詳細軌跡 ===…
- 變更線索：…if (s.outcome === '大成功') str += '✨';…
- 變更線索：…if (s.outcome === '大失敗') str += '💥';…

---

## v10

- 大小：23985 → 24706 字元（+721）｜與 v09 diff：+50 −25 行
- 新增函式：safeGet、safeSet

---

## v09

- 大小：23987 → 23985 字元（-2）｜與 v08 diff：+1 −1 行
- 變更線索：…<span class="text-[9px] text-slate-500 f…

---

## v08

- 大小：23961 → 23987 字元（+26）｜與 v07 diff：+19 −19 行
- 標題：「《Fate》安科骰娘 - 劇情推演系統」→「《Fate》安科織夢機 - 劇情推演系統」

---

## v07

- 大小：23949 → 23961 字元（+12）｜與 v06 diff：+23 −27 行
- 標題：「《Fate》TRPG 全螢幕寫作檢定系統」→「《Fate》安科骰娘 - 劇情推演系統」

---

## v06

- 大小：23773 → 23949 字元（+176）｜與 v05 diff：+52 −30 行
- 標題：「Fate - TRPG 寫作檢定系統」→「《Fate》TRPG 全螢幕寫作檢定系統」

---

## v05

- 大小：23966 → 23773 字元（-193）｜與 v04 diff：+32 −55 行
- 標題：「TRPG 全螢幕寫作檢定系統」→「Fate - TRPG 寫作檢定系統」

---

## v04

- 大小：22082 → 23966 字元（+1884）｜與 v03 diff：+85 −18 行
- 新增函式：loadSettings、saveSettings、saveHistory

---

## v03

- 大小：20840 → 22082 字元（+1242）｜與 v02 diff：+44 −11 行
- 新增函式：exportHistoryToCSV
- 新增按鈕／事件：exportHistoryToCSV
- 標題：「我們的問題 - 16:9 全螢幕寫作檢定系統」→「TRPG 全螢幕寫作檢定系統」

---

## v02

- 大小：20973 → 20840 字元（-133）｜與 v01 diff：+77 −119 行
- 變更線索：…<!-- 修正：拿掉強制 height，改用 min-h-screen 讓手機可…
- 變更線索：…<!-- 主容器：電腦版維持 16:9，手機版自動變高 -->…
- 變更線索：…《我們的問題》寫作檢定系統…

---

## v01

- 最初原型：20973 字元，447 行
- 內容：單檔 HTML，含連鎖擲骰引擎（`rollChainEngine`）與 我們的問題 - 16:9 全螢幕寫作檢定系統

---

## 桌面包裝（`legacy/desktop/`）

> pywebview 視窗包裝的迭代，py-09 = 現行 `main.py`。

### py-09（= 現行 main.py）

- 大小：1475 → 1465 字元｜+4 −4 行
- 變更線索：…# 預設視窗改為 1600x900，最小高度設為 850…

### py-08

- 大小：1511 → 1475 字元｜+3 −4 行
- 變更線索：…# 提高最小高度至 768，避免視窗太矮時排版擠壓…
- 變更線索：…min_size=(1024, 768), # 這裡提高了最小高度喵！…

### py-07

- 大小：183 → 1511 字元｜+57 −4 行
- 變更線索：…title="儲存織夢紀錄",…
- 變更線索：…# easy_drag=True 允許在網頁空白處按住拖曳視窗…
- 變更線索：…# min_size=(1024, 576) 限制視窗不能縮得太小，避免排版跑掉…

### py-06

- 大小：147 → 183 字元｜+1 −0 行
- 變更線索：…# 儲存為包含多種尺寸的 ico 檔，這樣工作列跟桌面看起來都會很清楚…

### py-05

- 大小：1510 → 147 字元｜+3 −57 行
- （無實質內容差異）

### py-04

- 大小：1493 → 1510 字元｜+5 −4 行
- 變更線索：…# 寫入檔案 (使用 utf-8-sig 避免 Excel 亂碼)…
- 變更線索：…# 1400x787 是接近 16:9 的比例，適合大多數筆電…

### py-03

- 大小：735 → 1493 字元｜+33 −7 行
- 變更線索：…# 隱藏 root 視窗…
- 變更線索：…root.attributes("-topmost", True) # 讓視窗置…
- 變更線索：…# 彈出原生「另存新檔」視窗…

### py-02

- 大小：700 → 735 字元｜+13 −9 行
- 變更線索：…""" 確保打包成 exe 後，能找到 HTML 檔案的路徑 """…
- 變更線索：…# PyInstaller 打包後會把檔案解壓縮到 _MEIPASS 資料夾…
- 變更線索：…# 取得 HTML 的絕對路徑…

### py-01（= 現行 main.py 前身…）
- 最初包裝：700 字元

---

*本檔案由 diff 自動產生；「變更線索」為無函式級差異時摘錄的新增中文行。*
