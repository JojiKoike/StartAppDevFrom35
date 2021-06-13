---
title: anyenvによる複数言語環境構築の準備
date: 2019-01-05T12:24:18.000Z
category: anyenv
description: Python, Ruby等の複数言語の環境を簡単に構築するanyenv及びプラグインのインストール手順についてご紹介いたします。
tags: ["anyenv", "Mac"]
thumbnail:
hero:
---

# 本レッスンのゴール

anyenv のインストールを完了する

<div class="point">
anyenvとは、Python, PHP等の様々な言語の開発環境を簡単にセットアップするツールです。  現在、Python, node.js, Golang, Ruby, PHP, Scala, R等、全18言語に対応しています。 一度使うと手放せないこと請け合いなので、ぜひ使ってみてください。</div>

# 想定環境

以下の環境を想定しています。

<ul>
OS : MacOSX Mojave （バージョン 10.14.6）
</ul>

# 前提条件

<ul>
gitがインストールされている事。
</ul>
<div class="point">Homebrewによるインストールも可能ですが、大人の事情でHomebrewが使えないケースを考慮し、今回はgitコマンドを使ったインストール方法をご説明します。</div>

# 全体の流れ

以下の流れで進めます。

<ol>
anyenvのクローン
環境変数の設定
プラグインのインストール
動作確認
</ol>
# インストール作業
## 1． anyenvの取得
端末で以下のコマンドを実行します。
```
$ git clone https://github.com/anyenv/anyenv ~/.anyenv
```"
<div class="point">上記コマンドでは、anyenvをgithubから取得し、ホームディレクトリ配下の.anyenvディレクトリにクローン（複製）するという処理を行っています。</div>
## 2． 環境変数の設定
このままだとパスが通っていないので、コマンドを/home/hogehoge/.anyenv/bin/anyenvといった感じでフルパス指定するという苦行を強いられる為、次の手順で環境変数を設定しておきます。
<div class="attention">使っているシェルによって、設定を記述するファイル名が変わりますので、もし今使っているシェルの種類がわからない場合は、以下のコマンドで確認してください。
```
$ echo $SHELL
```"
出力例とその意味、それぞれの設定を記述するファイル/bin/bash : bashを使っている ~/.bash_profile/bin/zsh : zshを使っている ~/.zshrc</div>
<ul>
 bashな方
</ul>
```
$ echo 'export PATH=&quot;$HOME/.anyenv/bin:$PATH&quot;' &amp;amp;amp;gt;&amp;amp;amp;gt; ~/.bash_profile
$ source ~/.bash_profile
```"
<ul>
 zshな方
</ul>
```
$ echo 'export PATH=&quot;$HOME/.anyenv/bin:$PATH&quot;' &amp;amp;amp;gt;&amp;amp;amp;gt; ~/.zshrc
$ source ~/.zshrc
```"
以下のコマンドで、バージョンコードが出力されれば、anyenvの取得と環境変数の設定は成功です。
```
$ anyenv --version
anyenv 1.1.1
```"
&nbsp;
## 3． セットアップ
このままでは、anyenvを使ってpyenvなどのインストールが出来ないので、
以下のコマンドで、anyenvのセットアップを行います。
```
$ anyenv init
```"
シェルを一旦閉じ、再度立ち上げ、以下のコマンドを実行してmanifest directoryを作成します。
&nbsp;
```
$ anyenv install --init
```"
これでanyenvのインストール作業は完了です。
## 4． プラグインのインストール
このままでも使えますが、バージョンアップ作業を楽にするためのプラグインを導入します。
```
$ mkdir -p ~/.anyenv/plugins
$ git clone https://github.com/znz/anyenv-update.git ~/.anyenv/plugins/anyenv-update
```"
以下のコマンドで、プラグインが正常にインストールされたことを確認します。
```
$ anyenv update
Updating 'anyenv'...
Updating 'anyenv/anyenv-update'...
...
```"
## 4． 動作確認
最後に、動作確認のついでに、以下のコマンドで、インストール可能な言語の一覧を出力してみます。
```
$ anyenv install --list
  Renv
  crenv
  denv
  erlenv
  exenv
  goenv
  hsenv
  jenv
  luaenv
  nodenv
  phpenv
  plenv
  pyenv
  rbenv
  sbtenv
  scalaenv
  swiftenv
  tfenv
```"
<div class="point">pyenv等を使ったことがある方は気がついたと思いますが、anyenvって要は、pyenv等の統合管理ツールなんですね。</div>
以上で、anyenvのインストールの説明を終わります。
