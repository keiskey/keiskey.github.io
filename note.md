# THREE.Shape
パスから点を使う場合は、実際の点と等間隔に抽出した点の二つを利用できる。
```
points = shape.createPointsGeometry()  # vertices from real points
spacedPoints = shape.createSpacedPointsGeometry(50)  # equidistance sampled points
```
実点を使うとカーブがきれいに出るので線を扱う時に向いている。
等距離点を使うと点描画がきれいにみえる。

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

# Bash
変更の確認
```
$ cd projects
$ for n in `ls`; do ( if [ -d $n ]; then { cd $n; pwd; git status; } fi; ) done
```
cdコマンドのため、サブシェル()で展開。
