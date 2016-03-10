# MouseEventのカスタムイベント
```
  event = new MouseEvent "mousewheel"
  event.wheelDelta = 40
  domElement.dispatchEvent event

  # domElement.addEventListener "mousewheel", (event) -> console.log event
```

## dat.GUI
```
  zoom =
    event: new MouseEvent "mousewheel"
    detail: 40
    zoom: (detail) ->
      this.event.wheelDelta = detail
      renderer.domElement.dispatchEvent this.event
    in: -> this.zoom this.detail
    out: -> this.zoom -this.detail
  guiZoom = gui.addFolder "Zoom"
  guiZoom.open()
  guiZoom.add(zoom, "detail", 0, 200).name "detail"
  guiZoom.add(zoom, "in").name "zoom-in"
  guiZoom.add(zoom, "out").name "zoom-out"
```

# iframe
iframeを直接指定すると、そのwindowが取れる。
documentからは、contentWindowで指定できる。
- html
```
  <iframe id="module" src="module.html" />
```
- module script (src)
```
  window.log = function(arg) { console.log(arg); };
```
- main script
```
  // idからwindowを直接参照
  main.log("abc");  // abc

  // documentからcontentWindow経由で参照
  document.getElementById("main").contentWindow.log("def");  // def
```
