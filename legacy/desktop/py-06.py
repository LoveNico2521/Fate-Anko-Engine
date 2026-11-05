from PIL import Image
img = Image.open("fate.png")
# 儲存為包含多種尺寸的 ico 檔，這樣工作列跟桌面看起來都會很清楚
img.save("fate.ico", format="ICO", sizes=[(256, 256), (128, 128), (64, 64), (32, 32), (16, 16)])