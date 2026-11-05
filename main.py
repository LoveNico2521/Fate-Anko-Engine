import webview
import os
import sys
import tkinter as tk
from tkinter import filedialog

class Api:
    def save_csv(self, csv_content, default_name):
        # 隱藏 root 視窗
        root = tk.Tk()
        root.withdraw()
        root.attributes("-topmost", True) # 讓視窗置頂

        # 彈出原生「另存新檔」視窗
        file_path = filedialog.asksaveasfilename(
            title="儲存織夢紀錄",
            initialfile=default_name,
            defaultextension=".csv",
            filetypes=[("CSV Files", "*.csv"), ("All Files", "*.*")]
        )
        
        root.destroy()

        if not file_path:
            return {"success": False, "canceled": True}

        try:
            # 寫入檔案 (因為開頭已經有 BOM，所以這裡強制用 utf-8-sig)
            with open(file_path, 'w', encoding='utf-8-sig', newline='') as f:
                f.write(csv_content)
            return {"success": True}
        except Exception as e:
            return {"success": False, "error": str(e)}

def get_resource_path(relative_path):
    try:
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")
    return os.path.join(base_path, relative_path)

if __name__ == '__main__':
    html_path = get_resource_path('dice_machine.html')
    api = Api()
    
    window = webview.create_window(
        title='織夢者菲特《Fate》',
        url=html_path,
        js_api=api, # 把 API 綁定到視窗
        width=1280,
        height=720,
        resizable=True,
        fullscreen=False
    )
    
    webview.start(debug=False)