import webview
import os
import sys

def get_resource_path(relative_path):
    """ 確保打包成 exe 後，能找到 HTML 檔案的路徑 """
    try:
        # PyInstaller 打包後會把檔案解壓縮到 _MEIPASS 資料夾
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")
    return os.path.join(base_path, relative_path)

if __name__ == '__main__':
    # 取得 HTML 的絕對路徑
    html_path = get_resource_path('dice_machine.html')
    
    # 創建視窗 (可以自己改寬高、標題)
    window = webview.create_window(
        title='織夢者菲特《Fate》',
        url=html_path,
        width=1280,
        height=720,
        resizable=True,
        fullscreen=False,
        easy_drag=False # 這是 pywebview 的參數，通常保持 false 即可
    )
    
    # 啟動視窗
    webview.start(debug=False)