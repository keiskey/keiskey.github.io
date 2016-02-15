root index.

index.html link to index project.  
`/index.html` >> `/index/index.html`

# npm
`$npm_package_`にキー名をつなげることで値を参照できる。
```
  "name": "index",
  "config": {
    "key": "value"
  },
  "scripts": {
    "echo": "echo $npm_package_name, $npm_package_config_key"  // index, value
  }
```

`--`で引数を区切ると、コマンドへオプションを渡せる。
```
scripts:
  ls: "ls"
  list: "npm run ls -- -al"  // lsに-alオプションを渡す。
```

コマンドには、preとpostも設定可能。
```
command: "…"
precommand: "commandの前に実行される。"
postcommand: "commandの後に実行される。"
```

# jade
http://jade-lang.com/command-line/  
jade [options] [output] [input]  
jade --watch(w) --pretty(P) --obj(O) __options-json__ --out(o) __output-dir__ __input-path__
```
jade -wPO jade/config.json -o . jade/
```

# coffee-script
http://coffeescript.org/
coffee [options] [output] [input]  
coffee --watch(w) --output(o) __output-dir__ --compile(c) __input-dir__
```
coffee -wo js/ coffee/
```
cオプションの記述は省略可能。
