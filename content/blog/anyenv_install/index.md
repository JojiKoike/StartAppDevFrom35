---
title: anyenvによる複数言語環境構築の準備
date: 2019-01-05T12:24:18.000Z
category: anyenv
description: Python, Ruby等の複数言語の環境を簡単に構築するanyenv及びプラグインのインストール手順についてご紹介いたします。
tags: ["anyenv", "Mac"]
thumbnail: "./anyenvlogo.png"
hero: "./anyenvlogo.png"
---

# 本レッスンのゴール

- anyenv のインストールを完了する

<point>
anyenvとは、Python, PHP等の様々な言語の開発環境を簡単にセットアップするツールです。  現在、Python, node.js, Golang, Ruby, PHP, Scala, R等、全18言語に対応しています。 一度使うと手放せないこと請け合いなので、ぜひ使ってみてください。
</point>

# 想定環境

以下の環境を想定しています。

- OS : MacOSX Mojave （バージョン 10.14.6）

# 前提条件

- git がインストールされている事。

<point>
Homebrewによるインストールも可能ですが、大人の事情でHomebrewが使えないケースを考慮し、
今回は git コマンドを使ったインストール方法をご説明します。
</point>

# 全体の流れ

以下の流れで進めます。

1. anyenv のクローン
2. 環境変数の設定
3. プラグインのインストール
4. 動作確認

# インストール作業

## 1． anyenv の取得

端末で以下のコマンドを実行します。

```bash
$ git clone https://github.com/anyenv/anyenv ~/.anyenv
```

<point>
上記コマンドでは、anyenvをgithubから取得し、ホームディレクトリ配下の.anyenvディレクトリにクローン（複製）するという処理を行っています。</point>

## 2． 環境変数の設定

このままだとパスが通っていないので、/home/hogehoge/.anyenv/bin/anyenv といった感じでフルパスでコマンドを打つという苦行を強いられる為、次の手順で環境変数を設定しておきます。

<attention>
使っているシェルによって、設定を記述するファイル名が変わりますので、
もし今使っているシェルの種類がわからない場合は、以下のコマンドで確認してください。

```bash
$ echo $SHELL
```

出力例とその意味、それぞれの設定を記述するファイル/bin/bash : bash を使っている ~/.bash_profile/bin/zsh : zsh を使っている ~/.zshrc

- bash な方

```bash

$ echo 'export PATH=&quot;$HOME/.anyenv/bin:$PATH&quot;' >> ~/.bash_profile
$ source ~/.bash_profile
```

- zsh な方

```bash
$ echo 'export PATH=&quot;$HOME/.anyenv/bin:$PATH&quot;' >> ~/.zshrc
$ source ~/.zshrc
```

</attention>

以下のコマンドで、バージョンコードが出力されれば、anyenv の取得と環境変数の設定は成功です。

```bash
$ anyenv --version
anyenv 1.1.1
```

## 3． セットアップ

このままでは、anyenv を使って pyenv などのインストールが出来ないので、
以下のコマンドで、anyenv のセットアップを行います。

```bash
$ anyenv init
```

シェルを一旦閉じ、再度立ち上げ、以下のコマンドを実行して manifest directory を作成します。

```bash
$ anyenv install --init
```

これで anyenv のインストール作業は完了です。

## 4． プラグインのインストール

このままでも使えますが、バージョンアップ作業を楽にするためのプラグインを導入します。

```bash
$ mkdir -p ~/.anyenv/plugins
$ git clone https://github.com/znz/anyenv-update.git ~/.anyenv/plugins/anyenv-update

```

以下のコマンドで、プラグインが正常にインストールされたことを確認します。

```bash
$ anyenv update
Updating 'anyenv'...
Updating 'anyenv/anyenv-update'...
...
```

## 5． 動作確認

最後に、動作確認のついでに、以下のコマンドで、インストール可能な言語の一覧を出力してみます。

```bash
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
```

<point>
pyenv 等を使ったことがある方は気がついたと思いますが、anyenv って要は、pyenv 等の統合管理ツールなんですね。
</point>

以上で、anyenv のインストールの説明を終わります。
