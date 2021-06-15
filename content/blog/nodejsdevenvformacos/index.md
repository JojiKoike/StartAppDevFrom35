---
title: Node.js開発環境構築（MacOS編）
date: 2018-01-07T04:32:20.000Z
category: node.js
description: MacOSにnodebrewを使ってバージョン切り替え可能なNode.js開発環境を構築する手順をご紹介いたします。
tags: ["anyenv", "Mac", "ndenv", "Node.js"]
thumbnail: "./1280px-Node.js_logo.svg.png"
hero: "./1280px-Node.js_logo.svg.png"
---

# 改訂内容

- nodebrew 経由から、ndenv 経由でのインストールへ変更
- anyenv による ndenv 導入手順追加

# 本レッスンのゴール

様々なバージョンが共存可能な Node.js 開発環境を構築し、動作確認が取れるまで。

# 想定環境

以下の環境を想定しています。

- OS : MacOSX Mojave（バージョン 10.14.6）

# 前提条件

- anyenv がインストールされている事

<attention>
anyenvのインストール方法については、以下のリンク先を参照ください。

- <a href="https://startappdevfrom35.com/anyenv_install/" target="_blank" rel="noopener noreferrer">anyenv のインストール</a>

</attention>

# 全体の流れ

以下の流れで進めます。

1. ndenv のインストール
2. Node.js (LTS 版最新)のインストール
3. 動作確認

# 作業

## 1. ndenv のインストール

端末を起動し、以下のコマンドを実行します。

```bash
$ anyenv install ndenv
```

以下のコマンドで ndenv のバージョンコードが出力されれば、ndenv のインストールは成功です。

```bash
$ ndenv --version
ndenv 0.4.0-5-g6ee4840
```

## 2. Node.js（LTS 版最新）のインストール

<a href="http://nodejs.org" target="_blank" rel="noopener noreferrer">Node.js の公式ホームページ</a>にて最新の LTS のバージョンを確認します。

（2019 年 09 月 21 日時点では v10.16.3）

次に、以下のコマンドで、先程調べたバージョンの Node.js がインストール可能か確認します。

```bash

$ ndenv install -l
Available versions:
v0.1.14
v0.1.15
v0.1.16
v0.1.17
...
v10.16.1
v10.16.2
v10.16.3
v11.0.0
....

```

次に、以下のコマンドで、指定のバージョンの Node.js をインストールし、デフォルトのバージョンを指定します。

```bash

$ ndenv install v10.16.3
$ ndenv global v10.16.3

```

ndenv でインストールし、設定したデフォルトのバージョンの Node.js が使用されることを以下のコマンドで確認します。

```bash

$ which node
/Users/hogehoge/.anyenv/envs/ndenv/shims/node
$ node -v
v10.16.3

```

## 3. 動作確認

以下のコマンドで Node.js のインタラクティブシェルを起動します。

```bash

$ node
>

```

以下のような簡単なプログラムを入力し、出力が得られれば、動作確認完了です。

```bash

>console.log('Hello World')
Hello World
undefined
>

```

以上で、MacOSX への Node.js 開発環境のセットアップは完了です。
