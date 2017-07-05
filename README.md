root index.

index.html link to index project.  
`/index.html` >> `/index/index.html`

# project
- プロジェクトディレクトリ作成。
- githubにrepository作成。
- submoduleとしてルートに追加。`projects$ git submodule add <repository> <directory>` _（directoryを省略するとconfigには追加されない）_
- indexのpackage.orig.jsonをpackage.jsonとしてハードリンクを張る。（ハードリンクはiノードを参照するので、元ファイルが消えてもアクセス可能。
- node_modulesの追加。`npm install`

## 新規作成
```
  # ディレクトリ作成と移動
  mkdir <project> && cd $_

  # リポジトリを登録
  git init  # ローカルリポジトリの生成
  git remote add origin <repository>  # リモートリポジトリの登録（https://github.om/keiskey/<project>.git

  # masterに最初のコミットをする
  touch README.md
  git add README.md
  git commit -m 'initial'  # 一度コミットすると、git branchにmasterが表示されるようになる。
  git push  # git push -u origin master
  # 一度プッシュすると、`git branch -r`でorigin/masterが表示されるようになる。

  # branchが反映されるので確認。
  git branch -r  # リモートブランチの確認

  # ブランチを作成（いずれか
  # git branch <new-branch>  # リモートブランチと同名でローカルブランチを作成
  # git branch <new-branch> <remote-branch>  # 別名でローカルブランチを作成
  # git checkout -b <new-branch>  # ブランチを作成してチェックアウトする

  # データを取得
  # git checkout <new-branch>  # チェックアウト
  # git pull

  # ページの公開方法 その1 gh-pagesブランチを作成する
  # gh-pagesブランチを作成してチェックアウトする
  git checkout -b gh-pages
  git push
  # githubのSettingsでDefault brancheを更新しておく。
  # --
  # ページの公開方法 その2 docsディレクトリを作成する（masterブランチ）

  # submoduleとして登録する
  cd ../  # ルートディレクトリに移動
  git submodule add <repository> <project>

  # package.jsonをリンクしてインストール
  ln index/package.orig.json <project>/package.json  # ハードリンク
  cd <project>
  npm install
```

# git submodule
子プロジェクトはsubmoduleとして登録する。
```
  $ git submodule add <repository> <directory>
```

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
`install`がpackageのインストール後に実行され、`postinstall`がその後に実行される。

name値は空白不可。

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

# livereload
livereloadxパッケージを利用。  
http://tech.nitoyon.com/ja/blog/2013/02/27/livereloadx/  
livereloadxコマンドで引数に監視したいディレクトリを渡す。  
`livereloadx [path/to/dir]`（パス省略時はカレントディレクトリ）  
--static(s)オプションで静的サーバーとしても利用可能。  
`livereloadx -s [-p 35729] [path/to/dir]`  
http://localhost:35729/ >> path/to/dir/index.html  

# webpack
http://webpack.github.io/docs/
webpack --watch(w) --config __config-file__
```
scripts:
  "webpack": "webpack -w"
```
設定ファイルをwebpack.config.jsまたはwebpack.config.coffee以外の名前にする場合は、--configオプションでの指定が必要。
`webpack --config webpack.coffee`

js以外のファイルをrequireする場合は、loaderが必要。
`npm install coffee-loader`

# babel
本体パッケージをインストール
```
npm install babel-cli
```
実行
```
babel 入力元 -d 出力先  // -wオプション：監視
```
ES2015にトランスパイルするには、プリセット用の別途パッケージと、.babelrcファイルが必要。
```
npm install babel-preset-es2015
```
```
cat > .babelrc
{ "preset" ["es2015"] }
```
## webpackで利用する場合
loaderのインストール
```
npm install babel-loader
```
