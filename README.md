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

linkコマンドを使うと、ローカルインストールしたモジュールのリンクが`/usr/local/lib/node_modules`に作成され、コマンドとして利用可能になる。
```
scripts:
  "postinstall": "npm link coffee-script jade markdown stylus"
```
postinstallで、インストール後に自動実行する。

# jade
http://jade-lang.com/command-line/  
jade --watch(w) --pretty(P) --obj(O) __options-json__ --out(o) __output-dir__ __input-path__
```
jade -wPO jade/config.json -o . jade/
```

# stylus
http://stylus-lang.com/docs/executable.html  
stylus --watch(w) --use(u) __plug-in__ --out(o) __output-dir__ __input-dir__
```
stylus -w -u nib -o css/ stylus/
```
オプションの結合は不可。

# coffee-script
http://coffeescript.org/  
coffee --watch(w) --output(o) __output-dir__ --compile(c) __input-dir__
```
coffee -wo js/ coffee/
```
cオプションの記述は省略可能。
