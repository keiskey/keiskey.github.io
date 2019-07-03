# 基本
atomエディタのプレビュー以外は、svg要素にxmlns属性が必要。
```
<svg xmlns="http://www.w3.org/2000/svg">
```

## Data URI
```
data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" fill="red"/></svg>
```

# filter要素の参考
http://defghi1977.html.xdomain.jp/tech/svgMemo/svgMemo_11.htm

# XMLSerializer
## serializeToString
文字列の形にシリアライズされたサブツリーを返す。

```
new XMLSerializer().serializeToString(document);  // document配下をシリアライズ
```


XMLSerializer | MDN
https://developer.mozilla.org/ja/docs/XMLSerializer
XMLSerializer.serializeToString() - Web APIs | MDN
https://developer.mozilla.org/en-US/docs/Web/API/XMLSerializer/serializeToString
