    window = webview.create_window(
        title='織夢者菲特《Fate》',
        url=html_path,
        js_api=api,
        width=1400,
        height=850, # 略微调整高度以更好地适配 16:9
        min_size=(1024, 768), # 增加最小高度
        resizable=True,
        easy_drag=True,
        fullscreen=False
    )