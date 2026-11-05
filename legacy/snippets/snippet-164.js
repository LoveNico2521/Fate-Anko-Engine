妮亞/接下來的 AI 助手你好，請載入以下「織夢者菲特《Fate》」安科骰娘 APP 的完整開發上下文，並準備好協助我進行後續維護。

## 🎲 專案概述
這是一個專為 TRPG 安科 (Anko) 寫作設計的專屬骰娘系統。前端使用 HTML + TailwindCSS + Vanilla JS 寫成單一檔案，後端使用 Python (pywebview + pyinstaller) 打包成 Windows `.exe` 桌面應用程式，並配有專屬 Icon (Fate Testarossa)。

## ⚙️ 核心規則邏輯
1. **雙檢定模式**：支援 `ra` (<= 目標值) 與 `ro` (>= 目標值) 判定。
2. **起手與追擲**：
   - 1d100：1~5 觸發進階 1d10 追擲；96~100 觸發大成功 (CS) 並推進層級。
   - 1d10：骰出 10 時進行 1d2 判定（1d2=1 為大成功 CS；1d2=2 為大失敗 CF）。
3. **基準向量堆疊 (Baseline Vector Stack)**：
   - 第一個出現的 1d2 結果作為「基準 (initialChainOutcome)」。
   - 後續連鎖：與基準同向 ➔ 深入 (+1 Level)；與基準反向 ➔ 退回 (-1 Level) 並抵銷淨 Stack。
   - 當淨 Stack 歸零且退回 s0 時，顯示 0 Stacks。

## 🛠️ 當前已實作功能與優化
- **UI/UX**：單一視窗、禁用右鍵與文字反白（除了輸入框）、已拔除 `aspect-video` 避免視窗變形、`min-h` 設定。
- **效能與重構**：已將渲染邏輯重構成獨立函式 (`renderBadges`, `renderFlow`, `renderTotalSum`)，並加入了 CSS `content-visibility: auto` 虛擬滾動優化歷史紀錄。已拔除 0.45 秒的防連點鎖定。
- **加總系統**：新增「本輪總和」，只計算初始骰子，觸發連鎖的骰子會以琥珀色標示，並附註「不含觸發骰」的數值。
- **歷史紀錄**：點擊歷史紀錄可一鍵複製到剪貼簿（包含自訂 Toast 提示）。限制最多保留 200 筆。支援匯出 CSV（在 EXE 環境中透過 JS 呼叫 Python API 開原生存檔視窗；在瀏覽器中則走 Blob 下載）。
- **測試序列 (Debug)**：已隱藏在左側最底部的折疊選單中，可用逗號輸入如 `96, 10, 1` 來強制指定骰子結果。

## 💻 當前程式碼架構
1. `dice_machine.html`：包含所有的 HTML 版面、Tailwind 樣式、自訂彈窗、Toast 以及核心連鎖引擎與渲染邏輯。
2. `main.py`：使用 `pywebview` 建立視窗（設定了 `min_size=(1024, 850)`, `easy_drag=True`），並包含一個 `save_csv` 的 API 類別，使用 `tkinter` 彈出原生存檔視窗。

(接下來我會貼上最新的 HTML 與 Python 程式碼)

請確認你已完全理解上述邏輯、架構與已知的 UI 調整，隨時準備好接收程式碼並幫我進行下一步的修改喵！