#! /bin/sh

# 事前にgithubリポジトリが必要。
# 引数にプロジェクト名を渡す。

# make project
project=${1:?'no project name'}
repository="https://github.com/keiskey/$project.git"

cd $HOME/Sites/various

# ディレクトリ作成と移動
mkdir $project && cd $_

# リポジトリを登録
git init  # ローカルリポジトリの生成
git remote add origin $repository  # リモートリポジトリの登録

# masterに最初のコミットをする
:> README.md
git add README.md
git commit -m 'initial'  # 一度コミットすると、`git branch`でmasterが表示されるようになる。
git push  # 一度プッシュすると、`git branch -r`でorigin/masterが表示されるようになる。

# gh-pagesブランチを作成してチェックアウトする
git checkout -b gh-pages
git push
# XXX: githubのSettingsでDefault brancheを更新しておく。

# submoduleとして登録する
cd ../  # variousに移動
git submodule add $repository $project

# package.jsonをリンクしてインストール
ln index/package.orig.json $project/package.json  # ハードリンク
cd $project
npm install
