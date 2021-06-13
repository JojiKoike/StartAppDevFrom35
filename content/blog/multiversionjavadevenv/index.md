---
title: jenvによる複数バージョン共存、切り替え可能なJava開発環境の構築 (MacOS編)
date: 2019-12-30T11:22:30.000Z
category : 
description: jenvを用いた、複数のバージョンのJava開発環境（JDK：Java Development Kit）の共存とバージョン切替可能なJava開発環境構築手順をご紹介します。
tags: ['anyenv', 'Java', 'jdk', 'jenv']
thumbnail:
hero:
---

# 本レッスンのゴール
複数バージョンのJava開発環境（JDK : Java Development KIt)をインストールし、
デフォルトで使用するバージョンを切り替えて動作を確認する
# 想定環境
以下の環境を想定しています。

OS : MacOSX Mojave （バージョン 10.14.6）
# 前提条件
<ul>
 	anyenvがインストールされている事。
 	brewがインストールされている事。
</ul>
<div class="attention">

各インストール方法については、以下のリンク先を参照して下さい。
<ul>
 	<a href="https://startappdevfrom35.com/anyenv_install/" target="_blank" rel="noopener noreferrer">anyenvのインストール</a>
 	<a href="https://startappdevfrom35.com/homebrewinstall/">Homebrewのインストール</a>
</ul>
</div>
# 全体の流れ
以下の流れで進めます。
<ol>
 	jenvのインストール
 	JDKのインストール
 	jenvの設定
 	動作確認
</ol>
# インストール作業
## 1． jenvのインストール
複数バージョンの共存、切替のために、jenvを導入します。端末で以下のコマンドを実行します。

```
$ anyenv install jenv
```"

以下のコマンドでバージョンコードが出力されれば、jenvのインストールは成功です。

```
$ jenv --version
jenv 0.5.2-10-g5a20be6
```"

## 2． JDKのインストール
pyenv等と異なり、jenvは言語環境のダウンロード、インストール機能を持たない為、
JDKのインストールについてはbrewで行います。
ここでは、Ver.8系最新と、Ver.12系最新をそれぞれインストールします。
なお、JDKはOracleをはじめとして様々な提供元がありますが、
無償かつ比較的ポピュラーと思われるOpenJDKをインストールします。

以下のコマンドでまず、Ver.8系最新をインストールします。

```
$ brew tap AdoptOpenJDK/openjdk
$ brew cask install adoptopenjdk8
....
Password: ログインパスワードを入力
adoptopenjdk8 was successfully installed!
```"

続けて、Ver.12系最新を以下のコマンドでインストールします。

```
$ brew cask install adoptopenjdk12
....
Password: ログインパスワードを入力
adoptopenjdk12 was successfully installed!
```"

ここまでで、JDKのインストールは完了しました。
## 3． jenvの設定
まず、先程インストールしたJDKをjenvに認識させる設定をします。

以下のコマンドで、各バージョンのディレクトリ名を確認します。

```
$ ls /Library/Java/JavaVirtualMachines
adoptopenjdk-12.jdk adoptopenjdk-8.jdk
```"

それぞれのバージョンのディレクトリ名が確認できたところで、
以下のコマンドで、インストールしたJDKをjenvに認識させます。

```
$ jenv add /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home
1.8 added
1.8.0.222 added
openjdk64-1.8.0.222 added
$ jend add /Library/Java/JavaVirtualMachines/adoptopenjdk-12.jdk/Contents/Home
12.0 added
12.0.1 added
openjdk64-12.0.1 added
```"

<div class="attention">環境により若干の出力の違いがあります。</div>
以下のコマンドで、正常に認識されている事を確認します。

```
$ jenv versions
system (set by /Users/hogehoge/.anyenv/envs/jenv/version)
1.8
1.8.0.222
12.0
12.0.1
openjdk64-1.8.0.222
openjdk64-12.0.1
```"

以下のコマンドでデフォルトのバージョンを設定します。

```
$ jenv global 1.8.0.222
$ jenv versions
system
1.8
1.8.0.222 (set by /Users/hogehoge/.anyenv/envs/jenv/version)
12.0
12.0.1
openjdk64-1.8.0.222
openjdk64-12.0.1
```"

## 4． 動作確認
最後に、以下のコマンドで、jenvで設定したjavaが呼ばれる事を確認します。

```
$ which java
/Users/hogehoge/.anyenv/envs/jenv/shims/java
$ java -version
openjdk version &quot;1.8.0_222&quot;
OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_222-b10)
OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.222-b10, mixed mode)
```"

以上で、jenvによるJava環境構築の完了です。
