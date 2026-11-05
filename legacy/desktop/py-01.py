import webview
import os
import sys

def get_resource_path(relative_path):
    """ Get absolute path to resource, works for dev and for PyInstaller """
    try:
        # PyInstaller creates a temp folder and stores path in _MEIPASS
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")

    return os.path.join(base_path, relative_path)

if __name__ == '__main__':
    html_file = get_resource_path('dice_machine.html')
    # Create a window with a title and size
    webview.create_window(
        title='織夢者菲特《Fate》',
        url=html_file,
        width=1280,
        height=720,
        resizable=True,
        fullscreen=False
    )
    webview.start()