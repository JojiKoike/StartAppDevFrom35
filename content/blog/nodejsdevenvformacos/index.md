---
title: Node.js開発環境構築（MacOS編）
date: 2018-01-07T04:32:20.000Z
category : 
description: MacOSにnodebrewを使ってバージョン切り替え可能なNode.js開発環境を構築する手順をご紹介いたします。
tags: ['anyenv', 'Mac', 'ndenv', 'Node.js']
thumbnail:
hero:
---

# 改訂内容
<ul>
 	nodebrew経由から、ndenv経由でのインストールへ変更
 	anyenvによるndenv導入手順追加
</ul>
# 本レッスンのゴール
様々なバージョンが共存可能なNode.js開発環境を構築し、動作確認が取れるまで。
# 想定環境
以下の環境を想定しています。
<ul>
 	OS : MacOSX Mojave（バージョン 10.14.6）
</ul>
# 前提条件
<ul>
 	anyenvがインストールされている事
</ul>
<div class="attention">anyenvのインストール方法については、以下のリンク先を参照ください。
<ul>

<a href="https://startappdevfrom35.com/anyenv_install/" target="_blank" rel="noopener noreferrer">anyenvのインストール</a>

</ul>
</div>

# 全体の流れ
以下の流れで進めます。
<ol>
 	ndenvのインストール
 	Node.js (LTS版最新)のインストール
 	動作確認
</ol>
# 作業
## 1. ndenvのインストール
端末を起動し、以下のコマンドを実行します。

```
$ anyenv install ndenv
```"

以下のコマンドでndenvのバージョンコードが出力されれば、ndenvのインストールは成功です。

```
$ ndenv --version
ndenv 0.4.0-5-g6ee4840
```"

## 2. Node.js（LTS版最新）のインストール
<a href="http://nodejs.org" target="_blank" rel="noopener noreferrer">Node.jsの公式ホームページ</a>にて最新のLTSのバージョンを確認します。

（2019年09月21日時点ではv10.16.3）

次に、以下のコマンドで、先程調べたバージョンのNode.jsがインストール可能か確認します。

```
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
```"

次に、以下のコマンドで、指定のバージョンのNode.jsをインストールし、デフォルトのバージョンを指定します。

```
$ ndenv install v10.16.3
$ ndenv global v10.16.3
```"

ndenvでインストールし、設定したデフォルトのバージョンのNode.jsが使用されることを以下のコマンドで確認します。

```
$ which node
/Users/hogehoge/.anyenv/envs/ndenv/shims/node
$ node -v
v10.16.3
```"

## 3. 動作確認
以下のコマンドでNode.jsのインタラクティブシェルを起動します。

```
$ node
&gt;
```"

以下のような簡単なプログラムを入力し、出力が得られれば、動作確認完了です。

```
&gt; console.log(&quot;Hello World&quot;)
Hello World
undefined
&gt;
```"

以上で、MacOSXへのNode.js開発環境のセットアップは完了です。
