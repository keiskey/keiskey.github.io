# ディレクトリ構成
+ index/
  - jade/
  - coffee/
  - stylus/
  - js/
  - css/
  - img/
  - .html
  - gulpfile.coffee
- js/ (lib)
- css/
- img/
- audio/
- video/
- model/
- shader/
- index.html > index/index.html (hard link)
- package.json
- bower.json
- README.md
- .gitignore

# atom project設定
~/Preferences/dotfiles/atom/projects.cson
```
"Various":
  "title": "Various Projects"
  "paths": [
    "/Users/keisukey/Sites/various"
  ]
```

# github設定
## A. 一つのリポジトリで管理する場合
github.ioリポジトリにすべてを格納する。
## B. 複数のリポジトリで管理する場合
プロジェクトごとにリポジトリを作成。
gh-pageブランチでページが表示されるようにする。
リソースを共有化できない代わりに、単体での稼働が容易になる。
## C. 共有リソースをgithub.ioリポジトリに格納し、各プロジェクト単位でリポジトリを作成する案
ディレクトリ構成が同じなら、相対参照可能ではないだろうか。
```
various/ (main repository: github.io/)
  - img/
  - project/ (project repository: github.io/project)
```

keiskeyとkeisukeyの両方を登録する。
```
git remote -v
origin	https://github.com/keiskey/keiskey.github.io.git (fetch)
origin	https://github.com/keiskey/keiskey.github.io.git (push)
# originという名前にひも付けられている。

# 追加登録する場合はラベルを指定する。
git remote add <label> <repository url>
git remote add keisukey https://github.com/keisukey/keisukey.github.io.git

# push時は名前を指定する。
git push <label> <branch>
git push keisukey

# ラベルを指定して削除する。
git remote rm <label>
```
