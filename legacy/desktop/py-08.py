import webview
import os
import sys
import tkinter as tk
from tkinter import filedialog

class Api:
    def save_csv(self, csv_content, default_name):
        root = tk.Tk()
        root.withdraw()
        root.attributes("-topmost", True)

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
    
    # 提高最小高度至 768，避免視窗太矮時排版擠壓
    window = webview.create_window(
        title='織夢者菲特《Fate》',
        url=html_path,
        js_api=api,
        width=1400,
        height=850, 
        min_size=(1024, 768), # 這裡提高了最小高度喵！
        resizable=True,
        easy_drag=True,
        fullscreen=False
    )
    
    webview.start(debug=False)